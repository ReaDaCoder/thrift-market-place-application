// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCcna0R_cXjeBKiP6w_2hCpeGHU4Bk1zRs",
  authDomain: "thrift-market-app.firebaseapp.com",
  projectId: "thrift-market-app",
  storageBucket: "thrift-market-app.appspot.com",
  messagingSenderId: "701479303571",
  appId: "1:701479303571:web:98a50cd11901b51efdd066",
  measurementId: "G-ZBY8RZSV8R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);
export const imageDb = getStorage(app);