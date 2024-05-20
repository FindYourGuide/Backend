const mongoose = require('mongoose')
const Schema = mongoose.Schema

const counselorSchema = Schema({
  counselorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  workExp: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
    max: 50
  },
  address: {
    type: String,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
})

module.exports = mongoose.model('Counselor', counselorSchema);