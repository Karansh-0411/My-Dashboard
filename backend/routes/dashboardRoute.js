const express = require('express');
const auth = require('../middleware/auth'); // Import the auth middleware
const router = express.Router();

router.get('/', auth, (req, res) => {
  // Example response with authenticated user data
  res.status(200).json({
    message: 'Welcome to your dashboard!',
    user: req.user, // Provided by auth middleware
  });
});

module.exports = router;
