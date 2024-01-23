const express = require('express');
const AuthController = require('../controllers/authControllers');
const router = express.Router();

router.post('/register', AuthController.registerUser);
router.post('/login', AuthController.loginUser);
router.post('/forgotPassword', AuthController.forgotPassword);
router.post('/resetPassword/:id/:token', AuthController.resetPassword);

module.exports = router;
