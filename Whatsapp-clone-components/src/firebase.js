// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAkZX2-9FGOYFDWPu2lNNlEGGJ7cSnoiMs",
  authDomain: "whatsapp-clone-2bb42.firebaseapp.com",
  projectId: "whatsapp-clone-2bb42",
  storageBucket: "whatsapp-clone-2bb42.appspot.com",
  messagingSenderId: "469949200989",
  appId: "1:469949200989:web:b1481e7c0ea3e25ed2abb4",
  measurementId: "G-RT7C8BKQFW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider};
export default db;