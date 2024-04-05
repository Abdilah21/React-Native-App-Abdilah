import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Container} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LittleContainer from '../src/components/LittleContainer';
import PropertyCard from '../src/components/PropertyCard';
import BottomBar from '../src/components/BottomBar';

import {useNavigation} from '@react-navigation/native';
import PropertyCatagory from '../src/components/PropertyCatagory';
import PropertyCardHorizontal from '../src/components/PropertyCardHorizontal';
import ListProperties from '../src/pages/ListProperties';
import Toast from 'react-native-toast-message';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();

export default function Home1({props, navigation}) {
  const data = [
    {
      name: 'First card',
      location: 'Egypt',
      beds: 6,
      bath: 2,
      dis: 210,
      price: 1900,
      DifSource: require('../src/assets/Images/TELEMMGLPICT000339408897_16868385229620_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg.webp'),
    },
    {
      name: 'Secoud card',
      location: 'KSA',
      beds: 1,
      bath: 4,
      dis: 190,
      price: 1400,
      DifSource: require('../src/assets/Images/tstDesign.png'),
    },
    {
      name: 'Third card',
      location: 'Dubai',
      beds: 3,
      bath: 2,
      dis: 200,
      price: 1800,
      DifSource: require('../src/assets/Images/Duabi.png'),
    },
    {
      name: 'Fourth card',
      location: 'Italy',
      beds: 5,
      bath: 2,
      dis: 300,
      price: 1200,
      DifSource: require('../src/assets/Images/London.jpg'),
    },
  ];

  return (
    <Container style={styles.ContainerStyle}>
      <ScrollView style={styles.ContainerStyle} bounces={false}>
        <Toast />
        {/*================================head=========================*/}
        <ImageBackground
          source={require('../src/assets/Images/homBanner.png')}
          style={styles.bg}>
          <View style={styles.HeadViewStyle}>
            <Image
              style={styles.LocationImgStyle}
              source={require('../src/assets/Images/location.png')}
              resizeMode="contain"
            />

            <Text style={styles.CurrentLocationStyle}>Current location</Text>

            <Text style={styles.NasrStyle}>Nasr city, Egypt</Text>
            <Image
              style={styles.NotificationStyle}
              source={require('../src/assets/Images/notification.png')}
              resizeMode="contain"
            />
          </View>
          <View style={styles.TopViewTextStyle}>
            <Text style={styles.TopTextStyle}>Find Your</Text>
            <Text style={styles.TopTextStyle}>Place Of Dream</Text>
          </View>
          <View style={styles.ViewInputTextStyle}>
            <TextInput
              style={styles.textinstyle}
              placeholder="What are you looking for ?"
            />
            <Image
              source={require('../src/assets/Images/search.png')}
              style={styles.SearchImgStyle}></Image>
            <Image
              source={require('../src/assets/Images/listDisplay.png')}
              style={styles.ListDisplayImgStyle}></Image>
          </View>
        </ImageBackground>

        {/*================================head=========================*/}

        {/*================================middle=========================*/}

        <View style={styles.ViewAllView}>
          <Text style={styles.middleText}>Our services</Text>

          <TouchableOpacity
            style={styles.ViewAllStyle}
            onPress={() => {
              navigation.navigate('ListProperties');
            }}>
            <Text style={styles.ViewAllTextStyle}>View All</Text>
          </TouchableOpacity>
        </View>
        {/*================================Little Containers=========================*/}
        <View style={styles.LittleViewStyle}>
          <LittleContainer
            DifSource={require('../src/assets/Images/propertyHome.png')}
            title={'Find Your Property'}
          />
          <LittleContainer
            DifSource={require('../src/assets/Images/propertyList.png')}
            title={'Add Your Property'}
          />
          <LittleContainer
            DifSource={require('../src/assets/Images/propertyHome.png')}
            title={'Find Your Property'}
          />
        </View>
        {/*================================Little Containers=========================*/}
        <View style={styles.ViewAllView}>
          <Text style={styles.middleText}>properties for sale</Text>

          <TouchableOpacity
            style={styles.ViewAllStyle}
            onPress={() => {
              navigation.navigate('ListProperties');
            }}>
            <Text style={styles.ViewAllTextStyle}>View All</Text>
          </TouchableOpacity>
        </View>
        {/*================================PropertyCard=========================*/}

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PropertyCard
            navigation={navigation}
            DifSource={require('../src/assets/Images/tstDesign.png')}
          />
          <PropertyCard
            navigation={navigation}
            DifSource={require('../src/assets/Images/tstDesign.png')}
          />
          <PropertyCard
            navigation={navigation}
            DifSource={require('../src/assets/Images/tstDesign.png')}
          />
        </ScrollView>

        {/*================================PropertyCard=========================*/}

        <View style={styles.ViewAllView}>
          <Text style={styles.middleText}>Find by location</Text>

          <TouchableOpacity
            style={styles.ViewAllStyle}
            onPress={() => {
              navigation.navigate('ListProperties');
            }}>
            <Text style={styles.ViewAllTextStyle}>View All</Text>
          </TouchableOpacity>
        </View>

        {/*================================propertyCatagory=========================*/}

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ListProperties');
            }}>
            <PropertyCatagory
              DifSource={require('../src/assets/Images/Duabi.png')}
              DifText={'Dubai'}
              DifText2={'548 property'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ListProperties');
            }}>
            <PropertyCatagory
              DifSource={require('../src/assets/Images/TELEMMGLPICT000339408897_16868385229620_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg.webp')}
              DifText={'Egypt'}
              DifText2={'400 property'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ListProperties');
            }}>
            <PropertyCatagory
              DifSource={require('../src/assets/Images/London.jpg')}
              DifText={'London'}
              DifText2={'220 property'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ListProperties');
            }}>
            <PropertyCatagory
              DifSource={require('../src/assets/Images/London.jpg')}
              DifText={'London'}
              DifText2={'220 property'}
            />
          </TouchableOpacity>
        </ScrollView>
        {/*================================propertyCatagory=========================*/}

        <View style={styles.ViewAllView}>
          <Text style={styles.middleText}>properties for sale</Text>

          <TouchableOpacity
            style={styles.ViewAllStyle}
            onPress={() => {
              navigation.navigate('ListProperties');
            }}>
            <Text style={styles.ViewAllTextStyle}>View All</Text>
          </TouchableOpacity>
        </View>

        {/*================================property Card Horizntal=========================*/}

        {data.map((item, key) => (
          <PropertyCardHorizontal
            key={key}
            item={item}
            DifSource={item?.DifSource}
          />
        ))}

        {/*================================property Card Horizntal=========================*/}

        {/*================================bottom=========================*/}
      </ScrollView>

      <BottomBar navigation={navigation} />

      {/*================================bottom=========================*/}
    </Container>
  );
}

