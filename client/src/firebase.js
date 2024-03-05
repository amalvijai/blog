// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.VITE_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "daily-fe0c4.firebaseapp.com",
  projectId: "daily-fe0c4",
  storageBucket: "daily-fe0c4.appspot.com",
  messagingSenderId: "394136978199",
  appId: "1:394136978199:web:db02235e1931460392ad52"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);