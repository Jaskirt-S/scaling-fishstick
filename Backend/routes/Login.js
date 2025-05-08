const express = require('express');
const router = express.Router();
const User= require('../Models/User');
const jwt =require('jsonwebtoken');
const Logiin =require('../Models/Loginvaaste')
require('dotenv').config();

router.post("/", async (req, res) => {
  console.log("Login Request Body:", req.body);
    try {
        const { username, password } = req.body;
        console.log("🔍 Checking user in DB...");
        const user = await User.findOne({ username });
        if (!user) {
          console.log("❌ User not found");
          return res.status(400).json({ message: "Invalid username or password" });
        }
        console.log("✅ User found:", user);
        if (user.password !== password) {
          console.log("❌ Incorrect password");
          return res.status(400).json({ message: "Invalid username or password" });
        }
        console.log("🔐 Generating JWT...");
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: "1h", 
        });
        console.log("✅ Token generated:", token);
        const role=user.role;
        res.status(200).json({ message: "Login successful",token, role});
        console.log("all done and response sent")

      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }
});
module.exports = router;