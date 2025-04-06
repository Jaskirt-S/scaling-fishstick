const express = require('express');
const router = express.Router();
const Admission =require("../Models/admissioninfo")

router.post("/", async (req, res) => {
    try{
      const{name,Mno,Age,Class,remarks} =(req.body);
      const existingReq = await Admission.findOne({ name,Mno,Age,Class});
      if (existingReq) {
        return res.status(400).send("Duplicate Request")
        }
      else{
        const newReq = new Admission({name,Mno,Age,Class,remarks});
        await newReq.save();
        res.status(201).send( "Admission request registered!");
      }
    }
    catch (error) {
      res.status(500).send("Server error!backend");
    }
    
});

module.exports = router;