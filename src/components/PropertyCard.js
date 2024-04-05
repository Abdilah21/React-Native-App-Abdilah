import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PropertyCard({DifSource, navigation}) {
  return (
    <View style={styles.BigContainers}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PrpertiesDetails');
        }}>
        <Image source={DifSource} style={styles.BigContainersImage}></Image>
        {/* <View style={{position: 'absolute'}}>
          <Image
            source={require('../assets/Images/hart.png')}
            style={styles.HartStyle}
          />
        </View> */}
        <View style={styles.ViewHeadImgStyle}>
          <Image
            style={styles.HartStyle}
            source={require('../assets/Images/harticon.png')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.RowSpace}>
          <Text style={styles.BigContainersText}>Bitung Resort</Text>
          <View style={styles.EvaluationStyle}>
            <Text style={{color: '#000'}}>4.9</Text>
            <Image
              source={require('../assets/Images/star.png')}
              style={styles.SmallImgStyle}
            />
          </View>
        </View>
        <View style={styles.FlexRowStyle}>
          <Image
            style={styles.SmallImgStyle}
            source={require('../assets/Images/location.png')}
          />
          <Text style={styles.TopTextStyle}>Nasr city, Egypt</Text>
        </View>

        <View style={styles.ViewDetailsStyle}>
          <Image
            style={styles.DetailsImgStyle}
            source={require('../assets/Images/bed.png')}
          />
          <Text style={styles.DetailsTextStyle}>3 Beds</Text>
          <Image
            style={styles.DetailsImgStyle}
            source={require('../assets/Images/bath.png')}
          />
          <Text style={styles.DetailsTextStyle}>2 Bath</Text>
          <Image
            style={styles.DetailsImgStyle}
            source={require('../assets/Images/length.png')}
          />
          <Text style={styles.DetailsTextStyle}>240m</Text>
        </View>

        <Text style={styles.PriceStyle}>EGP 1500,00</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  BigContainers: {
    // height: 360,
    width: windowWidth - 100,
    borderColor: '#f9f9f9',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 15,
    marginLeft: 10,
  },
  BigContainersImage: {
    borderRadius: 10,
    height: 160,
    width: '100%',
  },
  BigContainersText: {
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  ViewHeadImgStyle: {
    height: 30,
    width: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 1,
    position: 'absolute',
    marginLeft: 245,
  },
  HartStyle: {
    height: 20,
    width: 20,

    tintColor: '#fff',
    alignSelf: 'center',
  },
  RowSpace: {flexDirection: 'row', justifyContent: 'space-between'},
  EvaluationStyle: {flexDirection: 'row', marginTop: 10},
  SmallImgStyle: {height: 18, width: 18},
  FlexRowStyle: {flexDirection: 'row'},
  TopTextStyle: {color: '#838383', fontSize: 15, marginLeft: 10},
  ViewDetailsStyle: {flexDirection: 'row', marginTop: 10, marginHorizontal: 2},
  DetailsImgStyle: {
    height: 18,
    width: 18,
    marginRight: 5,
    tintColor: '#838383',
  },
  DetailsTextStyle: {color: '#838383', fontSize: 15, marginRight: 20},
  PriceStyle: {
    textAlign: 'center',
    marginVertical: 12,
    fontWeight: '600',
    fontSize: 18,
    alignSelf: 'flex-start',
    color: '#000',
  },
});
