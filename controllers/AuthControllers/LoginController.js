const { User, AuthToken } = require('../../models')

const { responseMessage, hashPassword, comapreHashPassword, createToken } = require('../../helpers')

const { isEmail } = require('validator')

async function LoginController(req, res) {
  try {
    console.log(req.body);
    const {
      email, password
    } = req.body

    if (!isEmail(email)) return responseMessage(res, 400, "Invalid email format");

    const user = await User.findOne({ email: email });

    if (!user) return responseMessage(res, 400, "User not registered");

    if (await comapreHashPassword(password, user.password)) {
      const token = createToken({ id: user._id });

      const authToken = new AuthToken({
        userId: user._id,
        token: token
      })

      await authToken.save();

      return responseMessage(res, 200, "Login successful", {
        userId: user._id,
        token: token
      })
    } else {
      return responseMessage(res, 400, "Invalid password")
    }


  } catch (error) {
    console.log(error);
    return responseMessage(res, 400, error.message)
  }
}

module.exports = LoginController;