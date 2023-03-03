const router = require('express').Router()
const expenseController = require('../controllers/expenseController')

// router.post('/addExpense', expenseController.createExpense)

router
  .route('/')
  .get(expenseController.getAllExpenses)
  .post(expenseController.createExpense)

router.route('/:id').get(expenseController.getExpense)

module.exports = router
