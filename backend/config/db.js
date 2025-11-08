// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || 'mongodb+srv://singhraunakkumar123_db_user:mWrvf0qDv3Z7PgrW@cluster0.ccn95an.mongodb.net/watertankdb';
    await mongoose.connect(uri, {
      // options if needed
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
