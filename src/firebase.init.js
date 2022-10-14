// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqe8Q312nI1ljdcyIfVvVVBHi1hJR8t4I",
    authDomain: "lfzero.firebaseapp.com",
    projectId: "lfzero",
    storageBucket: "lfzero.appspot.com",
    messagingSenderId: "482468938072",
    appId: "1:482468938072:web:b571d4cc3c975bdfe9252d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;