const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
const JWT_SECRET = process.env.JWT_SECRET
const PRIVATE_CODE = process.env.PRIVATE_CODE

module.exports = {
  PORT,
  MONGO_URL,
  JWT_SECRET,
  PRIVATE_CODE
}