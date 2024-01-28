const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema(
  {
    nomHotel: { type: String, required: true },
    adresseHotel: { type: String, required: true },
    emailHotel: { type: String, required: true },
    telephoneHotel: { type: String, required: true },
    priceHotel: { type: String, required: true },
    deviceHotel: { type: String, required: true },
    imageHotel: { type: String },
    addedBy: {
      ref: 'User',
      type: Schema.Types.ObjectId,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const AddHotel = mongoose.model('Hotel', hotelSchema);
module.exports = AddHotel;
