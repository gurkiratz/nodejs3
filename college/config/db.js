const mongoose = require('mongoose')
const URI =
  'mongodb+srv://gurkirat:Crr7Cjt9l4CYrfMx@cluster0.7gibrkf.mongodb.net/collegeDB?retryWrites=true&w=majority'
mongoose
  .connect(URI)
  .then(() => {
    console.log('DB connected🔥')
  })
  .catch((err) => {
    console.log(err)
  })
