const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI || 'undefined');
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};

module.exports = connectDB;
