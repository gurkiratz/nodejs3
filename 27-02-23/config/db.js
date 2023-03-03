const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose
  .connect('mongodb://localhost:27017/myDatabase')
  .then(() => {
    console.log('Databse connected🔥')
  })
  .catch((err) => {
    console.log(err)
  })
