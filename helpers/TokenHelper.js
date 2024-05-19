const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../config');

function createToken(payload) {
  return jwt.sign(payload, JWT_SECRET);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}


module.exports = {
  createToken,
  verifyToken
}