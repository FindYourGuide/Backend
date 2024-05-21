const RegisterController = require('./AuthControllers/RegisterController')
const LoginController = require('./AuthControllers/LoginController')
const { GetCounselorDetails, GetUserDetails } = require('./GetterControllers/GetProfileController')
const { GetAppointmentsByDate, GetAvailableAppointmentsByDate
} = require('./AppointmentsControllers/GetAppointmentsController')
const CheckSlotAvailibility = require('./AppointmentsControllers/CheckSlotAvailibility')
const AddAppointment = require('./AppointmentsControllers/AddAppointment')
const DeleteAppointment = require('./AppointmentsControllers/DeleteAppointment')
const EditAppointment = require('./AppointmentsControllers/EditAppointment')
const { GetAllCounselors, GetCounselorDataById } = require('./GetterControllers/GetCounsellorDetails')
const { ReserveAppointment, GetReservedAppointments
} = require('./AppointmentsControllers/ReserveAppointment')

module.exports = {
  RegisterController,
  LoginController,
  GetCounselorDetails,
  GetUserDetails,
  GetAppointmentsByDate,
  CheckSlotAvailibility,
  AddAppointment,
  DeleteAppointment,
  EditAppointment,
  GetAllCounselors,
  GetCounselorDataById,
  GetAvailableAppointmentsByDate,
  ReserveAppointment,
  GetReservedAppointments
}