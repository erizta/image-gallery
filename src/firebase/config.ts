// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQp4sNBsc0miuYb4NKcbOeJyoNGX5vPkQ",
  authDomain: "image-gallery-23da7.firebaseapp.com",
  projectId: "image-gallery-23da7",
  storageBucket: "image-gallery-23da7.appspot.com",
  messagingSenderId: "174569061798",
  appId: "1:174569061798:web:39e236a76ac1f6c5afe367",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
