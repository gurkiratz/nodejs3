const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },
  isCustomer: { type: Boolean, default: false },
  is: { type: Boolean, default: false },

  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'customer',
  },
  createdAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('user', userSchema)
