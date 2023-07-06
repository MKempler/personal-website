const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const indexRouter = require('./routes/index');

// Set up EJS
app.set('view engine', 'ejs');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set up routes
app.use('/', indexRouter);

// Error handling
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
