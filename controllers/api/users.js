const User = require("../../models/user");
const jwt = require("jsonwebtoken");
module.exports = {
  create,
};

async function create(req, res) {
  try {
    // Add user to the db
    const user = await User.create(req.body);
  } catch (error) {
    // Client will check foor non-200 status code
    // 400 Bad request
    res.status(400).json(error);
  }
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
