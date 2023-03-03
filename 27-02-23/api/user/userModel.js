let mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  password: { type: String, default: '' },

  isStudent: { type: Boolean, default: false },
  isTeacher: { type: Boolean, default: false },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'student',
  },

  createdAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('user', userSchema)
