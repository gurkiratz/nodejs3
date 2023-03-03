const express = require('express')
const app = express()
const PORT = 3000
const HOST = '0.0.0.0'
// require('./config/db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to College',
  })
})

app.listen(PORT, HOST, () => {
  console.log(`Server started on PORT ${PORT}`)
})

require('./config/seed')
