// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5422c.firebaseapp.com",
  projectId: "mern-auth-5422c",
  storageBucket: "mern-auth-5422c.appspot.com",
  messagingSenderId: "905431154918",
  appId: "1:905431154918:web:8d5e5a0b45dc3b63be7b27"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);