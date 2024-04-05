import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function BottomBar({navigation}) {
  const bottomBarScreens = [
    {
      name: 'Home',
      image: require('../assets/Images/homeGrey.png'),
      action: () => {
        navigation.navigate('Home1');
      },
    },
    {
      name: 'Explore',
      image: require('../assets/Images/Explor.png'),
      action: () => {
        navigation.navigate('ListProperties');
      },
    },
    {
      name: 'ADD',
      image: require('../assets/Images/add-home.png'),
      action: () => {},
    },
    {
      name: 'map',
      image: require('../assets/Images/map.png'),
      action: () => {
        navigation.navigate('Map');
      },
    },
    {
      name: 'Profile',
      image: require('../assets/Images/profile.png'),
      action: () => {
        navigation.navigate('Profile');
      },
    },
  ];
  return (
    <View style={styles.bottomstyle}>
      {bottomBarScreens.map((item, key) =>
        item.name == 'ADD' ? (
          <TouchableOpacity
            onPress={item.action}
            key={key}
            style={{
              height: 55,
              width: 55,
              borderRadius: 35,
              backgroundColor: '#10ca98',
              alignSelf: 'center',
              justifyContent: 'center',
              top: -10,
            }}>
            <Image
              source={item.image}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                alignSelf: 'center',
              }}
            />
          </TouchableOpacity>
        ) : item.name == 'map' ? (
          <TouchableOpacity
            onPress={item.action}
            key={key}
            style={{alignSelf: 'center', justifyContent: 'center'}}>
            <Image
              source={item.image}
              style={[
                {alignSelf: 'center', width: 22, height: 22},
                styles.mapStyle,
              ]}
              resizeMode="contain"
            />
            <Text style={{alignSelf: 'center', marginTop: 5, fontSize: 12}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={item.action}
            key={key}
            style={{alignSelf: 'center', justifyContent: 'center'}}>
            <Image
              source={item.image}
              style={{
                alignSelf: 'center',
                width: 22,
                height: 22,
                tintColor: '#808080',
              }}
            />
            <Text style={{alignSelf: 'center', marginTop: 5, fontSize: 12}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ),
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomstyle: {
    width: '130%',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    height: 80,
    justifyContent: 'space-around',
    flexDirection: 'row',
    right: 10,
    paddingBottom: 12,
    backgroundColor: '#f9f9f9',
  },
  bottomImages: {
    width: 26,
    height: 26,
    tintColor: '#000',
    alignSelf: 'center',
    bottom: 15,
  },
  mapStyle: {tintColor: '#808080', height: 22, width: 22},
});
