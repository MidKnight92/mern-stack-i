// Model
const User = require("../../models/user");

// Libriares
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  create,
  login,
  checkToken
};

async function create(req, res) {
  try {
    // Add user to the db
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    //  Yes, we can use res.json to send back just a string
    // The client code will take this into consideration
    res.json(token);
  } catch (error) {
    // Client will check foor non-200 status code
    // 400 Bad request
    res.status(400).json(error);
  }
}

async function login(req, res) {
  try {
    // Get user
    const user = await User.findOne({email: req.body.email});
    // No user found
    if (!user) throw new Error();
    // Check if passwords match
    const verified = await bcrypt.compare(req.body.password, user.password);
    // Passwords did not match
    if (!verified) throw new Error();
    // User verified send token
    const token = createJWT(user);
    res.json(token);
  } catch (error) {
    res.status(400).json(error);
  }
}

function checkToken(req, res) {
  // req.user will always be present when a token is sent
  console.log(`req.user`, req.user);
  res.json(req.exp);
}

// Helper Functions
function createJWT(user) {
  return jwt.sign(
    // data payload,
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
