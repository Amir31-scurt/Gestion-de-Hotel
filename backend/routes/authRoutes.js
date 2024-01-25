const express = require('express');
const AuthController = require('../controllers/authControllers');
const router = express.Router();

router.post('/register', AuthController.registerUser); // Endpoint for user registration
router.post('/login', AuthController.loginUser); // Endpoint for user login
router.post('/forgotPassword', AuthController.forgotPassword); // Endpoint for forgot password
router.post('/resetPassword/:id/:token', AuthController.resetPassword); // Endpoint for reset password

module.exports = router;
