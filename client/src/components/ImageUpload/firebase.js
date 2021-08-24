//import firebase from "firebase/app";
import firebase from "firebase";
import "firebase/storage";
//import "firebase/database";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: "tripbook-d2d2f.appspot.com",
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  apiKey: "AIzaSyDDBveFJ1Y4j5alu7ZssxbLtAO6WZlH1SU",
  authDomain: "tripbook-d2d2f.firebaseapp.com",
  databaseURL: "https://tripbook-d2d2f-default-rtdb.firebaseio.com",
  projectId: "tripbook-d2d2f",
  storageBucket: "tripbook-d2d2f.appspot.com",
  messagingSenderId: "805907316680",
  appId: "1:805907316680:web:3177aac0c4f6022f3e0afd",
  measurementId: "G-PTZ80R8RMF",
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export default storage;
