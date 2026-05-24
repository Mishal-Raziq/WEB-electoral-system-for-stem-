import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const signupForm = document.getElementById("signupForm");
const successModal = document.getElementById("successModal");

signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const stemId = document.getElementById("stemId").value.trim();

  try {
    /* ============================
       1️⃣ CHECK STEM ID UNIQUENESS
       ============================ */
    const stemRef = doc(db, "stemIds", stemId);
    const stemSnap = await getDoc(stemRef);

    if (stemSnap.exists()) {
      alert("This STEM ID is already registered.");
      return;
    }

    /* ============================
       2️⃣ CREATE AUTH USER
       ============================ */
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    /* ============================
       3️⃣ RESERVE STEM ID
       ============================ */
    await setDoc(stemRef, {
      uid: user.uid,
      createdAt: serverTimestamp()
    });

    /* ============================
       4️⃣ CREATE USER PROFILE
       ============================ */
    await setDoc(doc(db, "users", user.uid), {
      fullName,
      email,
      stemId,
      role: "student",
      createdAt: serverTimestamp()
    });

    /* ============================
       5️⃣ SHOW SUCCESS MODAL
       ============================ */
    successModal.style.display = "flex";

  } catch (error) {
    console.error("Signup error:", error);
    alert(error.message);
  }
});

/* ============================
   MODAL ACTION
   ============================ */
window.redirectToLogin = function () {
  window.location.href = "login.html";
};
