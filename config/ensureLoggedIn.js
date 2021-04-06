module.exports = function (req, res, next) {
  console.log(req.user);
  // status code of 401 is unauthorized
  if (!req.user) return res.status(401).json("Unauthorized");
  next();
};
