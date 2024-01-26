
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // This assumes you have an 'index.ejs' file in your 'views' directory
});

module.exports = router;
