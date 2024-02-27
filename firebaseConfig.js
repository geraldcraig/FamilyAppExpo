// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwY2vPoHEcmGQHFU2PJ5D_j5kAGiIyUlc",
    authDomain: "family-app-test-be246.firebaseapp.com",
    databaseURL: "https://family-app-test-be246-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "family-app-test-be246",
    storageBucket: "family-app-test-be246.appspot.com",
    messagingSenderId: "224105352319",
    appId: "1:224105352319:web:1a05625ba631daa81e434a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);