const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;
async function registerUser(req, res) {
  let { fullName, email, password } = req.body;
  try {
    const duplicate = await User.find({ email });
    if (duplicate && duplicate.length > 0) {
      return res.status(400).send({ message: 'Le mail existe déjà' });
    }
    let user = new User({ fullName, email, password });
    const result = await user.save();
    console.log(result);
    res.status(200).send({ message: 'Utilisateur enregistré avec succès' });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({ message: "Erreur lors de l'enregistrement", error: err.message });
  }
}
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: 'Authentification invalide' });
    }
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .send({ message: 'Le mot de passe saisi est incorrecte!' });
    }
    let token = jwt.sign({ userId: user?._id }, secretKey, { expiresIn: '1h' });
    let finalData = {
      userId: user?._id,
      email: user?.email,
      name: user?.fullName,
      token,
    };
    res.send(finalData);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

const AuthController = {
  registerUser,
  loginUser,
};

module.exports = AuthController;
