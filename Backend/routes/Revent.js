const express = require('express');
const router = express.Router();
const Event = require('../Models/Events'); 

router.get("/", async (req, res) => {
    console.log("hit")
async function getLatestThreeEvents() {
  try {
    const latestEvents = await Event.find()
      .sort({ date: -1 }) // sort by 'date' in descending order
      .limit(3);          // limit to 3 results

    res.status(200).json(latestEvents);
  }
  
  catch (error) {
    console.error("Error fetching latest events:", error);
     res.status(500).json({ error: "Failed to fetch events" });
  }
}
getLatestThreeEvents()
  });
module.exports = router;