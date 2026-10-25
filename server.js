const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Mock Data Storage (In-memory for Demo)
let pickups = [
  { id: 1, restaurant: "Loona Restaurant", location: "Isahakyan St, Yerevan", weightKg: 45, status: "Completed", date: "2026-10-24" },
  { id: 2, restaurant: "Narnia Sushi", location: "Pushkin St, Yerevan", weightKg: 30, status: "Pending", date: "2026-10-25" }
];

let compostOrders = [
  { id: 1, buyer: "Ararat Valley Farm", quantityTons: 2, location: "Armavir", status: "Confirmed" }
];

// API Endpoints
app.get('/api/stats', (req, res) => {
  const totalWaste = pickups.reduce((sum, p) => sum + p.weightKg, 0);
  const co2Saved = (totalWaste * 0.5).toFixed(1); // 0.5 kg CO2 per kg organic waste
  res.json({
    totalWasteKg: totalWaste,
    co2SavedKg: co2Saved,
    activeRestaurants: pickups.length,
    compostDeliveredTons: 2.5
  });
});

app.get('/api/pickups', (req, res) => {
  res.json(pickups);
});

app.post('/api/pickups', (req, res) => {
  const { restaurant, location, weightKg } = req.body;
  if (!restaurant || !weightKg) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  const newPickup = {
    id: pickups.length + 1,
    restaurant,
    location: location || "Yerevan Center",
    weightKg: parseFloat(weightKg),
    status: "Pending",
    date: new Date().toISOString().split('T')[0]
  };
  pickups.push(newPickup);
  res.status(201).json(newPickup);
});

app.get('/api/orders', (req, res) => {
  res.json(compostOrders);
});

app.post('/api/orders', (req, res) => {
  const { buyer, quantityTons, location } = req.body;
  const newOrder = {
    id: compostOrders.length + 1,
    buyer,
    quantityTons: parseFloat(quantityTons),
    location,
    status: "Pending"
  };
  compostOrders.push(newOrder);
  res.status(201).json(newOrder);
});

// Fallback route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
