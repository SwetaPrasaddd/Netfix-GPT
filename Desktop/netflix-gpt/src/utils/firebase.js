// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8M4pAq3kClrhz3j_SLSqhU-iLaHiQxTw",
    authDomain: "netflix-gpt-fe5cf.firebaseapp.com",
    projectId: "netflix-gpt-fe5cf",
    storageBucket: "netflix-gpt-fe5cf.appspot.com",
    messagingSenderId: "906839390915",
    appId: "1:906839390915:web:d1ab908786d711fc790076",
    measurementId: "G-NKNG6Y114J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
