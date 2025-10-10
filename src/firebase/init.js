// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsi0hHi3zhAUC0XEsbOTZfT3iJVoCO5XU",
  authDomain: "my-portfolio-637e8.firebaseapp.com",
  databaseURL: "https://my-portfolio-637e8-default-rtdb.firebaseio.com",
  projectId: "my-portfolio-637e8",
  storageBucket: "my-portfolio-637e8.firebasestorage.app",
  messagingSenderId: "521037896961",
  appId: "1:521037896961:web:8f5453fbbaec174531cf00",
  measurementId: "G-YTF759DSFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const analytics = getAnalytics(app);

