const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUrl = process.env.MONGODB_URL;
  console.log("MongoDb Url : ", mongoUrl);

  if (!mongoUrl) {
    throw new Error('MongoDB connection error: MONGODB_URL is not defined.');
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