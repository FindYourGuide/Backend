function ResponseHelper(res, statusCode, resMsg, resData = {}) {
  return res.status(statusCode).json({ resMsg, resData })
}

module.exports = ResponseHelper 