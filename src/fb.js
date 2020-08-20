import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDnGHFS34zqyKqeWF_X5P0YN1Spk_OupSw",
  authDomain: "seonghaweb.firebaseapp.com",
  databaseURL: "https://seonghaweb.firebaseio.com",
  projectId: "seonghaweb",
  storageBucket: "seonghaweb.appspot.com",
  messagingSenderId: "667198123593",
  appId: "1:667198123593:web:ab5a02920eca7a30b59998",
  measurementId: "G-TMWB0WYKYY",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db};
