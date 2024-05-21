const { User, Counselor } = require('../../models')
const { responseMessage, hashPassword } = require('../../helpers')
const { PRIVATE_CODE } = require('../../config')
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
      privateCode
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
      responseMessage(res, 201, "User registered successfully", newUser)
    }
    else if (userType === 'counselor') {
      const hashedPassword = await hashPassword(password)
      const newUser = new User({
        firstname: fname,
        lastname: lname,
        email: email,
        userType: userType,
        counselorType: counselortype,
        phone: parseInt(phone),
        password: hashedPassword,
      })

      await newUser.save()

      const newProfile = new Counselor({
        counselorId: newUser._id,
      })

      await newProfile.save()
      responseMessage(res, 201, "User registered successfully", newUser)
    }
    else {
      if (privateCode == PRIVATE_CODE) {
        const hashedPassword = await hashPassword(password)
        const newUser = User({
          email: email,
          userType: 'admin',
          password: hashedPassword,
        })
        await newUser.save()
        responseMessage(res, 201, "Admin created successfully", newUser)
      }
      else {
        responseMessage(res, 400, "Invalid private code")
        return;
      }
    }


  } catch (error) {
    console.log(error);
    return responseMessage(res, 400, error.message)

  }
}

module.exports = RegisterController;