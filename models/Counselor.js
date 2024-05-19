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
  startTime: {
    type: String,
    match: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
    required: true
  },
  endTime: {
    type: String,
    match: /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/,
    required: true
  },
  daysOfWeek: [{
    type: String,
    enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    required: true
  }],
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  }
})

module.exports = mongoose.model('Counselor', counselorSchema);