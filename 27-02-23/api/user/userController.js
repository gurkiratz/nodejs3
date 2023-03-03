let User = require('./userModel')

exports.allStudents = async (req, res) => {
  try {
    let userObj = await User.find().populate('studentId')
    res.status(200).json({
      success: true,
      message: 'All users',
      data: userObj,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error,
    })
  }
}
