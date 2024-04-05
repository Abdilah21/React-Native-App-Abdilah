import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  Keyboard,
  Pressable,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Container, Box} from 'native-base';
import Input from '../src/components/Input';
import {color, position} from 'native-base/lib/typescript/theme/styled-system';
import {ErrorMessage} from 'formik';
import COLORS from '../src/COLORS';
import Toast from 'react-native-toast-message';
import auth from '@react-native-firebase/auth';
import messaging, {firebase} from '@react-native-firebase/messaging';

import NotificationController from './NotificationController';

// import {FIREBASE_AUTH} from '../FirebaseConfig';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';

const showToast = () => {
  Toast.show({
    type: 'success',
    text1: 'You are in',
    text2: 'Congrats 👋',
  });
};
const showToast2 = () => {
  Toast.show({
    type: 'error',
    text1: 'Wrong email or password',
    text2: 'Try something else',
  });
};

export default function Login({navigation, item}) {
  // useEffect(() => {
  //   pushNotification();
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // }, []);
  // async function pushNotification() {
  //   await firebase
  //     .messaging()
  //     .setAPNSToken('74657374696E67746F6B656E', 'unknown');
  //   const token = await messaging().getAPNSToken();
  //   if (token) {
  //     console.log('token', token);
  //   }
  // }
  const checkToken = async () => {
    await firebase
      .messaging()
      .setAPNSToken('74657374696E67746F6B656E', 'unknown');
    const fcmToken = await messaging().getAPNSToken();
    if (fcmToken) {
      console.log(fcmToken);
      Alert.alert(fcmToken);
    }
  };

  //=================================================
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  //const auth = FIREBASE_AUTH;

  const LoginWithEmail = async () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User signed in!');
        navigation.navigate('Home1', showToast());
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          showToast2();
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          showToast2();
        }

        console.error(error);
        showToast2();
      });
  };
  // const SignIn = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await signInWithEmailAndPassword(auth, email, password);
  //     console.log(response);
  //     alert('Check your email!');
  //   } catch (e) {
  //     console.log(e);
  //     alert('Failedddddddd' + ErrorMessage);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const SignUp = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password,
  //     );
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const LoginHandler = () => {
    console.log('data', email, password);
    if (
      email == CheckValidition.email &&
      password == CheckValidition.password
    ) {
      navigation.navigate('Home1', showToast());
    } else {
      showToast2();
    }
  };

  const EmailFunction = () => {
    if (email == CheckValidition.email) {
      return true;
    } else {
      return false;
    }
  };

  // const [errors, setErrors] = useState({});

  const [CheckValidition, setCheckValidition] = useState({
    email: '',
    password: '',
  });
  // const validate = () => {
  //   Keyboard.dismiss();
  //   if (!CheckValidition.email) {
  //   }
  // };

  // const handleError = (errorMessage, CheckValidition) => {
  //   setErrors(prevState => ({...prevState, [CheckValidition]: errorMessage}));
  // };

  // const handleOnChange = (text, CheckValidition) => {
  //   setCheckValidition(prevState => ({...prevState, [CheckValidition]: text}));
  // };
  return (
    <Container style={styles.ContainerStyle}>
      <NotificationController />
      {/* ///////////////////////////Header ////////////////////////////// */}
      <View style={styles.headstyle}>
        <Text style={styles.SignInStyle}>Login</Text>
      </View>
      {/* ///////////////////////////Header ////////////////////////////// */}

      {/*/////////////////////////////middle/////////////////////////////*/}

      <View style={styles.midcontainer}>
        <Text style={styles.HeadTextStyle}>Let's Login </Text>
        <Text style={styles.SecondTextStyle}>
          log in with your email/username and password
        </Text>
        <Input
          secure={false}
          value={email}
          setValue={setEmail}
          title={'Email/Username'}
          placeholderr={'Please enter Email/Username'}
          icon={require('../src/assets/Images/profile.png')}
          styler={[
            styles.textinstyle,
            email != CheckValidition.email
              ? styles.CorrectEmail
              : EmailFunction(),
          ]}
          onChangeText={text => handleOnChange(text, 'email')}
        />
        <Image
          resizeMode="contain"
          source={require('../src/assets/Images/eye.png')}
          style={styles.EyeImgStyle}
        />
        <Input
          title={'Password'}
          value={password}
          setValue={setPassword}
          placeholderr={'Please enter Password'}
          secure={true}
          icon={require('../src/assets/Images/lock.png')}
          styler={[
            styles.textinstyle,
            password != CheckValidition.password
              ? styles.CorrectEmail
              : EmailFunction(),
          ]}
        />
        <View style={styles.ViewForgetStyle}>
          <Text style={styles.ForgetStyle}>Forget password ?</Text>
          <Text style={styles.RememberMeStyle}>Remember me</Text>
          <Checkbox></Checkbox>
        </View>

        <Toast />

        <TouchableOpacity onPress={LoginWithEmail} style={styles.button}>
          <Text style={styles.TextButtonStyle}>Login</Text>
        </TouchableOpacity>
        <View style={styles.LastViewStyle}>
          <Text style={styles.Grey83Color}>Don't have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.SkyColor}>Create account</Text>
          </TouchableOpacity>
        </View>
        {/* <NotificationController />
        <Text style={styles.paragraph}>
          Push Notification With Firebasse Demo
        </Text> */}

        {/*/////////////////////////////middle/////////////////////////////*/}
        {/* <Button></Button> */}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  CorrectEmail: {borderColor: COLORS.ValidGreen, borderWidth: 1},

  WrongEmail: {borderColor: COLORS.ValidRed},
  //==============================================
  ContainerStyle: {height: '100%', width: '100%'},
  SignInStyle: {
    fontSize: 32,
    alignSelf: 'center',
    color: '#000',
    paddingTop: 30,
  },
  HeadTextStyle: {fontSize: 28, color: 'black', fontWeight: 'bold'},
  SecondTextStyle: {margin: 10, color: '#838383'},
  EyeImgStyle: {
    height: 18,
    width: 18,
    position: 'absolute',
    top: '60%',
    right: 40,
  },

  ViewForgetStyle: {flexDirection: 'row-reverse'},

  ForgetStyle: {paddingLeft: 5, color: '#000'},
  RememberMeStyle: {paddingRight: 100, marginLeft: 5, color: '#000'},
  TextButtonStyle: {alignSelf: 'center', fontSize: 18, color: '#ffffff'},
  LastViewStyle: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  textinstyle: {
    paddingHorizontal: 30,
    width: '100%',

    borderRadius: 15,
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  buttonbase: {
    margin: 50,
  },
  button: {
    backgroundColor: '#0d77d0',
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
  },
  midcontainer: {
    width: '120%',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    padding: 30,
    alignItems: 'flex-start',
    backgroundColor: 'white',
  },
  butext: {
    alignItems: 'flex-start',
    paddingRight: 190,
    margin: 10,
    fontWeight: 'bold',
  },
  headstyle: {
    height: 100,
    width: '130%',
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
  },
  Grey83Color: {color: '#838383'},
  SkyColor: {color: '#0d77d0'},
});
