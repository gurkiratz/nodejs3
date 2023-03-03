const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: Number, default: 0 },
  city: { type: String, default: '' },
  occupation: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('customer', customerSchema)
