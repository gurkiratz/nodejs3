const bcrypt = require('bcrypt')
const Customer = require('../models/customerModel')
const User = require('../models/userModel')

exports.registerCustomer = async (req, res) => {
  try {
    let formData = req.body

    let customerObj = new Customer()
    customerObj.name = formData.name
    customerObj.email = formData.email
    customerObj.phone = formData.phone
    customerObj.city = formData.city
    customerObj.occupation = formData.occupation
    let customer = await customerObj.save()

    let userObj = new User()
    userObj.name = formData.name
    userObj.email = formData.email
    userObj.password = bcrypt.hashSync(formData.password, 10)
    userObj.customerId = customer._id
    userObj.isCustomer = true
    let user = await userObj.save()
    
    customer.userId = user._id // creating userId in customer
    customer.save()

    res.status(201).json({
      success: true,
      message: 'New Customer registered',
      customer,
      user,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    })
  }
}
