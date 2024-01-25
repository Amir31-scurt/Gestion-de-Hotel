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
app.use(
  cors({
    origin: 'https://gestion-de-hotel-server.vercel.app/',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/uploads', express.static('uploads'));
app.use(upload.single('imageHotel'));

// Routes
app.use('/api', authRoutes);
app.use('/api/hotel', AddHotelRoutes);

// Run the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started, listening on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.error(`An unhandled rejection: ${err.message}`);
  process.exit(1); // Exit process with failure
});
