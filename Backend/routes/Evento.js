const express = require('express');
const router = express.Router();
const Event = require('../Models/Events'); 

router.get("/", async (req, res) => {
    console.log("evento hito");

    try {
        const allEvents = await Event.find().sort({ date: -1 }); 
        res.status(200).json(allEvents);
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).json({ error: "Failed to fetch events" });
    }
});

module.exports = router;
