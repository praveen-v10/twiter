// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLqOUpgTwrd2PurglH3HhfZwtv1rhZlwQ",
  authDomain: "twiter-cb461.firebaseapp.com",
  projectId: "twiter-cb461",
  storageBucket: "twiter-cb461.appspot.com",
  messagingSenderId: "355667637003",
  appId: "1:355667637003:web:a58db4165bdfd8aa9aa80e"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };