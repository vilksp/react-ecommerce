import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB5n6bLvG8zeFiuMWwlpDFYJlbuWe56TUk",
  authDomain: "react-ecom-db-678c1.firebaseapp.com",
  databaseURL: "https://react-ecom-db-678c1.firebaseio.com",
  projectId: "react-ecom-db-678c1",
  storageBucket: "react-ecom-db-678c1.appspot.com",
  messagingSenderId: "844283918189",
  appId: "1:844283918189:web:7f05adc60e9b51ff874c64",
  measurementId: "G-41V70S4Q9S",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
