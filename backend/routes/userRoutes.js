const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// New user route api end point
router.post('/signup', userController.handleSignUp);
router.post('/login', userController.handleLogin);

module.exports = router;
