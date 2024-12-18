const express = require('express');
const { signup, login } = require('../controllers/authController');

const router = express.Router();

// Route for signing up
router.post('/signup', signup);

// Route for logging in
router.post('/login', login);

module.exports = router;
