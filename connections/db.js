const mongoose = require('mongoose')
const { MONGO_URL } = require('../config')


async function connectDB() {
  try {
    await mongoose.connect(MONGO_URL)
    console.log('Connected to db');

  } catch (error) {
    console.log("Error connecting to db\n");
    console.log(error);
  }
}


module.exports = connectDB