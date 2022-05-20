// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCHAjzfMDHQndY2uUhQC9BEjuf0UxduqNQ",
    authDomain: "idea-parodi.firebaseapp.com",
    projectId: "idea-parodi",
    storageBucket: "idea-parodi.appspot.com",
    messagingSenderId: "391157971831",
    appId: "1:391157971831:web:c43853f8ff4a3196687f72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db