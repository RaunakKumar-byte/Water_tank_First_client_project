// routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// POST create new booking (returns booking + qrDataUrl)
router.post('/', bookingController.createBooking);

// GET all bookings
router.get('/', bookingController.getBookings);

// GET booking by bookingId (use /api/bookings/:id)
router.get('/:id', bookingController.getBookingById);

// PATCH to update payment status (optional)
router.patch('/:id/payment', bookingController.updatePaymentStatus);

module.exports = router;
