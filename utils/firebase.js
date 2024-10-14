import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDFo6NzvVJfgne36M6W-7f8BhU5Amzv_Kw",
    authDomain: "shreeshyamlogistics-87484.firebaseapp.com",
    projectId: "shreeshyamlogistics-87484",
    storageBucket: "shreeshyamlogistics-87484.appspot.com",
    messagingSenderId: "380191657470",
    appId: "1:380191657470:web:76e7e262632fdd4ce444af"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { app, db };