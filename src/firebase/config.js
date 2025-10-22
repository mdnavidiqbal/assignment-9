
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCv8j97FRISJlGz8swbdxWlcUlOOrXZMwI",
  authDomain: "email-password-auth-9b5e5.firebaseapp.com",
  projectId: "email-password-auth-9b5e5",
  storageBucket: "email-password-auth-9b5e5.firebasestorage.app",
  messagingSenderId: "931523504775",
  appId: "1:931523504775:web:dda2c75fdfc65e4ed76622"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;