// models/Booking.js
import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  bookingId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true },
  tankType: { type: String, required: true },
  tankCapacity: { type: String, required: true },
  serviceType: { type: String, required: true },
  preferredDate: { type: String, required: true },
  preferredTime: { type: String, required: true },
  additionalNotes: { type: String },
  bookingStatus: { type: String, default: 'upcoming' },  // upcoming/completed/cancelled
  paymentStatus: { type: String, default: 'pending' },   // pending/completed/failed
  bookingDate: { type: String, default: () => new Date().toISOString().split('T')[0] },
  totalAmount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Booking', bookingSchema);
