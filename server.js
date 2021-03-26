const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const PORT = process.env.PORT || 3001;
const app = express();

app.use('dev');
app.use(express.json());

// configure both serve-favicon & static middeware
// to serve from the production "build" folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.io')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

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