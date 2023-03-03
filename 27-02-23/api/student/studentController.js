let Student = require('./studentModel')
let User = require('../user/userModel')

exports.register = async (req, res) => {
  try {
    let formData = req.body

    let studentObj = new Student()
    studentObj.name = formData.name
    studentObj.email = formData.email
    studentObj.city = formData.city
    let newStuObj = await studentObj.save()

    let userObj = new User()
    userObj.name = formData.name
    userObj.email = formData.email
    userObj.password = formData.password
    userObj.studentId = newStuObj._id
    userObj.isStudent = true
    let newUserData = await userObj.save()

    res.status(201).json({
      success: true,
      message: 'New Student registered',
      student: newStuObj,
      user: newUserData,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    })
  }
}

// if 2 tables are interconnected and thery are attached with _id (ObjectId), then to show that object data, we use POPULATE.
