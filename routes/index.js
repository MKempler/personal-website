const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Ensure 'index.ejs' is in your 'views' directory
});

// The POST /send route has been removed from here as it's handled in app.js

module.exports = router;
