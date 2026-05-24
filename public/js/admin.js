// admin.js
document.addEventListener('DOMContentLoaded', () => {
  firebase.auth().onAuthStateChanged(async user => {
    if(!user) { window.location.href='login.html'; return; }
    const userDoc = await db.collection('users').doc(user.uid).get();
    const u = userDoc.data();
    if(!u || u.role !== 'admin') {
      alert('Admins only.');
      window.location.href='index.html';
      return;
    }

    // load votes count per candidate (simple)
    const votesSnap = await db.collection('votes').get();
    const counts = {};
    votesSnap.forEach(v => {
      const { candidateId } = v.data();
      counts[candidateId] = (counts[candidateId] || 0) + 1;
    });

    // fetch candidates to show results
    const candSnap = await db.collection('candidates').get();
    let html = '<h3>Vote Counts</h3>';
    candSnap.forEach(c => {
      const d = c.data();
      html += `<div class="result-row"><div>${d.name} (${d.position})</div><div>${counts[c.id] || 0}</div></div>`;
    });

    document.getElementById('adminContent').innerHTML = html;
  });
});
