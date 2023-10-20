// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUjISvihmB3ilhS8T1sNoa-gumTrSZSU8",
  authDomain: "gifapp-c63b3.firebaseapp.com",
  projectId: "gifapp-c63b3",
  storageBucket: "gifapp-c63b3.appspot.com",
  messagingSenderId: "625996195019",
  appId: "1:625996195019:web:3f896d2bc5a90d1c6ce74e"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}