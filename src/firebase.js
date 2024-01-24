import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9SRJ0nUVc0-b0AtsVJGEdSt7FKEBfkdc",
  authDomain: "netflix-clone-2-ed9bc.firebaseapp.com",
  projectId: "netflix-clone-2-ed9bc",
  storageBucket: "netflix-clone-2-ed9bc.appspot.com",
  messagingSenderId: "380975633256",
  appId: "1:380975633256:web:ea6f2f55ddb06a4b307cdd",
  measurementId: "G-3R548CL2WT",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth, db };
