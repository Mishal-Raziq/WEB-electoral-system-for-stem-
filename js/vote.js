// vote.js
document.addEventListener('DOMContentLoaded', async () => {
  const listEl = document.getElementById('candidatesList');
  const submitBtn = document.getElementById('submitVote');

  // Check auth state
  firebase.auth().onAuthStateChanged(async (user) => {
    if(!user) {
      alert('Please login first');
      window.location.href = 'login.html';
      return;
    }

    // load candidates
    const snap = await db.collection('candidates').where('approved','==', true).get();
    const candidates = [];
    snap.forEach(doc => candidates.push({id: doc.id, ...doc.data()}));

    if(candidates.length === 0) listEl.innerHTML = '<p>No candidates yet.</p>';
    else {
      listEl.innerHTML = '';
      candidates.forEach(c => {
        const div = document.createElement('div');
        div.className = 'candidate';
        div.innerHTML = `
          <input type="radio" name="candidate" value="${c.id}" id="c-${c.id}">
          <label for="c-${c.id}">
            <strong>${c.name}</strong><br><small>${c.position}</small>
          </label>
        `;
        listEl.appendChild(div);
      });
    }

    submitBtn.addEventListener('click', async () => {
      const selected = document.querySelector('input[name="candidate"]:checked');
      if(!selected) { alert('Select a candidate first'); return; }
      const candidateId = selected.value;

      // Prevent double voting: check votes collection for user
      const existing = await db.collection('votes').where('userId','==', user.uid).get();
      if(!existing.empty){
        alert('You have already voted. One vote per user.');
        return;
      }

      // Save vote
      await db.collection('votes').add({
        userId: user.uid,
        candidateId,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      alert('Vote submitted successfully!');
      window.location.href = 'results.html';
    });
  });
});
