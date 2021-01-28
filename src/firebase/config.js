import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBUkwlySNksZXqe1YpzJUwSV1dHzt9Ctwk",
    authDomain: "stefan-firegram.firebaseapp.com",
    projectId: "stefan-firegram",
    storageBucket: "stefan-firegram.appspot.com",
    messagingSenderId: "675346857778",
    appId: "1:675346857778:web:f46af103a5add74930a12b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectStorage, timestamp };