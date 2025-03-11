const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.json());

// Simulated user database (⚠️ Plain text passwords, NOT SECURE)
const users = [
    { id: 1, username: 'jaskirt5sidhu', password: 'Password@123' }
];

// Login endpoint (⚠️ No Security)
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user in the database
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ message: "Login successful!" });
});

// Public endpoint (No authentication needed)
router.get('/public', (req, res) => {
    res.json({ message: 'This is a public route, no authentication required.' });
});

module.exports = router;
