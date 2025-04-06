const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        res.json({ message: "Hello, World!" });
    } catch (error) {
        console.error("Error in / route:", error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
