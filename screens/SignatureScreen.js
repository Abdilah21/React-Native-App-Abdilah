import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Pressable,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {createRef, useRef, useState} from 'react';
import SignatureCapture from 'react-native-signature-capture';
import {Container} from 'native-base';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';
import DocumentPicker, {types} from 'react-native-document-picker';
import LottieView from 'lottie-react-native';
import COLORS from '../src/COLORS';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SignatureScreen({navigation, value}) {
  //=====================Print pdf=======================

  const printPDF = async () => {
    // const results = await RNHTMLtoPDF.convert({
    //   html: '<h1>Custom converted PDF Document</h1>',
    //   fileName: 'test',
    //   base64: true,
    // });
    //
    await RNPrint.print({filePath: `data:image/png;base64,${text?.encoded}`});
  };

  const printRemotePDF = async () => {
    await RNPrint.print({
      filePath: text?.pathName,
    });
  };
  const sign = useRef(null);
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log('text', text);

  return (
    <Container style={styles.ContainerStyle}>
      <ScrollView style={styles.ContainerStyle} bounces={false}>
        {/* ///////////////////////////Header ////////////////////////////// */}
        <View style={styles.headstyle}>
          <Text style={styles.EditProfileTextStyle}>Signature</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('PrpertiesDetails');
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
        <View style={styles.MidContainerStyle}>
          <Text style={styles.HeadTextStyle}>Write your Signature</Text>
          <View style={styles.ViewSignatureStyle}></View>
          <SignatureCapture
            style={styles.SignatureStyle}
            saveImageFileInExtStorage={true}
            viewMode={'portrait'}
            showBorder={false}
            maxSize={1000}
            showTitleLabel={false}
            showNativeButtons={false}
            ref={sign}
            onSaveEvent={value => {
              setTimeout(() => {
                setLoading(true);
                console.log(value);
                setText(value);
              }, 2000);
              setLoading(false);
            }}
          />

          <View style={styles.FlexDirectionStyle}>
            <Pressable
              style={styles.Signaturebuttons}
              onPress={() => {
                sign.current.saveImage();
              }}>
              <Text style={styles.TextButtonStyle}>Save</Text>
            </Pressable>

            <Pressable
              style={styles.Signaturebuttons}
              onPress={() => sign.current.resetImage()}>
              <Text style={styles.TextButtonStyle}>Reset</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.MidContainerStyle2}>
          <Text style={styles.HeadTextStyle2}>Your Signature</Text>
          {loading ? (
            <Image
              source={{uri: `data:image/png;base64,${text?.encoded}`}}
              style={styles.SavedSignatureStyle}
            />
          ) : (
            //spinner
            <>
              <LottieView
                source={require('../src/assets/Images/House.json')}
                autoPlay
                loop
                style={{width: '30%', alignSelf: 'center', marginTop: 20}}
              />
              <Text
                style={{
                  marginTop: 50,
                  alignSelf: 'center',
                  fontSize: 20,
                  width: 100,
                  color: COLORS.Blue,
                }}>
                Loading...
              </Text>
            </>
          )}
        </View>
        {text && (
          <Pressable style={styles.PrintPdfStyle} onPress={() => printPDF()}>
            <Text style={styles.TextButtonStyle}>print</Text>
          </Pressable>
        )}
        {/* <Image source={printPDF()} /> */}
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  ContainerStyle: {
    height: windowHeight,
    width: windowWidth,
  },
  ContainerStyle2: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
  FlexDirectionStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  headstyle: {
    height: 110,
    width: windowWidth,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
  },

  BackStyle1: {
    height: 26,
    width: 26,
    justifyContent: 'center',
    alignSelf: 'center',
    tintColor: '#000',
  },
  EditProfileTextStyle: {
    fontSize: 32,
    top: 40,
    alignSelf: 'center',
    right: 50,
    color: '#000',
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
  SignatureStyle: {
    height: 350,
    width: '90%',
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  ViewSignatureStyle: {
    height: 360,
    width: '92%',
    borderColor: '#000',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 90,
    position: 'absolute',
  },
  HeadTextStyle: {
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
    marginTop: 20,
  },
  MidContainerStyle: {
    width: '95%',
    backgroundColor: '#fff',
    borderColor: '#f9f9f9',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
  },
  MidContainerStyle2: {
    width: '95%',
    backgroundColor: '#fff',
    borderColor: '#f9f9f9',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
    height: 450,
  },
  HeadTextStyle2: {
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  Signaturebuttons: {
    backgroundColor: COLORS.Blue,
    borderRadius: 10,
    justifyContent: 'center',
    width: '40%',
    height: 50,
    marginTop: 20,
    marginRight: 5,
  },
  TextButtonStyle: {
    alignSelf: 'center',
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '500',
  },
  SavedSignatureStyle: {height: 350, width: '90%', alignSelf: 'center'},
  SpinnerStyle: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100,
  },
  PrintPdfStyle: {
    backgroundColor: '#0d77d0',
    borderRadius: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 50,
    marginTop: 20,
    marginRight: 5,
    marginBottom: 30,
  },
});
// const state = {
//   selectedPrinter: null,
// };

// // @NOTE iOS Only
// const selectPrinter = async () => {
//   const selectedPrinter = await RNPrint.selectPrinter({x: 100, y: 100});
//   this.setState({selectedPrinter});
// };

// // @NOTE iOS Only
// const silentPrint = async () => {
//   if (!this.state.selectedPrinter) {
//     alert('Must Select Printer First');
//   }

//   const jobName = await RNPrint.print({
//     printerURL: this.state.selectedPrinter.url,
//     html: '<h1>Silent Print</h1>',
//   });
// };

// const printHTML = async () => {
//   await RNPrint.print({
//     html: '<h1>Heading 1</h1><h2>Heading 2</h2><h3>Heading 3</h3>',
//   });
// };
