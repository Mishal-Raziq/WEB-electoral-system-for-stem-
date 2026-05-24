// auth.js
// Requires firebase-config.js is loaded first and firebase initialized
document.addEventListener('DOMContentLoaded', () => {

  // SIGNUP
  const signupForm = document.getElementById('signupForm');
  if(signupForm){
    signupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;

      try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const uid = userCredential.user.uid;
        // Save basic profile to Firestore
        await db.collection('users').doc(uid).set({
          uid,
          name,
          email,
          role: 'student', // default role
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });

        alert('Signup successful. Redirecting to vote page...');
        window.location.href = 'vote.html';
      } catch (err) {
        alert('Signup failed: ' + err.message);
        console.error(err);
      }
    });
  }

  // LOGIN
  const loginForm = document.getElementById('loginForm');
  if(loginForm){
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value;

      try {
        await auth.signInWithEmailAndPassword(email, password);
        // After login, you can check role then redirect accordingly
        const uid = auth.currentUser.uid;
        const userDoc = await db.collection('users').doc(uid).get();
        const user = userDoc.data();
        if(user && user.role === 'admin') {
          window.location.href = 'admin.html';
        } else {
          window.location.href = 'vote.html';
        }
      } catch (err) {
        alert('Login failed: ' + err.message);
      }
    });
  }

});
