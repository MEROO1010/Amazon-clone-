import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAFw1rgU9t1cUHXSaD6pGlEvh8sUTGcS4E",
  authDomain: "clone-a912e.firebaseapp.com",
  projectId: "clone-a912e",
  storageBucket: "clone-a912e.appspot.com",
  messagingSenderId: "992705262880",
  appId: "1:992705262880:web:290c933021cbcd7518d345"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};