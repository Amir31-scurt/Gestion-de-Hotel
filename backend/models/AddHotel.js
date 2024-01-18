const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({
  nomHotel: { type: String, required: true },
  adresseHotel: { type: String, required: true },
  emailHotel: { type: String, required: true },
  telephoneHotel: { type: String, required: true },
  priceHotel: { type: Number, required: true },
  deviceHotel: { type: String, required: true },
  imageHotel: { type: String, required: true },
});
