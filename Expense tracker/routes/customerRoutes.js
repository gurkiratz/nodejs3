const router = require('express').Router()
const customerController = require('../controllers/customerController')

router.route('/').post(customerController.registerCustomer)

module.exports = router
