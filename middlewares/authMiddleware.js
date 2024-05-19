const { User } = require('../models')
const { responseMessage, verifyToken } = require('../helpers')


async function AuthMiddleware(req, res, next) {
  const token = req.header('auth-token');
  if (!token) {
    return responseMessage(res, 401, "Unauthorized");
  }

  try {

    const decoded = verifyToken(token)
    req.user = await User.findById(decoded.id)

    if (!req.user) {
      return responseMessage(res, 401, "User not found");
    }
    next();
  } catch (error) {
    return responseMessage(res, 401, "Unauthorized");
  }
}

module.exports = AuthMiddleware;