import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyALwrCAHl8nB4StgdD6Rd0SAspmIXE9olQ",
  authDomain: "linboxtech.firebaseapp.com",
  projectId: "blinboxtech",
  storageBucket: "linboxtech.appspot.com",
  messagingSenderId: "352054405431",
  appId: "1:352054405431:web:9c15e36f0909e20ba3d2b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)