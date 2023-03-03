const bcrypt = require('bcrypt')
let User = require('../models/userModel')

let adminData = {
  name: 'Admin',
  email: 'admin@x.com',
  password: bcrypt.hashSync('123', 10),
  isAdmin: true,
}

// let userObj = new User()
User.findOne({ email: adminData.email }).then((uobj) => {
  if (!uobj) {
    const userObj = User.create(adminData)
    console.log('Admin registered')
  }
})
