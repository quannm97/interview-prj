import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: process.env.FIREBASE_KEY,
  databaseURL: process.env.FIREBASE_DATABASE,
  projectId: process.env.FIREBASE_PROJECT,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
const googleAuthProvider= new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export {auth, googleAuthProvider, facebookAuthProvider};