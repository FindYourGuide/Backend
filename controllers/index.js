const RegisterController = require('./AuthControllers/RegisterController')
const LoginController = require('./AuthControllers/LoginController')
const { GetCounselorDetails, GetUserDetails } = require('./GetterControllers/GetProfileController')
const { GetAppointmentsByDate } = require('./AppointmentsControllers/GetAppointmentsController')
const CheckSlotAvailibility = require('./AppointmentsControllers/CheckSlotAvailibility')
const AddAppointment = require('./AppointmentsControllers/AddAppointment')

module.exports = {
  RegisterController,
  LoginController,
  GetCounselorDetails,
  GetUserDetails,
  GetAppointmentsByDate,
  CheckSlotAvailibility,
  AddAppointment
}