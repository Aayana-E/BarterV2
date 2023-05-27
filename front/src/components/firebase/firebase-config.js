import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvpr0gHxNxxGZDI6-AkjEJq4BlHh_nbms",
  authDomain: "barter-e4e3e.firebaseapp.com",
  databaseURL: "https://barter-e4e3e-default-rtdb.firebaseio.com",
  projectId: "barter-e4e3e",
  storageBucket: "barter-e4e3e.appspot.com",
  messagingSenderId: "227013724969",
  appId: "1:227013724969:web:03a381812c4c9b2b1bc538",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
