import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAfl2NI_rSXtqSFojvX7x-ZsfdgXx8SaIk",
    authDomain: "project-manager-45ffb.firebaseapp.com",
    databaseURL: "https://project-manager-45ffb.firebaseio.com",
    projectId: "project-manager-45ffb",
    storageBucket: "project-manager-45ffb.appspot.com",
    messagingSenderId: "540823818308"
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  db.settings({ timestampsInSnapshots: true});

  export default db;