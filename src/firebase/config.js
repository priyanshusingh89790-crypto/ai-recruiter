import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCuuTZXuMVX9HwBoEXxDB8nszZIt_zrxPY",
  authDomain: "ai-recruiter-5fecd.firebaseapp.com",
  projectId: "ai-recruiter-5fecd",
  storageBucket: "ai-recruiter-5fecd.firebasestorage.app",
  messagingSenderId: "784985094728",
  appId: "1:784985094728:web:e294c86f734c80cabdb67d"
};

// ✅ Initialize app FIRST
const app = initializeApp(firebaseConfig);

// ✅ Then get auth using app
export const auth = getAuth(app);
export const db = getFirestore(app);
// (optional) export app if needed
export default app;

// Optional listener
onAuthStateChanged(auth, (user) => {
  if (user) {
  } else {
  }
});