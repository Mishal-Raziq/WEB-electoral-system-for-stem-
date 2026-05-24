// Firebase CDN imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjccACQ4aGNIIE2GhvkM9vR5RW08IbsJ8",
  authDomain: "e-voting-system-db6c0.firebaseapp.com",
  projectId: "e-voting-system-db6c0",
  storageBucket: "e-voting-system-db6c0.appspot.com",
  messagingSenderId: "710903523364",
  appId: "1:710903523364:web:af7b22979230075e1d50b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);
