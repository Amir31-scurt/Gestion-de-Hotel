const AddHotel = require('../models/AddHotel');

exports.AddHotel = async (req, res) => {
  const data = req.body;
  const imageHotel = req.file ? req.file.filename : null;
  data.imageHotel = imageHotel;
  const hotel = new AddHotel(data);
  try {
    const result = await hotel.save();
    console.log(result);
    res.status(201).send({ messge: "Ajout d'hotel réussi!" });
  } catch (err) {
    console.log(err);
    res.status(err);
  }
};

exports.getAllHotels = async (req, res) => {
  try {
    const result = await AddHotel.find();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};
