// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfnmWwqdKzYVEQ5jNrQ_62RoTpHh-WEP4",
    authDomain: "gym-equipment-warehouse.firebaseapp.com",
    projectId: "gym-equipment-warehouse",
    storageBucket: "gym-equipment-warehouse.appspot.com",
    messagingSenderId: "1095978289457",
    appId: "1:1095978289457:web:f8e1840d8dac4f2973c810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;