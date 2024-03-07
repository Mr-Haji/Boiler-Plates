import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//apny app ki config yha add krain just  

const firebaseConfig = {
  apiKey: "AIzaSyDidw8aBdlwCLmaOSD733nLq4B_RCKxivg",
  authDomain: "hackathone-c8fbc.firebaseapp.com",
  projectId: "hackathone-c8fbc",
  storageBucket: "hackathone-c8fbc.appspot.com",
  messagingSenderId: "801709748815",
  appId: "1:801709748815:web:1ad878c76c0fef4777703a",
  measurementId: "G-18LJDQZ1ZT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const AUTH = getAuth(app);
const DB = getFirestore(app);
export { DB, AUTH };
