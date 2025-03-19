const express = require('express');
const router = express.Router();

let submittedForms=[];
router.post("/", (req, res) => {
    const formData = Object.values(req.body);
    const isDuplicate = submittedForms.some(entry => 
        JSON.stringify(entry) === JSON.stringify(formData)
    );
    if (isDuplicate) {
        return res.status(400).json({ message: "Duplicate entry detected. Admission form already submitted!" });
    }
    submittedForms.push(formData);
    console.log("Stored Admission Form Data:", submittedForms);

    res.status(200).json({ message: "Admission form received successfully!" });
});

module.exports = router;