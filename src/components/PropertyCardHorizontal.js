import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PropertyCardHorizontal({DifSource, item}) {
  return (
    <View style={styles.BigContainers}>
      <Image source={DifSource} style={styles.BigContainersImage}></Image>
      {/* <Image
        source={require('../assets/Images/hart.png')}
        style={{
          height: 25,
          width: 25,
          left: 110,
          marginTop: 15,
          tintColor: '#fff',
        }}
      /> */}
      <View style={{justifyContent: 'space-around'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 6,
          }}>
          <Text style={styles.BigContainersText}>{item?.name}</Text>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 15,
            }}>
            <Text>4.9</Text>
            <Image
              source={require('../assets/Images/star.png')}
              style={{height: 18, width: 18}}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 6,
          }}>
          <Image
            style={{height: 18, width: 18}}
            source={require('../assets/Images/location.png')}
          />
          <Text style={{color: '#838383', fontSize: 15, marginLeft: 10}}>
            {item?.location}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 6,
          }}>
          <Image
            style={{
              height: 18,
              width: 18,
              marginRight: 4,
              tintColor: '#838383',
            }}
            source={require('../assets/Images/bed.png')}
          />
          <Text style={{color: '#838383', fontSize: 15, marginRight: 20}}>
            {item?.beds} Beds
          </Text>
          <Image
            style={{
              height: 18,
              width: 18,
              marginRight: 4,
              tintColor: '#838383',
            }}
            source={require('../assets/Images/bath.png')}
          />
          <Text style={{color: '#838383', fontSize: 15, marginRight: 20}}>
            {item?.bath} Bath
          </Text>
          <Image
            style={{
              height: 18,
              width: 18,
              marginRight: 4,
              tintColor: '#838383',
            }}
            source={require('../assets/Images/length.png')}
          />
          <Text style={{color: '#838383', fontSize: 15, marginRight: 20}}>
            {item?.dis} m
          </Text>
        </View>

        <Text
          style={{
            textAlign: 'left',
            fontWeight: '600',
            marginHorizontal: 6,
            fontSize: 16,
            color: '#000',
          }}>
          {item?.price} EGP
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  BigContainers: {
    height: 150,
    width: windowWidth - 20,
    borderColor: '#f9f9f9',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    alignSelf: 'center',
    marginTop: 6,
    flexDirection: 'row',
  },
  BigContainersImage: {
    height: '100%',
    borderRadius: 10,
    width: '35%',
  },
  BigContainersText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
});
