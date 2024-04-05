import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import PropertyCard from '../components/PropertyCard';
import PropertyCardHorizontal from '../components/PropertyCardHorizontal';

import {Container} from 'native-base';
import BottomBar from '../components/BottomBar';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function ListProperties({navigation}) {
  const data = [
    {
      name: 'First card',
      location: 'Egypt',
      beds: 6,
      bath: 2,
      dis: 210,
      price: 1900,
      difSource: require('../assets/Images/TELEMMGLPICT000339408897_16868385229620_trans_NvBQzQNjv4BqRo0U4xU-30oDveS4pXV-Vv4Xpit_DMGvdp2n7FDd82k.jpeg.webp'),
    },
    {
      name: 'Secoud card',
      location: 'KSA',
      beds: 1,
      bath: 4,
      dis: 190,
      price: 1400,
      difSource: require('../assets/Images/tstDesign.png'),
    },
    {
      name: 'Third card',
      location: 'Dubai',
      beds: 3,
      bath: 2,
      dis: 200,
      price: 1800,
      difSource: require('../assets/Images/Duabi.png'),
    },
    {
      name: 'Fourth card',
      location: 'Italy',
      beds: 5,
      bath: 2,
      dis: 300,
      price: 1200,
      difSource: require('../assets/Images/London.jpg'),
    },
    {
      name: 'Fifth card',
      location: 'Amierca',
      beds: 3,
      bath: 2,
      dis: 200,
      price: 1800,
      difSource: require('../assets/Images/propTst.png'),
    },
    {
      name: 'Sixth card',
      location: 'KSA',
      beds: 1,
      bath: 4,
      dis: 190,
      price: 1400,
      difSource: require('../assets/Images/property2.jpg'),
    },
  ];
  return (
    <Container style={styles.ContainerStyle}>
      <View style={styles.headstyle}>
        <Text style={styles.SignInStyle}>Properties for sale</Text>
      </View>
      <FlatList
        data={data}
        style={{width: windowWidth}}
        renderItem={item => {
          return (
            <PropertyCardHorizontal
              item={item.item}
              DifSource={item?.item.difSource}
            />
          );
        }}
      />
      <BottomBar navigation={navigation} />
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
  middleText: {
    color: '#000000',
    fontSize: 20,
    margin: 20,
    fontWeight: '500',
    alignSelf: 'center',
  },
  headstyle: {
    height: 110,
    width: windowWidth,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
  },
  SignInStyle: {
    fontSize: 32,
    alignSelf: 'center',
    paddingTop: 30,
    color: '#000',
  },
});
