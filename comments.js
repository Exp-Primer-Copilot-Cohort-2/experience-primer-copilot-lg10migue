// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the express.static middleware to serve static files
app.use(express.static('public'));

// Use the json middleware to parse JSON
app.use(express.json());

// Use the urlencoded middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Use the comments router
const commentsRouter = require('./comments.js');
app.use('/comments', commentsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});