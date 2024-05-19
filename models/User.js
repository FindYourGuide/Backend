const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  userType: {
    type: String,
    enum: ['counselor', 'counselee', 'admin'],
    required: true,
  },
  counselorType: {
    type: String
  },
  phone: {
    type: Number,
    minLength: 10,
    maxLength: 10,
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
  isProfileCreated: {
    type: Boolean,
    default: false,
  }
})

module.exports = mongoose.model('User', userSchema)