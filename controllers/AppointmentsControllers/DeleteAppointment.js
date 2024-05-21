const { User, Appointment } = require('../../models')

const { responseMessage } = require('../../helpers')

async function DeleteAppointment(req, res) {
  const appointmentId = req.params.id;
  const counselorId = req.user._id;
  try {
    console.log(appointmentId);
    const appointment = await Appointment.findById({ _id: appointmentId });
    if (!appointment) {
      return responseMessage(res, 404, "Appointment not found")
    }
    await Appointment.deleteOne({ _id: appointmentId });
    return responseMessage(res, 200, "Appointment deleted successfully")
  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, "Internal server error")
  }
}

module.exports = DeleteAppointment;