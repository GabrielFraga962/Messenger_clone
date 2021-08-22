import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp ({
  apiKey: "AIzaSyCNDJMacd9JNu2R8UbstBrwnuP_GWtnkI0",
  authDomain: "messenger-clone-36ffd.firebaseapp.com",
  projectId: "messenger-clone-36ffd",
  storageBucket: "messenger-clone-36ffd.appspot.com",
  messagingSenderId: "445529428251",
  appId: "1:445529428251:web:53d2b2e187b9418c5443be",
}).auth();