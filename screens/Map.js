import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import MapView, {Marker, PROVIDER_GOOGLE, Polygon} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Map({navigation}) {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [loading, setLoading] = useState(true);

  const getLatLangOnly = async () => {
    if (Platform.OS == 'ios') {
      Geolocation.requestAuthorization('whenInUse');
    }
    await Geolocation.getCurrentPosition(
      position => {
        var lat = parseFloat(position.coords.latitude);
        var longi = parseFloat(position.coords.longitude);
        console.warn('position', position.coords);
        setLatitude(lat);
        setLongitude(longi);
        setLoading(false);
      },
      error => {
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  };

  useEffect(() => {
    getPermissions();
  }, []);

  const getPermissions = async () => {
    if (Platform.OS == 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Example App',
            message: 'Example App access to your location ',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLatLangOnly();
        } else {
          alert('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      getLatLangOnly();
    }
  };
  //toast
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={200} color={'red'} />
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}
          showsMyLocationButton={true}>
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></Marker>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home1');
            }}>
            <Image
              style={styles.BackStyle1}
              source={require('../src/assets/Images/back.png')}
            />
          </TouchableOpacity>
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: windowHeight,
    width: windowWidth,
  },
  BackStyle1: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    tintColor: '#838383',
    margin: 20,
    top: 20,
    borderRadius: 10,
    padding: 15,
    position: 'absolute',
  },
});
