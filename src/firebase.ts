// Firebase initialization and exports
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDn55pk9x-GMbnM66nBmYwkhN3n27jKuQ8",
    authDomain: "regrain-4e5ff.firebaseapp.com",
    databaseURL: "https://regrain-4e5ff-default-rtdb.firebaseio.com",
    projectId: "regrain-4e5ff",
    storageBucket: "regrain-4e5ff.firebasestorage.app",
    messagingSenderId: "1077509405134",
    appId: "1:1077509405134:web:fb56a9f5108447d1a4539f",
    measurementId: "G-VL9X5JVVJS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
