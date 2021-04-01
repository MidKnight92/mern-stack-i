const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();

// Always require and configure near the top
require('dotenv').config();

// Connect to the database
require('./config/database');

app.use(logger('dev'));
app.use(express.json());

// configure both serve-favicon & static middeware
// to serve from the production "build" folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));

// The following "catch all" route {note the * } is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//  Configure to use port 3001 instead of 3000 during
//  development to avoid collision with React's dev server
 app.listen(PORT, () => {
    console.log(`Express app running on PORT: ${PORT}`)
 });