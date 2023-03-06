const router = require('express').Router()
const studentController = require('../controllers/studentController')

router.get('/', (req, res) => {
  res.send('hi')
})

router.post('/register', studentController.register)

module.exports = router
