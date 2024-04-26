// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuyPmPaWOtOMDxNVZvVk0-2e7Bb8lkp4w",
  authDomain: "licary-20f82.firebaseapp.com",
  projectId: "licary-20f82",
  storageBucket: "licary-20f82.appspot.com",
  messagingSenderId: "1002408229823",
  appId: "1:1002408229823:web:22d0e89e745dacc6c9bf0a",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
