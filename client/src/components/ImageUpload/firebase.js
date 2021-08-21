import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDDBveFJ1Y4j5alu7ZssxbLtAO6WZlH1SU",
  authDomain: "tripbook-d2d2f.firebaseapp.com",
  projectId: "tripbook-d2d2f",
  storageBucket: "tripbook-d2d2f.appspot.com",
  messagingSenderId: "805907316680",
  appId: "1:805907316680:web:3177aac0c4f6022f3e0afd",
  measurementId: "G-PTZ80R8RMF",
};
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;
