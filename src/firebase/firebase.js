import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7AuIfr6qtAiMSLoQcBsekcmZNHCX9n80",
  authDomain: "my-reactjs-pj.firebaseapp.com",
  databaseURL: "https://my-reactjs-pj-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-reactjs-pj",
  storageBucket: "my-reactjs-pj.appspot.com",
  messagingSenderId: "321285598941",
  appId: "1:321285598941:web:045f429c186bb639b57534",
  measurementId: "G-SVC4HRGC7E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
