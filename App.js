import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NativeBaseProvider, Box} from 'native-base';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from './screens/Splash.js';
import Home1 from './screens/Home1';
import Login from './screens/Login';
import ListProperties from './src/pages/ListProperties';
import PrpertiesDetails from './screens/PrpertiesDetails';
import proprtiesDetails2 from './screens/ProprtiesDetails2';
import {enableLatestRenderer} from 'react-native-maps';
import Map from './screens/Map';
import Toast from 'react-native-toast-message';
import WebScreen from './screens/WebScreen.js';
import Profile from './screens/Profile.js';
import ImagePicker from 'react-native-image-picker';
import SignatureScreen from './screens/SignatureScreen.js';
import Signin from './screens/Signin.js';
import {useEffect} from 'react';
import {NotificationListner} from './screens/NotificationController.js';
import messaging, {firebase} from '@react-native-firebase/messaging';

import PushNotification, {Importance} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

enableLatestRenderer();

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App() {
  // useEffect(() => {
  //   NotificationListner();
  // }, []);

  useEffect(() => {
    const type = 'notification';
    PushNotificationIOS.addEventListener(type, onRemoteNotification);
    return () => {
      PushNotificationIOS.removeEventListener(type);
    };
  });

  const onRemoteNotification = notification => {
    // const isClicked = notification.getData().userInteraction === 1;

    // if (isClicked) {
    //   // Navigate user to another screen
    // } else {
    //   // Do something else with push notification
    // }
    // Use the appropriate result based on what you needed to do for this notification
    const result = PushNotificationIOS.FetchResult.NoData;
    notification.finish(result);
  };

  useEffect(() => {
    requestUserPermission();
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      console.log(remoteMessage);
      PushNotification.localNotification({
        channelId: 'channel-id',
        title: remoteMessage.notification.title,
        message: remoteMessage.notification.body,
        vibration: 300,
        vibrate: true,
        playSound: true,
        soundName: 'default',
      });
    });

    PushNotification.createChannel(
      {
        channelId: 'channel-id',
        channelName: 'My channel',
        channelDescription: 'A channel to categorise your notifications',
        playSound: true,
        importance: Importance.HIGH,
        soundName: 'default',
        vibration: 300,
        vibrate: true,
      },
      created => console.log(`createChannel returned '${created}'`),
    );

    messaging().onNotificationOpenedApp(remoteMessage => {
      // console.warn( remoteMessage.notification, );
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('remoteMessage', remoteMessage);
          NotificationDirection();
        }
      });

    return unsubscribe;
  }, []);

  async function requestUserPermission() {
    await messaging().registerDeviceForRemoteMessages();
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    console.warn('enabled', enabled);
    if (enabled) {
      try {
        const fcmToken = await messaging().getToken();
        console.warn('fcmToken', fcmToken);
      } catch (error) {
        console.warn('error', error);
      }
      console.log('Authorization status:', authStatus);
    }
  }

  ////////////////////////////////////////
  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);

      // process the notification

      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log('ACTION:', notification.action);
      console.log('NOTIFICATION:', notification);

      // process the action
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,

    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home1" component={Home1} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ListProperties" component={ListProperties} />
          <Stack.Screen name="PrpertiesDetails" component={PrpertiesDetails} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="WebScreen" component={WebScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Signature" component={SignatureScreen} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen
            name="PropertiesDetails2"
            component={proprtiesDetails2}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
