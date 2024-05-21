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
    default: 'No description updated yet'
  },
  workExp: {
    type: Number,
    default: 0,
    min: 0,
    max: 50
  },
  address: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
})

module.exports = mongoose.model('Counselor', counselorSchema);