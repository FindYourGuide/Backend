const RegisterController = require('./AuthControllers/RegisterController')
const LoginController = require('./AuthControllers/LoginController')
const { GetCounselorDetails, GetUserDetails } = require('./GetterControllers/GetProfileController')
const { GetAppointmentsByDate } = require('./AppointmentsControllers/GetAppointmentsController')
const CheckSlotAvailibility = require('./AppointmentsControllers/CheckSlotAvailibility')
const AddAppointment = require('./AppointmentsControllers/AddAppointment')
const DeleteAppointment = require('./AppointmentsControllers/DeleteAppointment')
const EditAppointment = require('./AppointmentsControllers/EditAppointment')

module.exports = {
  RegisterController,
  LoginController,
  GetCounselorDetails,
  GetUserDetails,
  GetAppointmentsByDate,
  CheckSlotAvailibility,
  AddAppointment,
  DeleteAppointment,
  EditAppointment
}