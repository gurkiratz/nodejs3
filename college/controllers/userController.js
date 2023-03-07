const bcrypt = require('bcrypt')
const User = require('../models/userModel')

exports.getAllUsers = async (req, res) => {
  try {
    let userObj = await User.find()
    res.status(200).json({
      success: true,
      message: 'All users displayed',
      data: userObj,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    })
  }
}

exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((userObj) => {
      if (userObj) {
        if (bcrypt.compareSync(req.body.password, userObj.password)) {
          res.status(200).json({
            success: true,
            message: 'login successful',
          })
        } else {
          res.status(400).json({
            success: false,
            message: 'Email and Password do not match',
          })
        }
      } else {
        res.status(400).json({
          success: false,
          message: 'User not found',
        })
      }
    })
    .catch((error) => {
      res.status(400).json({
        success: false,
        message: error,
      })
    })
}
