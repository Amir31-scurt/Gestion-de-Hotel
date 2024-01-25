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

exports.updateHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await AddHotel.findByIdAndUpdate(id, data);
    res.status(201).send({ messge: "Modification d'hôtel réussie!" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await AddHotel.findByIdAndDelete(id);
    console.log(result);
    res.status(201).send({ messge: "Suppression d'hôtel réussie!" });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
