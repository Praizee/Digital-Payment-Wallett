// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDop7ewzT4sjLfIID-4WK8SpM6owXYw1jo",
    authDomain: "digital-payment-wallet.firebaseapp.com",
    projectId: "digital-payment-wallet",
    storageBucket: "digital-payment-wallet.appspot.com",
    messagingSenderId: "762179776495",
    appId: "1:762179776495:web:072fa3f2440c5305d4101a",
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://digital-payment-wallet-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);