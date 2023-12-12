// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config'); // Your secret key

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Forbidden: Invalid token' });
    }

    req.user = user; // Attach the user information to the request object
    next();
  });
}

module.exports = authenticateToken;
