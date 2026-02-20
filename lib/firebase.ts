import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBC1r5nM261DHmgP370fxIvlvnGfU8eivY",
  authDomain: "pdclimitedng.firebaseapp.com",
  projectId: "pdclimitedng",
  storageBucket: "pdclimitedng.firebasestorage.app",
  messagingSenderId: "593304087930",
  appId: "1:593304087930:web:d58a0a8ec7f4ef0b3dfac3",
  measurementId: "G-G76TZ17TYH"
};

// Initialize Firebase (Next.js check to prevent multiple initializations)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

// Export the Database
export const db = getFirestore(app);