// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuveL8oubR5uXkIhHFLQzb0YalfUYjwaM",
    authDomain: "code-and-create-fff42.firebaseapp.com",
    projectId: "code-and-create-fff42",
    storageBucket: "code-and-create-fff42.appspot.com",
    messagingSenderId: "839881685147",
    appId: "1:839881685147:web:0afd2727c4ce6dfc742e3e"
};

let firebaseApp

if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig)
}

// Initialize Firebase
export const app:any = firebaseApp
export const auth = getAuth(app)
