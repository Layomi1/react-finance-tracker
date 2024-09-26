// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_mdIo4cbwsbThD-O1zlVlv7-toUJ0xvc",
  authDomain: "personal-finance-track-4c041.firebaseapp.com",
  projectId: "personal-finance-track-4c041",
  storageBucket: "personal-finance-track-4c041.appspot.com",
  messagingSenderId: "991138734507",
  appId: "1:991138734507:web:ac487f5754fbf1b10db2ee",
  measurementId: "G-8JNS6F5L7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth= getAuth(app);
const provider = new GoogleAuthProvider();


export {db, auth, provider,doc,setDoc}