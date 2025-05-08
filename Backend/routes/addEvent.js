const express = require('express');
const router = express.Router();
const authenticateUser=require('./middleware/authMiddleware.js')
const uploadFile = require('../Middleware/multer.js')
const uploadToCloudinary = require('../utilities/cloudinary.js')
const Event=require('../Models/Events')

router.post("/", uploadFile.single('img'), async (req, res) => {
  console.log('Event route POST hit!');
    try{
      if (!req.file) {
        return res.status(400).json({ message: "File not found" });
      }
      const localFilePath = req.file.path
      let Cloud;
      try 
      {
        Cloud = await uploadToCloudinary(localFilePath);
        console.log(Cloud)
      } 
      catch (err) 
      { 
        console.log('Cloudinary upload failed:', err.message);
      }
      console.log("22")
      const{url,public_id}=Cloud;
      console.log("hoya nahi")
      const {title,description,date} = req.body;
      console.log("23")
      const newEvent = new Event({title,description,date,images: [{url: url,publicId: public_id}]});     
      console.log("hoya nahi") 
      await newEvent.save();
      res.status(201).json({ message: "Event Created Sucessfully" });
    } catch (error) {
      res.status(500).json({ message: "Server error ho gya", error: error.message });
    }
  });
module.exports = router;