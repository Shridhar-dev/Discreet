import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAAve_Tu4EhCTN-claI-ie-zNMB_Ut8jxY",
    authDomain: "discreet-b6d33.firebaseapp.com",
    databaseURL: "https://discreet-b6d33.firebaseio.com",
    projectId: "discreet-b6d33",
    storageBucket: "discreet-b6d33.appspot.com",
    messagingSenderId: "676263985688",
    appId: "1:676263985688:web:1f07b33a99ffeaa5f1b96d"
  };

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;