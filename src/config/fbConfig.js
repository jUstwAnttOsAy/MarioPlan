import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  // Your web app's Firebase configuration
  apiKey: "AIzaSyAK78XzNXnUPEE_5uEzJ7xibK-ot88wp_Y",
  authDomain: "react-redux-marioplan-741c2.firebaseapp.com",
  databaseURL: "https://react-redux-marioplan-741c2.firebaseio.com",
  projectId: "react-redux-marioplan-741c2",
  storageBucket: "react-redux-marioplan-741c2.appspot.com",
  messagingSenderId: "52276091857",
  appId: "1:52276091857:web:7bbd588251745f19e2def0",
  measurementId: "G-3VVNEM4DTS",
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
