// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC31NiXN7c257ib_-cAqpzjLE3Wq80uaHg",
  authDomain: "dart-board-aa4d7.firebaseapp.com",
  projectId: "dart-board-aa4d7",
  storageBucket: "dart-board-aa4d7.appspot.com",
  messagingSenderId: "5906896667",
  appId: "1:5906896667:web:6332222bbc7a56e78865be",
  measurementId: "G-8VBMYH0894"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);