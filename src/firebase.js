// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNKrja2vMEbV5_1RY6K8xY_nMHpTTcpQ0",
  authDomain: "dragboard-9e0b3.firebaseapp.com",
  projectId: "dragboard-9e0b3",
  storageBucket: "dragboard-9e0b3.firebasestorage.app",
  messagingSenderId: "947446370301",
  appId: "1:947446370301:web:4e2a2702f7f72bb741d394",
  measurementId: "G-G37SPCED1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);