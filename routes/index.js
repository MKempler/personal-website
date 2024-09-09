const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Ensure 'index.ejs' is in your 'views' directory
});

router.post('/send', (req, res) => {
    // Check the honeypot field
    if (req.body.honeypot) {
        console.log('Spam detected!');
        return res.status(400).send('Spam detected.');
    }

    // If honeypot field is empty, process the form
    const transporter = require('nodemailer').createTransport({
        service: 'gmail',
        auth: {
            user: 'maxkempler@gmail.com', // Use environment variables for security
            pass: 'ilts ohkn txoc acqx' // Use environment variables for security
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: 'maxkempler@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nMessage: ${req.body.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error details:', error);
            res.status(500).json({ message: 'Error sending message.' });
        } else {
            console.log('Message sent:', info);
            res.status(200).json({ message: 'Message sent successfully!' });
        }
    });
});

module.exports = router;
