// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json({ limit: '5mb' })); // allow receiving QR data URLs if needed

// Routes
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Health check
app.get('/', (req, res) => {
  res.send('Water Tank Booking Backend is running');
});

// Error handling middleware (basic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
