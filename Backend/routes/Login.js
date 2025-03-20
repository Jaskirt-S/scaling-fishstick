const express = require('express');
const router = express.Router();
const User= require('../Models/User')
router.post("/", async (req, res) => {
    // const { username, password } = req.body;
    // const user = users.find(u => u.username === username && u.password === password);
    // if (!user) {
    //     return res.status(401).json({ message: 'Invalid credentials' });
    // }
    // res.json({ message: "Login successful!" });
    try {
        const { username, password } = req.body;
    
        // Find user in database
        const user = await User.findOne({ username });
    
        if (!user) {
          return res.status(400).json({ message: "Invalid username or password" });
        }
    
        // Check if password matches (⚠️ Plain text comparison)
        if (user.password !== password) {
          return res.status(400).json({ message: "Invalid username or password" });
        }
    
        res.status(200).json({ message: "Login successful", user });
      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }
});
module.exports = router;