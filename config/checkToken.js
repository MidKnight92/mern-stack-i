const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    // Check for the token being sent in a header or as a query parameter
    let token = req.get('Authorization') || req.query.token;
    if (token){
        // Remove the 'Bearer' if it was included in the token header
        token = token.replace('Bearer ', '');
        // Check if token is valid and not expired
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            // if valid token, decoded will be the token's entire payload
            // if invalid token, err will be set
            res.user = err ? null : decoded.user;
            // (optional)
            req.exp = err ? null : new Date(decoded.exp * 1000);
            return next();
        });
    } else {
        // No token was sent 
        req.user = null;
        return next();
    }
};