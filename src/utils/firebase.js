
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "interviewiq-24fd4.firebaseapp.com",
  projectId: "interviewiq-24fd4",
  storageBucket: "interviewiq-24fd4.firebasestorage.app",
  messagingSenderId: "1077098818999",
  appId: "1:1077098818999:web:90d7e0acf27a46fe390c32",
  measurementId: "G-ZDC37FC212"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}