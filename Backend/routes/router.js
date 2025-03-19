// const express = require('express');
// const router = express.Router();
// const Admission = require('./Admission');

// router.post("/", async (req, res) => {
//     try {
//         const formData = req.body;
//         console.log("Received Admission Form Data:", formData);
        
//         // Create and save a new Admission record
//         const newAdmission = new Admission(formData);
//         await newAdmission.save();

//         res.status(201).json({ message: "Admission form saved successfully!" });
//     } catch (error) {
//         console.error("Error saving admission form:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// });

// module.exports = router;
