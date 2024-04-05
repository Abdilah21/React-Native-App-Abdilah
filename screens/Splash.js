import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
  }, []);

  return (
    <ImageBackground
      source={require('../src/assets/Images/splash.png')}
      style={styles.bg}>
      <Image
        style={styles.image}
        source={require('../src/assets/Images/logo.png')}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    borderRadius: 100,
  },
  bg: {height: '100%', width: '100%', justifyContent: 'center'},
});
