const express = require('express');
const {
  AddHotel,
  getAllHotels,
  deleteHotel,
  updateHotel,
} = require('../controllers/AddHotelController');
const authenticateToken = require('../middleware/authUwt');
const router = express.Router();

router.post('/add-Hotel', authenticateToken, AddHotel);
router.get('/get-all-hotels/:userId?', authenticateToken, getAllHotels);
router.put('/update-hotel/:id', updateHotel);
router.delete('/delete-hotel/:id', authenticateToken, deleteHotel);

module.exports = router;
