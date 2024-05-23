const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// New user route api end point
router.post('/signup', userController.handleSignUp);

// Log in user route api end point
router.post('/login', userController.handleLogin);

// Retrieve users route api end point
router.get('/users', userController.getAllUsers);

module.exports = router;
