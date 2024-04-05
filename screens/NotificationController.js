import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel(
  {
    channelId: 'channel-id', // (required)
    channelName: 'My channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    playSound: false, // (optional) default: true
    soundName: 'default', // (optional) See ' soundName" parameter of "localNotification" function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true,
  },

  created => console.log(` createChannel returned '${created}'`),
);
const NotificationController = props => {
  useEffect(() => {
    PushNotification.getChannels(function (channel_ids) {
      console.log(channel_ids); // ['channel_id_1'°]
    });
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      PushNotification.localNotification({
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
        channelId: remoteMessage.notification.android.channelId,
        channelId: true,
        vibrate: true,
      });
    });

    return unsubscribe;
  }, []);
  return null;
};
export default NotificationController;
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import messaging from '@react-native-firebase/messaging';

// async function GetFCMToke() {
//   let fcmToken = await AsyncStorage.getItem('fcmtoken');
//   if (!fcmToken) {
//     try {
//       const fcmToken = await messaging().getAPNSToken();

//       if (fcmToken) {
//         console.log(fcmToken, 'new token');
//         await AsyncStorage.setItem('fcmtoken', fcmToken);
//       }
//     } catch (error) {
//       console.log(error, 'error in fcmtoken');
//     }
//   }
// }
// export const NotificationListner = () => {
//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//     navigation.navigate(remoteMessage.data.type);
//   });
//   messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//       }
//     });

//   messaging().onMessage(async remoteMessage => {
//     console.log('notification on froground state .....', remoteMessage);
//   });
// };
