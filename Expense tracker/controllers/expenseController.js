const Expense = require('../models/expenseModel')

exports.createExpense = async (req, res) => {
  try {
    const newExpense = await Expense.create(req.body)

    res.status(201).json({
      success: true,
      message: 'New Expense added',
      expense: newExpense,
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.getAllExpenses = async (req, res) => {
  try {
    let queryStr = JSON.stringify(req.query)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
    console.log(req.query)
    const expenses = await Expense.find(JSON.parse(queryStr)).populate(
      'customerId'
    )

    res.status(200).json({
      success: true,
      results: expenses.length,
      data: expenses,
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}

exports.getExpense = async (req, res) => {
  try {
    console.log(req.params.id)
    const expense = await Tour.findById(req.params.id)

    res.status(200).json({
      success: true,
      data: expense,
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    })
  }
}
