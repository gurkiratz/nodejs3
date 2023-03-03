let mongoose = require('mongoose')

let studentSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  city: { type: String, default: '' },

  createdAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('student', studentSchema)
