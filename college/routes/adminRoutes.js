const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/getUsers', userController.getAllUsers)
router.post('/login', userController.loginUser)

module.exports = router
