const express = require('express');
const { AddHotel, getAllHotels } = require('../controllers/AddHotelController');
const authenticateToken = require('../middleware/authUwt');
const router = express.Router();

router.post('/add-Hotel', authenticateToken, AddHotel);
router.get('/get-all-hotels', authenticateToken, getAllHotels);

module.exports = router;
