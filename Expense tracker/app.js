const express = require('express')
const app = express()
const PORT = 3000
const HOST = '0.0.0.0';
require('./config/db')

const expenseRoutes = require('./routes/expenseRoutes')
const customerRoutes = require('./routes/customerRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to Expenses',
  })
})

app.use('/api/expense', expenseRoutes)
app.use('/api/customer', customerRoutes)
app.use('/api/user', userRoutes)

app.listen(PORT, HOST, () => {
  console.log(`Server started on PORT ${PORT}`)
})

require('./config/seed')
