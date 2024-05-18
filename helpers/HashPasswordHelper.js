const bcrypt = require('bcrypt')

const saltRounds = 10;

async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
  } catch (error) {
    console.log('Error  hashing password: ', error);
  }
}

async function comapreHashPassword(password, hash) {
  try {
    const match = await bcrypt.compare(password, hash)
    return match
  } catch (error) {
    console.log('Error  comparing password: ', error);
  }
}

module.exports = {
  hashPassword,
  comapreHashPassword
}