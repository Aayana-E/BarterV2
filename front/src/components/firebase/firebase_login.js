import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDvpr0gHxNxxGZDI6-AkjEJq4BlHh_nbms",
    authDomain: "barter-e4e3e.firebaseapp.com",
    databaseURL: "https://barter-e4e3e-default-rtdb.firebaseio.com",
    projectId: "barter-e4e3e",
    storageBucket: "barter-e4e3e.appspot.com",
    messagingSenderId: "227013724969",
    appId: "1:227013724969:web:03a381812c4c9b2b1bc538",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
