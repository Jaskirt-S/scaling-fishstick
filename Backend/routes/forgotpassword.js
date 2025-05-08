const express = require('express');
const router = express.Router();
const User= require('../Models/User');
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  console.log("Login Request Body:", req.body);
    try {
        const {username} = req.body;
        console.log("username=" ,username)
        console.log("🔍 Checking user in DB...");
        const user = await User.findOne({ username });
        if (!user) {
          console.log("❌ User not found");
          return res.status(400).json({ message: "Invalid username" });
        }
        else{
            const email="jaskirt5sidhu@gmail.com"
              const otp="5786"
              if (!email || !otp) {
                return res.status(400).json({ error: "Email and OTP are required" });
              }
            
              let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                  },
              });
            
              let message = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: "Your OTP",
                text: `Your OTP is: ${otp}`,
                html: `<b>Your OTP is: ${otp}</b>`,
              };
            
              try {
                await transporter.sendMail(message);
                res.status(200).json({
                  msg: "OTP sent to your email successfully!",
                  email,
                  success: true,
                });
              } catch (error) {
                res.status(500).json({ error: "Failed to send email", details: error });
              }
        }
        console.log("✅ User found:", user);
        res.status(200).json({ message: "user exists",});
      } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
      }

});

module.exports = router;