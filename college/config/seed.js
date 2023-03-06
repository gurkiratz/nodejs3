const bcrypt = require('bcrypt')
let User = require('../models/userModel')

let adminData = {
  name: 'Admin',
  email: 'admin@x.com',
  password: bcrypt.hashSync('admin123', 10),
  isAdmin: true,
}

User.findOne({ email: adminData.email }).then((uobj) => {
  if (!uobj) {
    const userObj = User.create(adminData)
    console.log('Admin registered')
  }
})
