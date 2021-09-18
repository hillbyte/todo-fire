import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  
};

firebase.initializeApp(firebaseConfig);
export var storage = firebase.storage();
export default firebase;