const styles = StyleSheet.create({
  ContainerStyle: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: '#f9f9f9',
  },
  FlexDirectionStyle: {
    flexDirection: 'row',
  },
  ViewAllView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  LocationImgStyle: {
    height: 30,
    width: 30,
  },
  CurrentLocationStyle: {
    color: '#ffffff',
  },

  ViewNotificationStyle: {
    flexDirection: 'row',
  },

  NasrStyle: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 20,
    top: 15,
    right: 105,
  },

  NotificationStyle: {
    height: 30,
    width: 30,
    marginLeft: 100,
  },

  TopTextStyle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 2,
  },

  TopViewTextStyle: {marginLeft: 20, marginTop: 100, marginBottom: 10},

  ViewInputTextStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },

  SearchImgStyle: {
    height: 20,
    width: 20,
    position: 'absolute',
    top: '30%',
    left: 5,
  },

  ListDisplayImgStyle: {
    height: 40,
    width: 40,
    position: 'absolute',
    top: '10%',
    right: 20,
  },

  ViewAllStyle: {
    color: 'blue',
    fontSize: 16,
    marginVertical: 25,
  },
  ViewAllTextStyle: {
    fontSize: 14,
    color: '#0472ce',
    textDecorationLine: 'underline',
  },

  LittleViewStyle: {flexDirection: 'row', justifyContent: 'space-around'},

  PropertyCatStyle: {
    height: 190,
    width: '45%',
    borderRadius: 20,
    margin: 20,
  },
  DubaiStyle: {height: '100%', width: '100%', borderRadius: 30},
  LocationTextStyle: {
    position: 'absolute',
    margin: 20,
    marginTop: 100,
    padding: 20,
  },
  CatagoryTextStyle: {color: '#ffffff', fontSize: 22, fontWeight: '700'},
  CatagoryTextStyle2: {color: '#ffffff', fontSize: 16},

  //============================================================================

  middleText: {
    color: '#000000',
    fontSize: 20,
    margin: 20,
    fontWeight: '500',
  },

  image: {
    height: 30,
    width: 30,
    flexDirection: 'row',
  },
  bg: {height: 290, width: '100%'},

  HeadViewStyle: {
    flexDirection: 'row',
    padding: 10,
    top: 50,
    justifyContent: 'space-between',
  },
  textinstyle: {
    paddingHorizontal: 30,
    width: '90%',
    color: '#838383',
    borderRadius: 10,
    height: 55,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginRight: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#0d77d0',
    marginTop: 40,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  TextButtonStyle: {alignSelf: 'center', fontSize: 18, color: '#ffffff'},
});
