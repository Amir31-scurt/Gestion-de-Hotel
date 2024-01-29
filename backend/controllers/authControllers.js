const User = require('../models/User');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
require('dotenv').config();
const {
  addTokenToBlacklist,
  isTokenBlacklisted,
} = require('../middleware/tokenBlacklist');

const secretKey = process.env.JWT_SECRET;
const port = process.env.PORT;
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

async function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: `Cet email n'existe pas` });
    }
    let token = jwt.sign({ userId: user?._id }, secretKey, { expiresIn: '1d' });
    // NodeMailer to send mail to User
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'elamir3131@gmail.com',
        pass: 'wnyb nuwz smfn cpyn',
      },
    });

    var mailOptions = {
      from: 'elamir3131@gmail.com',
      to: email,
      subject: 'Réinitialisation de mot de passe',
      text: `http://localhost:5173/reset-mot-de-passe/${user._id}/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        return res.status(200).send({ message: 'Email envoyé avec succés' });
      }
    });
  } catch (error) {}
}

async function resetPassword(req, res) {
  const { id, token } = req.params;
  const { password } = req.body;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (!token || token.split('.').length !== 3) {
      return res.status(400).send({ message: 'Invalid token format' });
    }
    if (err) {
      console.error(err); // Log the error for debugging
      return res
        .status(400)
        .send({ message: 'Token verification failed', error: err.message });
    } else {
      bcrypt
        .hash(password, 10)
        .then((hash) => {
          return User.findOneAndUpdate({ _id: id }, { password: hash });
        })
        .then((user) => {
          res
            .status(200)
            .send({ message: 'Mot de passe réinitialisé avec succès' });
        })
        .catch((err) => {
          console.error(err); // Log for debugging
          res.status(400).send(err);
        });
    }
  });
}

async function logoutUser(req, res) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (!token || isTokenBlacklisted(token)) {
    return res.status(401).send({
      message: 'Aucun token fourni ou le token est déjà sur la liste noire',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    addTokenToBlacklist(token);
    res.send({ message: 'Déconnexion réussie' });
  } catch (error) {
    res
      .status(400)
      .send({ message: 'Erreur lors de la déconnexion', error: error.message });
  }
}

const AuthController = {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  logoutUser,
};

module.exports = AuthController;
