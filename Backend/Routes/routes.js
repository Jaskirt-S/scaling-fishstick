const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('API is working!');
});

module.exports = router;  // ✅ Ensure you export the router
