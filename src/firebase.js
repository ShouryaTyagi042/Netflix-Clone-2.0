import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAmWG99i_RbdVLWugc0M-GP8sj25hjh9E",
  authDomain: "netflixclone-72cfb.firebaseapp.com",
  projectId: "netflixclone-72cfb",
  storageBucket: "netflixclone-72cfb.appspot.com",
  messagingSenderId: "141405104483",
  appId: "1:141405104483:web:b82e476736a3dd8b8acb56",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { auth, db };
