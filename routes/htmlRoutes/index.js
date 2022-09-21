//  Packages needed for file

const path = require('path');
const router = require('express').Router();

// Reading HTTP method
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// Reading HTTP method
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})

module.exports = router;