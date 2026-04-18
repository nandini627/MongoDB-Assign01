const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUrl = process.env.MONGODB_URL || process.env.MONGO_URI;

  if (!mongoUrl) {
    throw new Error('MongoDB connection error: MONGODB_URL or MONGO_URI is not defined.');
  }

  try {
    await mongoose.connect(mongoUrl);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    throw error;
  }
};

module.exports = connectDB;