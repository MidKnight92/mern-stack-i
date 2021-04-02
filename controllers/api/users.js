const User = require("../../models/user");
const jwt = require("jsonwebtoken");
module.exports = {
  create,
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

// Helper Functions
function createJWT(user) {
  return jwt.sign(
    // data payload,
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
}
