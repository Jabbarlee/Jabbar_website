// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEfAsCpGtR2q9Ts2NC6vx2rkjuIbzqAxM",
  authDomain: "jabbarportfolio.firebaseapp.com",
  projectId: "jabbarportfolio",
  storageBucket: "jabbarportfolio.appspot.com",
  messagingSenderId: "571088410905",
  appId: "1:571088410905:web:3ca203fb6780616215cd88",
  measurementId: "G-EGR5QP5J8W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
