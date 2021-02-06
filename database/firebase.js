// database/firebaseDb.js

import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCLiivTN8ifgZc2TfHv89LbGN2nZldN9rw",
    authDomain: "digital-transformation-823d6.firebaseapp.com",
    projectId: "digital-transformation-823d6",
    storageBucket: "digital-transformation-823d6.appspot.com",
    messagingSenderId: "218877216519",
    appId: "1:218877216519:web:c2415ef5ad36a1da2767a2",
    measurementId: "G-G1WP0GLS80"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase;