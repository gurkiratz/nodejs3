const router = require('express').Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAllUsers)
router.post('/login', userController.loginUser)

module.exports = router
