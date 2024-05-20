const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = Schema({
  counseleeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  counselorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: Date,
    required: true,

  },
  endTime: {
    type: Date,
    required: true,
  },
  reservationStatus: {
    type: String,
    enum: ['free', 'reserved'],
    default: 'free'
  },
  status: {
    type: String,
    enum: ['expire', 'active'],
    default: 'active'
  }
})

module.exports = mongoose.model('Appointment', appointmentSchema)