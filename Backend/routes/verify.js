const express = require("express");
const router = express.Router();
const checkAuth = require("./middleware/authMiddleware"); // Adjust path as needed

router.get("/verify", checkAuth, (req, res) => {
  res.status(200).json({
    valid: true,
    user: req.user // Optional: return user info (e.g., id, role)
  });
});

module.exports = router;
