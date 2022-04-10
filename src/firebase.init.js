
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCso24jF-fHRqzLxOxMBCAF0ALmWCCVZ3U",
    authDomain: "ema-jhon-anuapan9.firebaseapp.com",
    projectId: "ema-jhon-anuapan9",
    storageBucket: "ema-jhon-anuapan9.appspot.com",
    messagingSenderId: "281027898063",
    appId: "1:281027898063:web:066eb7d2474cb0288aa5ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth