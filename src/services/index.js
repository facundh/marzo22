
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARMYRdMRJniaUgREBkaGlpkiCGgSQ8ugY",
  authDomain: "geter22-f0c33.firebaseapp.com",
  projectId: "geter22-f0c33",
  storageBucket: "geter22-f0c33.appspot.com",
  messagingSenderId: "1095471523340",
  appId: "1:1095471523340:web:1cf7a01235478c822d7029"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

const config = {db, auth};

export default config;