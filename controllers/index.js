const RegisterController = require('./AuthControllers/RegisterController')
const LoginController = require('./AuthControllers/LoginController')
const { GetCounselorDetails } = require('./GetterControllers/GetProfileController')

module.exports = {
  RegisterController,
  LoginController,
  GetCounselorDetails
}