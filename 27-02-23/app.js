const express = require('express')
const adminRoutes = require('./routes/adminRoutes')
const studentRoutes = require('./routes/studentRoutes')
const app = express()
require('./config/db')

app.use(express.urlencoded({ extended: true }))

app.get('', (req, res) => {
  res.json({})
})

app.use('/admin', adminRoutes)
app.use('/student', studentRoutes)

app.listen(3000, () => {
  console.log('Server start')
})
