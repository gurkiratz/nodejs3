const express = require('express')
const app = express()
const PORT = 3000
require('./config/db')
const adminRoutes = require('./routes/adminRoutes')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to College',
  })
})

app.use('/api/admin', adminRoutes)

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`)
})

require('./config/seed')
