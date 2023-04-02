
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAAeTYs7W7kXngcVteAf9nrjnl7vUCxy6g",
  authDomain: "tiktok-jornada-60909.firebaseapp.com",
  projectId: "tiktok-jornada-60909",
  storageBucket: "tiktok-jornada-60909.appspot.com",
  messagingSenderId: "361673169978",
  appId: "1:361673169978:web:7b30e65703ad072937a903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;