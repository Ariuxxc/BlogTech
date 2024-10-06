// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0pD_j_L0uZgInBhRfjGows3dYxCrCk7w",
  authDomain: "blogflow-57453.firebaseapp.com",
  projectId: "blogflow-57453",
  storageBucket: "blogflow-57453.appspot.com",
  messagingSenderId: "1093821360227",
  appId: "1:1093821360227:web:6f6cb842157bff5351f056"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {db, auth}
