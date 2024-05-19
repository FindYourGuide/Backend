const { User } = require('../../models')
const { responseMessage, hashPassword } = require('../../helpers')
async function RegisterController(req, res) {
  try {
    console.log(req.body);
    const {
      fname,
      lname,
      email,
      userType,
      counselortype,
      phone,
      password,
    } = req.body

    const existingUser = await User.findOne({ email: email })

    if (existingUser) {
      responseMessage(res, 400, "User already exists")
      return
    }

    if (userType === 'counselee') {
      const hashedPassword = await hashPassword(password)
      const newUser = User({
        firstname: fname,
        lastname: lname,
        email: email,
        userType: userType,
        phone: parseInt(phone),
        password: hashedPassword,
      })
      await newUser.save()
      responseMessage(res, 201, "User created successfully", newUser)
    }
    else {
      const hashedPassword = await hashPassword(password)
      const newUser = new User({
        firstname: fname,
        lastname: lname,
        email: email,
        userType: userType,
        counselortype: counselortype,
        phone: parseInt(phone),
        password: hashedPassword,
      })

      await newUser.save()
      responseMessage(res, 201, "User created successfully", newUser)
    }


  } catch (error) {
    console.log(error);
    return responseMessage(res, 400, error.message)

  }
}

module.exports = RegisterController;