// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGP0SiPNVkAy3vfikiXSLcj5izZNPlGUI",
  authDomain: "reactjs-dulcecasa.firebaseapp.com",
  projectId: "reactjs-dulcecasa",
  storageBucket: "reactjs-dulcecasa.appspot.com",
  messagingSenderId: "478164004558",
  appId: "1:478164004558:web:f3a332b2b5983a57af2a9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);