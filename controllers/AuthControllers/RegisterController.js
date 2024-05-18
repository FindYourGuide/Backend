const { User } = require('../../models')
const { responseMessage, hashPassword } = require('../../helpers')
async function RegisterController(req, res) {
  try {
    console.log(req.body);
    const {
      fname,
      lname,
      email,
      user,
      counselortype,
      phone,
      password,
    } = req.body

    const existingUser = await User.findOne({ email: email })

    if (existingUser) {
      responseMessage(res, 400, "User already exists")
    }

    if (user == 'counselee') {
      const hashedPassword = await hashPassword(password)
      const newUser = user({
        firstname: fname,
        lastname: lname,
        email: email,
        userType: user,
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
        userType: user,
        counselortype: counselortype,
        phone: parseInt(phone),
        password: hashedPassword,
      })

      await newUser.save()
      responseMessage(res, 201, "User created successfully", newUser)
    }


  } catch (error) {
    console.log(error);
  }
}

module.exports = RegisterController;