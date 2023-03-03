const mongoose = require('mongoose')

const expenseSchema = mongoose.Schema({
  name: { type: String, required: [true, 'Expense name is required'] },
  amount: { type: Number, default: 0 },
  predictedAmount: { type: Number, default: 0 },
  isPaid: { type: Boolean, default: false },
  Date: { type: Date, default: Date.now() },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: 'customer',
  },
})

module.exports = mongoose.model('expense', expenseSchema)
