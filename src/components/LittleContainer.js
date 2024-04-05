import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function LittleContainer({DifSource, title, navigation}) {
  return (
    <View style={styles.littlecontainers}>
      <Image source={DifSource} style={styles.LittelContainersImage}></Image>
      <Text style={styles.LittelContainersText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  littlecontainers: {
    height: 130,
    width: '30%',
    borderColor: '#f9f9f9',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
  },
  LittelContainersImage: {
    height: 60,
    alignSelf: 'center',
    width: 60,
  },
  LittelContainersText: {
    alignSelf: 'center',
    textAlign: 'center',
    margin: 10,
  },
});
