// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLCzcKdGj1O9uO1ImiZGwBKAbyoLJ7UYE",
    authDomain: "books-warehouse-caee5.firebaseapp.com",
    projectId: "books-warehouse-caee5",
    storageBucket: "books-warehouse-caee5.appspot.com",
    messagingSenderId: "339121228715",
    appId: "1:339121228715:web:338224b8188f75f5dce0ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;