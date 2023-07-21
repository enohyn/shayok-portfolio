// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFhGzqymcYfBY4GjZ32kRJzKL8Wf5N_c4",
    authDomain: "shayok-portfolio.firebaseapp.com",
    projectId: "shayok-portfolio",
    storageBucket: "shayok-portfolio.appspot.com",
    messagingSenderId: "803256521207",
    appId: "1:803256521207:web:80c11d74c26897c3009ef2",
    measurementId: "G-5Z3K5LC69K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export const googleAuth= new GoogleAuthProvider(auth)