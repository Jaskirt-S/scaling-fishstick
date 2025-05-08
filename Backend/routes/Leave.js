const express = require('express');
const authenticateUser=require('./middleware/authMiddleware.js')
const User= require('../Models/User')
const router = express.Router();

router.post("/", authenticateUser, async (req, res) => {
console.log("Request Body:", req.body);
console.log("Authenticated User:", req.user);
const { fromDate, reason,toDate } = req.body;
try 
 {
    const user = await User.findById(req.user._id);
    console.log(fromDate+toDate)
    console.log(reason)
    user.leaves.push({ fromDate,toDate, reason }); // assuming `leaves` is an array of objects
    await user.save()
    res.status(201).json({ message: "Leave application submitted!" });
  } 
catch (error) 
  {
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports=router;
