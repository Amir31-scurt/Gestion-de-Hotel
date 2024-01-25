const express = require('express');
const path = require('path');
const multer = require('multer');
const connectDB = require('../backend/config/db');
require('dotenv').config();
const cors = require('cors');
const authRoutes = require('../backend/routes/authRoutes');
const AddHotelRoutes = require('../backend/routes/AddHotelRoutes');

// Connect to the Database
const App = express();
connectDB();

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
App.use(cors());

// If you want to limit CORS requests to a specific domain, you can do:
// Middleware configuration
App.use(
  cors({
    origin: 'https://gestion-de-hotel.vercel.app',
  })
);

App.use(express.json());
App.use(express.urlencoded({ extended: false }));
App.use('/api/uploads', express.static('uploads'));
App.use(upload.single('imageHotel'));

// Routes
App.use('/api', authRoutes);
App.use('/api/hotel', AddHotelRoutes);

// Run the server
const port = process.env.PORT || 5000;
App.listen(port, () => {
  console.log(`Server started, listening on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.error(`An unhandled rejection: ${err.message}`);
  process.exit(1); // Exit process with failure
});
