const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

router.get('/resume', (req, res) => {
  res.render('resume', { title: 'Resume' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact' });
});

router.get('/projects', (req, res) => {
    res.render('projects', { title: 'projects' });
  });


module.exports = router;
