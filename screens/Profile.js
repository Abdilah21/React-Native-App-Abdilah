import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  TextInput,
  Pressable,
  Modal,
  Platform,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Container} from 'native-base';
import Input from '../src/components/Input';
import {Dropdown} from 'react-native-element-dropdown';
import DocumentPicker, {types} from 'react-native-document-picker';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as permissions from 'react-native-permissions';
// you may also import just the functions or constants that you will use from this library
import {request, PERMISSIONS} from 'react-native-permissions';

const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
];

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Profile({item, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');

  //====================Document picking====================

  const [isPicking, setIsPicking] = useState(false);

  const handleFilePick = async () => {
    if (isPicking) {
      setIsPicking(false);
      return;
    }

    setIsPicking(true);
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log('File picked:', result);
      setModalVisible(false);
    } catch (err) {
      console.log('File pick error:', err);
      setModalVisible(false);
    } finally {
      setIsPicking(false);
    }
  };

  //=====================Camera ===================

  const [ImageUri, setImageUri] = useState('');
  const [SelectedImage, setSelectedImage] = useState('');

  CameraPermission = async () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    ).then(result => {
      setSelectedImage(result);
      console.log(result);
    });
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };

    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User Cancelled');
      } else if (response.error) {
        console.log('ImagePicker error', response.error);
      } else if (response.customButton) {
        console.log('User taped custom button', response.customButton);
      } else {
        const source = {uri: 'data:image/jpeg;base64' + response.base64};
        setImageUri(source);
      }
    });
  };

  //=====================Image library ===================

  const ImagePicker = () => {
    let options = {
      storageOptions: {
        path: 'image',
      },
    };
    launchImageLibrary(options, response => {
      setSelectedImage(response.assets[0].uri);
      console.log(response.assets[0].uri);
      setModalVisible(false);
    });
  };

  //========================= return =========================

  return (
    <Container style={styles.ContainerStyle}>
      <ScrollView style={styles.ContainerStyle} bounces={false}>
        {/* ///////////////////////////Header ////////////////////////////// */}
        <View style={styles.headstyle}>
          <Text style={styles.EditProfileTextStyle}>Edit Profile</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home1');
            }}>
            <View style={styles.ViewBackStyle}>
              <Image
                style={styles.BackStyle1}
                source={require('../src/assets/Images/back.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        {/* ///////////////////////////Header ////////////////////////////// */}

        {/*/////////////////////////////middle/////////////////////////////*/}

        <View style={styles.midcontainer}>
          <Text style={styles.HeadTextStyle}>Account Information</Text>
          <Text style={styles.SecondTextStyle}>
            You can modify your personal data
          </Text>

          <Image
            source={
              SelectedImage
                ? {uri: SelectedImage}
                : require('../src/assets/Images/MyPic.jpeg')
            }
            style={styles.AvatarImgStyle}
            // resizeMode="contain"
          />

          <Pressable
            style={styles.AvatarModalStyle}
            onPress={() => setModalVisible(true)}>
            <View style={styles.ViewHeadImgStyle}>
              <Image
                style={styles.ShareStyle}
                source={require('../src/assets/Images/camera.png')}
                resizeMode="contain"
              />
            </View>
          </Pressable>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(false);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Pressable
                    style={styles.Modalbutton}
                    onPress={() => {
                      CameraPermission();
                      // setModalVisible(false);
                    }}>
                    <Text style={styles.TextButtonStyle}>Take Picture</Text>
                  </Pressable>
                  <Pressable
                    style={styles.Modalbutton}
                    onPress={() => {
                      ImagePicker();
                      // setModalVisible(false);
                    }}>
                    <Text style={styles.TextButtonStyle}>
                      Choose from library
                    </Text>
                  </Pressable>
                  <Pressable
                    style={styles.Modalbutton}
                    onPress={() => {
                      handleFilePick();
                      // setModalVisible(false);
                    }}>
                    <Text style={styles.TextButtonStyle}>
                      Choose from documents
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.butext1}>
              First Name <Text style={styles.RedStar}>*</Text>
            </Text>
            <Text style={styles.butext}>
              Last Name <Text style={styles.RedStar}>*</Text>
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignSelf: 'center',
              left: 105,
            }}>
            <Input
              secure={false}
              value={FirstName}
              setValue={setFirstName}
              icon={require('../src/assets/Images/profile.png')}
              styler={styles.textinstyle}
            />

            <Input
              secure={false}
              value={LastName}
              setValue={setLastName}
              icon={require('../src/assets/Images/profile.png')}
              styler={styles.textinstyle}
            />
          </View>

          <Text style={styles.EmailText}>
            Email <Text style={styles.RedStar}>*</Text>
          </Text>
          <Input
            secure={false}
            value={Email}
            setValue={setEmail}
            icon={require('../src/assets/Images/Email.png')}
            styler={styles.Longtextinstyle}
          />

          <Text style={styles.butext1}>Gender</Text>

          <Dropdown
            style={styles.Longtextinstyle}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            maxHeight={100}
            labelField="label" //To show the labels
            valueField="value" //To change value without go back to start
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />

          <Text style={styles.DescriptionText}>Short Description</Text>
          <TextInput
            multiline={true}
            style={styles.Descriptiontextinstyle}
            placeholder="Please enter description"
          />

          <TouchableOpacity
            onPress={() => navigation.navigate('Home1')}
            style={styles.Savebutton}>
            <Text style={styles.TextButtonStyle}>Save</Text>
          </TouchableOpacity>
        </View>

        {/*/////////////////////////////middle/////////////////////////////*/}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 0.22,
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  //======================================
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },

  //=======================================

  ContainerStyle: {height: windowHeight, width: windowWidth},

  EditProfileTextStyle: {
    fontSize: 32,
    top: 40,
    alignSelf: 'center',
    right: 50,
    color: '#000',
  },
  headstyle: {
    height: 110,
    width: windowWidth,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  BackStyle1: {
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignSelf: 'center',
    tintColor: '#000',
  },
  ViewBackStyle: {
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 15,
    height: 42,
    width: 42,
    justifyContent: 'center',
    left: 10,
  },
  midcontainer: {
    width: '95%',
    borderColor: '#f9f9f9',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    padding: 30,
    marginBottom: 50,
    backgroundColor: 'white',
  },
  HeadTextStyle: {fontSize: 23, color: 'black', fontWeight: '700'},
  SecondTextStyle: {
    fontSize: 16,
    marginTop: 10,
    color: '#838383',
    fontWeight: '500',
  },
  AvatarImgStyle: {
    height: 100,
    width: '30%',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  AvatarModalStyle: {
    height: 100,
    width: '30%',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 117,
  },
  textinstyle: {
    paddingHorizontal: 30,
    width: '45%',
    color: '#000',
    borderRadius: 15,
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
  },
  Longtextinstyle: {
    paddingHorizontal: 30,
    width: '100%',
    color: '#000',
    borderRadius: 15,
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
  },
  Descriptiontextinstyle: {
    paddingHorizontal: 30,
    width: '100%',
    color: '#838383',
    fontSize: 16,
    borderRadius: 15,
    height: 200,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  DescriptionText: {fontSize: 16, fontWeight: '600', top: 30, color: '#000'},

  butext: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    right: 90,
    color: '#000',
  },
  butext1: {fontSize: 16, fontWeight: '600', marginBottom: 10, color: '#000'},
  EmailText: {fontSize: 16, fontWeight: '600', top: 10, color: '#000'},
  RedStar: {color: 'red', fontSize: 16},
  DescriptionContainer: {
    width: windowWidth - 20,
    borderColor: '#f9f9f9',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    alignSelf: 'center',
  },
  HeadText: {fontSize: 16, fontWeight: '600', paddingBottom: 20},
  TextButtonStyle: {alignSelf: 'center', fontSize: 18, color: '#ffffff'},
  Savebutton: {
    backgroundColor: '#0d77d0',
    marginTop: 40,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  Modalbutton: {
    backgroundColor: '#0d77d0',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 50,
    marginTop: 10,
  },
  ViewHeadImgStyle: {
    height: 30,
    width: 30,
    backgroundColor: '#0070cd',
    borderRadius: 30,
    justifyContent: 'center',
    left: 80,
  },
  ShareStyle: {
    height: 16,
    width: 16,
    tintColor: '#fff',
    alignSelf: 'center',
  },
});
