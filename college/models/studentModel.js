let mongoose = require('mongoose')

let studentSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: {
    type: String,
    default: '',
    unique: [true, 'Student already registered'],
  },
  course: { type: String, default: '' },
  department: { type: String, default: '' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', default: null },

  createdAt: { type: Date, default: Date.now() },
})

module.exports = mongoose.model('student', studentSchema)
