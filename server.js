const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initial realistic mock data
let pickups = [
  { id: 1, restaurant: "Loona Italian Restaurant", location: "Isahakyan St 28, Yerevan", weightKg: 55, status: "Completed", date: "2026-10-24" },
  { id: 2, restaurant: "Lavash Dining", location: "Tumanyan St 21, Yerevan", weightKg: 85, status: "Completed", date: "2026-10-24" },
  { id: 3, restaurant: "Narnia Sushi Bar", location: "Pushkin St 12, Yerevan", weightKg: 35, status: "Pending", date: "2026-10-25" },
  { id: 4, restaurant: "Tavern Yerevan", location: "Amiryan St 5, Yerevan", weightKg: 90, status: "Pending", date: "2026-10-25" }
];

let compostOrders = [
  { id: 1, buyer: "Ararat Valley Farm", quantityTons: 2.5, location: "Armavir", status: "Confirmed" }
];

// API Endpoints
app.get('/api/stats', (req, res) => {
  const totalWaste = pickups.reduce((sum, p) => sum + p.weightKg, 0);
  const co2Saved = (totalWaste * 0.52).toFixed(1); // ~0.52 kg CO2 saved per 1 kg diverted organic waste
  res.json({
    totalWasteKg: totalWaste,
    co2SavedKg: co2Saved,
    activeRestaurants: 10,
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
    location: location || "Yerevan",
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
