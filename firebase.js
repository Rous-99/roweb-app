import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "@firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAzn-aXj1igsaVLRgdp2jI92VHw_V9SSOg",
  authDomain: "roweb-app.firebaseapp.com",
  projectId: "roweb-app",
  storageBucket: "roweb-app.appspot.com",
  messagingSenderId: "517773846720",
  appId: "1:517773846720:web:ef2b180cb62469e3942525",
  measurementId: "G-NGHKM9YH71"
};

const app = initializeApp(firebaseConfig); //exportamos la app que inicializa la base de datos
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export{auth, provider};
// export const db=getFirestore(app);
