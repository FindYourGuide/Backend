const mongoose = require('mongoose');


const authTokenSchema = mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  token: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('AuthToken', authTokenSchema);