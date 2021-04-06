const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const PORT = process.env.PORT || 3001;
const app = express();

// Always require and configure near the top
require("dotenv").config();

// Connect to the database
require("./config/database");

app.use(logger("dev"));
app.use(express.json());

// configure both serve-favicon & static middeware
// to serve from the production "build" folder
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

// Middleware to verify a token and assign the user object from the JWT
// to a req.user property
app.use(require("./config/checkToken"));

// Put API routes here, before the "catch all" route
app.use("/api/users", require("./routes/api/users"));

// custom middleware
// const ensureLoggedIn = require("./config/ensureLoggedIn");
app.use("/api/items", require("./routes/api/items"));

// The following "catch all" route {note the * } is necessary
// to return the index.html on all non-AJAX requests
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

//  Configure to use port 3001 instead of 3000 during
//  development to avoid collision with React's dev server
app.listen(PORT, () => {
  console.log(`Express app running on PORT: ${PORT}`);
});
