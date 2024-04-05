import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {ScrollView} from 'native-base';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PropertyCatagory({DifSource, DifText, DifText2}) {
  return (
    <View style={styles.PropertyCatStyle}>
      <Image source={DifSource} style={styles.DubaiStyle} />
      <View style={styles.LocationTextStyle}>
        <Text style={styles.CatagoryTextStyle}>{DifText}</Text>
        <Text style={styles.CatagoryTextStyle2}>{DifText2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  FlexDirectionStyle: {
    flexDirection: 'row',
  },
  PropertyCatStyle: {
    height: 160,
    width: windowWidth - 250,
    marginLeft: 10,
  },
  DubaiStyle: {height: '100%', width: '100%', borderRadius: 25},
  LocationTextStyle: {
    bottom: 60,
    left: 10,
  },
  CatagoryTextStyle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
  },
  CatagoryTextStyle2: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '400',
  },
});
