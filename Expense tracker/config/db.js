const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost:27017/expenseDB')
  .then(() => {
    console.log('DB connected🔥')
  })
  .catch((err) => {
    console.log(err)
  })
