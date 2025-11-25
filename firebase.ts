
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwtCfS5cgH1LMOvP_3QEaotIhFShN_cTw",
  authDomain: "kol-haeda.firebaseapp.com",
  projectId: "kol-haeda",
  storageBucket: "kol-haeda.firebasestorage.app",
  messagingSenderId: "601018307946",
  appId: "1:601018307946:web:e066c08ffabedeaf3c4113",
  measurementId: "G-WMRBJJQRLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
