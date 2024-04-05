import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCGTD0cLZFVPo1xMxKYILwjxwKsFT1TsYQ',
  authDomain: 'propertyapp-a889a.firebaseapp.com',
  projectId: 'propertyapp-a889a',
  storageBucket: 'propertyapp-a889a.appspot.com',
  messagingSenderId: '144849137350',
  appId: '1:144849137350:web:1349a5f04edbd34ff431c7',
  measurementId: 'G-Q15VPH7PYQ',
  // apiKey: 'AIzaSyB7rDKWHjoJt4D-YxhfALzQcmB_JQxkQb8',
  // authDomain: 'propertyapp2-38e3c.firebaseapp.com',
  // projectId: 'propertyapp2-38e3c',
  // storageBucket: 'propertyapp2-38e3c.appspot.com',
  // messagingSenderId: '363391287743',
  // appId: '1:363391287743:web:a6de9e1a19da3c0bc0210a',
  // measurementId: 'G-VRLW6H4GV4',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);
