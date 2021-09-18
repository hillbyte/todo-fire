import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDP_TfEKRpx7mZXsbscnr1qwwrelsROb8Q",
  authDomain: "notes-92260.firebaseapp.com",
  projectId: "notes-92260",
  storageBucket: "notes-92260.appspot.com",
  messagingSenderId: "898287426224",
  appId: "1:898287426224:web:7451b26529b54116d3b975",
};

firebase.initializeApp(firebaseConfig);
export var storage = firebase.storage();
export default firebase;
