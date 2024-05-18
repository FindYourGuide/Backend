const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,

  },
  lastname: {
    type: String,
    required: true,

  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  userType: {
    type: String,
    enum: ['counselor', 'counselee'],
    required: true,
  },
  counselorType:{
    type:String
  },
  password: {
    type: String,
    required: true,
    minLength: 8
  },
})

const User = mongoose.model('User', userSchema)