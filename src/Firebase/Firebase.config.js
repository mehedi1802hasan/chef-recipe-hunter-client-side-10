// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA4jIu9H_2iRbkyiKMi-yf7bF6sQbvS_k",
  authDomain: "italian-kichen-chef.firebaseapp.com",
  projectId: "italian-kichen-chef",
  storageBucket: "italian-kichen-chef.appspot.com",
  messagingSenderId: "989003029136",
  appId: "1:989003029136:web:1027f596cc97d7a7eb9615"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;