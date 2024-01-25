const express = require('express');
const path = require('path');
const multer = require('multer');
const connectDB = require('../backend/config/db');
require('dotenv').config();
const cors = require('cors');
const authRoutes = require('../backend/routes/authRoutes');
const AddHotelRoutes = require('../backend/routes/AddHotelRoutes');

// Connect to the Database
connectDB();

const app = express();

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Middleware configuration
exp.use(cors());

// If you want to limit CORS requests to a specific domain, you can do:
// Middleware configuration
express.use(
  cors({
    origin: 'https://gestion-de-hotel.vercel.app',
  })
);

express.use(express.json());
express.use(express.urlencoded({ extended: false }));
express.use('/api/uploads', express.static('uploads'));
express.use(upload.single('imageHotel'));

// Routes
express.use('/api', authRoutes);
express.use('/api/hotel', AddHotelRoutes);

// Run the server
const port = process.env.PORT || 5000;
express.listen(port, () => {
  console.log(`Server started, listening on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.error(`An unhandled rejection: ${err.message}`);
  process.exit(1); // Exit process with failure
});
