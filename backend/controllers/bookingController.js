// controllers/bookingController.js
const Booking = require('../models/Booking');
const generateBookingId = require('../utils/generateId');
const QRCode = require('qrcode');

exports.createBooking = async (req, res) => {
  try {
    const { 
      customerName, 
      email, 
      phone, 
      address, 
      city, 
      state, 
      pincode, 
      tankType, 
      tankCapacity, 
      serviceType, 
      preferredDate, 
      preferredTime, 
      additionalNotes 
    } = req.body;

    if (!customerName || !email || !phone || !address || !city || !state || !pincode || 
        !tankType || !tankCapacity || !serviceType || !preferredDate || !preferredTime) {
      return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    const bookingId = generateBookingId();

    // Calculate amount based on service type
    const serviceRates = {
      "Regular Cleaning": 800,
      "Deep Cleaning": 1500,
      "Sanitization": 1200,
      "Deep Cleaning + Sanitization": 2200,
    };
    const totalAmount = serviceRates[serviceType] || 1000;

    const booking = new Booking({
      bookingId,
      customerName,
      email,
      phone,
      address,
      city,
      state,
      pincode,
      tankType,
      tankCapacity,
      serviceType,
      preferredDate,
      preferredTime,
      additionalNotes: additionalNotes || '',
      bookingStatus: 'upcoming',
      paymentStatus: 'pending',
      bookingDate: new Date().toISOString().split('T')[0],
      totalAmount
    });

    await booking.save();

    // Create QR content - you can customize (e.g., payment link with bookingId)
    const paymentPayload = {
      type: 'payment',
      bookingId,
      amount: totalAmount.toString(),
      currency: 'INR',
      description: `Water Tank ${serviceType} - ${tankCapacity} - ${preferredDate} ${preferredTime}`
    };

    const qrDataString = JSON.stringify(paymentPayload);
    const qrDataUrl = await QRCode.toDataURL(qrDataString);

    // Return booking + QR data URL
    return res.status(201).json({
      message: 'Booking created',
      booking,
      qrDataUrl
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const { id } = req.params; // id = bookingId
    const booking = await Booking.findOne({ bookingId: id });

    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updatePaymentStatus = async (req, res) => {
  try {
    const { id } = req.params; // bookingId
    const { paymentStatus } = req.body;

    const booking = await Booking.findOneAndUpdate(
      { bookingId: id },
      { paymentStatus: paymentStatus || 'Successful', status: 'Confirmed' },
      { new: true }
    );

    if (!booking) return res.status(404).json({ message: 'Booking not found' });

    res.json({ message: 'Payment status updated', booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
