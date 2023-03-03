const router = require('express').Router()
const studentController = require('../api/student/studentController')
const userController = require('../api/user/userController')

router.get('/', (req, res) => {
  res.json({
    msg: 'Welcome to admin routes',
  })
})

router.post('/register', studentController.register)
router.post('/allStudents', userController.allStudents)

module.exports = router
