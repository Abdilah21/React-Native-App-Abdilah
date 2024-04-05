import {
  StyleSheet,
  Text,
  View,
  Container,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
const ReactNative = 'https://reactnative.dev/';
const trivago = 'https://ar.trivago.com/ ';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function WebScreen({navigation}) {
  return (
    <View style={styles.ContainerStyle}>
      <View style={styles.headstyle}>
        <Text style={styles.WebScreenTextStyle}>Web Screen</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PrpertiesDetails');
          }}>
          <Image
            style={styles.BackStyle1}
            source={require('../src/assets/Images/back.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ViewWebStyle}>
        <WebView source={{uri: trivago}} style={{flex: 1}} bounces={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerStyle: {height: windowHeight, width: windowWidth},
  WebScreenTextStyle: {fontSize: 32, top: 33, alignSelf: 'center'},
  headstyle: {
    height: 110,
    width: '100%',
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ViewWebStyle: {height: windowHeight, width: windowWidth},
  BackStyle1: {
    height: 16,
    width: 16,
    left: 10,
    justifyContent: 'center',
    tintColor: '#000',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
  },
});
