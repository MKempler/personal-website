const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const indexRouter = require('./routes/index');
app.use(express.json()); // This is needed to parse JSON bodies

// Set up EJS
app.set('view engine', 'ejs');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up routes
app.use('/', indexRouter);

// Add route for handling form submission
app.post('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
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

// Error handling for not found
app.use((req, res, next) => {
    res.status(404).send("Sorry, can't find that!");
});

// Error handling for server errors
app.use((err, req, res, next) => {
    console.error('Error stack:', err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


