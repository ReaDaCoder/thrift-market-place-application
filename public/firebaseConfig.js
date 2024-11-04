// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcna0R_cXjeBKiP6w_2hCpeGHU4Bk1zRs",
  authDomain: "thrift-market-app.firebaseapp.com",
  projectId: "thrift-market-app",
  storageBucket: "thrift-market-app.firebasestorage.app",
  messagingSenderId: "701479303571",
  appId: "1:701479303571:web:98a50cd11901b51efdd066",
  measurementId: "G-ZBY8RZSV8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);