import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/database";

// Initialize Firebase

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

// const firebaseConfig = {
//   apiKey: "AIzaSyDbFCDkfwkP22n0hIMsSvn-05aePebMgpk",
//   authDomain: "adarsh-iti-ramgarh-4c088.firebaseapp.com",
//   databaseURL: "https://adarsh-iti-ramgarh-4c088-default-rtdb.firebaseio.com",
//   projectId: "adarsh-iti-ramgarh-4c088",
//   storageBucket: "adarsh-iti-ramgarh-4c088.appspot.com",
//   messagingSenderId: "961498058631",
//   appId: "1:961498058631:web:d0575a319c246c9d0a0d22",
// };
const firebaseConfig = {
  apiKey: "AIzaSyCn_HPOXztTMFZWYIXbB8MRA8XfAFEGpig",
  authDomain: "financepeer-auth-d24b7.firebaseapp.com",
  projectId: "financepeer-auth-d24b7",
  storageBucket: "financepeer-auth-d24b7.appspot.com",
  messagingSenderId: "472241054293",
  appId: "1:472241054293:web:8d26a5ffa6cfdc741beadc",
  measurementId: "G-2BNXG0Y3C1",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { firebase, projectStorage, projectFirestore, auth, timestamp };

// export const auth = app.auth();
// export default app;
