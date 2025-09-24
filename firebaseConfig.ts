import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcw69ThSVmcwuIyIRHhJeyOHulFrcJOp8",
  authDomain: "smart-attendance-sih.firebaseapp.com",
  projectId: "smart-attendance-sih",
  storageBucket: "smart-attendance-sih.firebasestorage.app",
  messagingSenderId: "410596841651",
  appId: "1:410596841651:web:37defa5ce55744808238c6",
  measurementId: "G-FMSQT5KFRV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);