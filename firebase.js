// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzn-aXj1igsaVLRgdp2jI92VHw_V9SSOg",
  authDomain: "roweb-app.firebaseapp.com",
  projectId: "roweb-app",
  storageBucket: "roweb-app.appspot.com",
  messagingSenderId: "517773846720",
  appId: "1:517773846720:web:ef2b180cb62469e3942525",
  measurementId: "G-NGHKM9YH71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);