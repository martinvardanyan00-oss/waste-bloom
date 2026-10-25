document.addEventListener('DOMContentLoaded', () => {
  fetchStats();
  fetchPickups();

  document.getElementById('pickupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const restaurant = document.getElementById('restName').value;
    const location = document.getElementById('restLoc').value;
    const weightKg = document.getElementById('restWeight').value;

    const res = await fetch('/api/pickups', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ restaurant, location, weightKg })
    });

    if (res.ok) {
      alert('Հավաքագրման հայտը հաջողությամբ գրանցվեց:');
      document.getElementById('pickupForm').reset();
      fetchStats();
      fetchPickups();
    }
  });

  document.getElementById('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const buyer = document.getElementById('farmerName').value;
    const location = document.getElementById('farmerLoc').value;
    const quantityTons = document.getElementById('farmerQty').value;

    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ buyer, location, quantityTons })
    });

    if (res.ok) {
      alert('Պարարտանյութի պատվերը գրանցվեց:');
      document.getElementById('orderForm').reset();
    }
  });
});

async function fetchStats() {
  const res = await fetch('/api/stats');
  const data = await res.json();
  document.getElementById('totalWaste').innerText = `${data.totalWasteKg} կգ`;
  document.getElementById('co2Saved').innerText = `${data.co2SavedKg} կգ`;
  document.getElementById('activeRestaurants').innerText = data.activeRestaurants;
}

async function fetchPickups() {
  const res = await fetch('/api/pickups');
  const pickups = await res.json();
  const tbody = document.getElementById('pickupTableBody');
  tbody.innerHTML = '';

  pickups.reverse().forEach(p => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>#${p.id}</td>
      <td><strong>${p.restaurant}</strong></td>
      <td>${p.location}</td>
      <td>${p.weightKg} կգ</td>
      <td><span style="color: ${p.status === 'Completed' ? 'green' : 'orange'}">● ${p.status}</span></td>
    `;
    tbody.appendChild(tr);
  });
}
