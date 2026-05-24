// firebase-config.js - simple initialization using firebase v9+ CDN
// NOTE: replace config values with your project's values from Firebase console

// Add these <script> tags to your HTML before other app scripts when not using bundlers:
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore-compat.js"></script>

if(!window.firebase) {
  console.error("Firebase scripts missing. Include firebase-app-compat.js, firebase-auth-compat.js, firebase-firestore-compat.js in your HTML.");
}

// Initialize Firebase (replace with your config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
