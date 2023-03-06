let bcrypt = require('bcrypt')
let Student = require('../models/studentModel')
let User = require('../models/userModel')

exports.register = async (req, res) => {
  try {
    let formData = req.body

    let studentObj = new Student()
    studentObj.name = formData.name
    studentObj.email = formData.email
    studentObj.course = formData.course
    studentObj.department = formData.department
    let newStuObj = await studentObj.save()

    let userObj = new User()
    userObj.name = formData.name
    userObj.email = formData.email
    userObj.password = bcrypt.hashSync(formData.password, 10)
    userObj.studentId = newStuObj._id
    userObj.isStudent = true
    let newUserObj = await userObj.save()

    newStuObj.userId = newUserObj._id
    newStuObj.save()

    res.status(201).json({
      success: true,
      message: 'New Student registered',
      student: newStuObj,
      user: newUserObj,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    })
  }
}
