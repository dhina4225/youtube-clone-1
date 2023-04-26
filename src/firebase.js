// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2dM6x3fgcbf-m_k0Y6exvqF6zSRTmwuQ",
    authDomain: "clone-381308.firebaseapp.com",
    projectId: "youtube-clone-381308",
    storageBucket: "youtube-clone-381308.appspot.com",
    messagingSenderId: "6359197947",
    appId: "1:6359197947:web:bc10c1b749d274db17e85e"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const timestamp = serverTimestamp();

export { app, db, auth, timestamp, provider };