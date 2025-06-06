const express = require('express');
const router = express.Router();
const User= require('../Models/User')

router.post("/", async (req, res) => {
    try{
      const { username, password } = req.body;
      const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: "Username already taken" });
      }
      const newUser = new User({ username, password });
      await newUser.save();
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  });
module.exports = router;