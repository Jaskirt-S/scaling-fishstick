const express = require('express');
const router = express.Router();
// const bodyParser = require('body-parser');
// router.use(bodyParser.json());
const users = [
    {username: 'jaskirt5sidhu', password: 'Password@123' }
];
router.post("/", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.json({ message: "Login successful!" });
});
module.exports = router;