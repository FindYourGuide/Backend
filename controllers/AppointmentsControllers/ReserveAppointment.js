const { User, Appointment } = require('../../models')

const { responseMessage } = require('../../helpers')

async function ReserveAppointment(req, res) {
  const userId = req.user._id;
  const { appointmentId } = req.body;
  try {
    const appointment = await Appointment.findById({ _id: appointmentId });
    if (!appointment) {
      return responseMessage(res, 404, "Appointment not found")
    }


    const updatedAppointment = await Appointment.findByIdAndUpdate({ _id: appointmentId }, { $set: { reservationStatus: "reserved", counseleeId: userId } }, { new: true });
    return responseMessage(res, 200, 'Appointment reserved successfully', updatedAppointment)

  } catch (error) {
    return responseMessage(res, 500, 'Unable to reserve appointment')
  }
}

async function GetReservedAppointments(req, res) {
  const userId = req.user._id;
  const { date } = req.body;
  try {
    const targetDate = new Date(date);

    targetDate.setHours(0, 0, 0, 0);
    const appointments = await Appointment.find({ counseleeId: userId, date: { $gte: targetDate, $lt: new Date(targetDate.getTime() + 24 * 60 * 60 * 1000) }, reservationStatus: "reserved" }).populate({ path: 'counselorId', select: "firstname lastname" })
    if (appointments) {
      return responseMessage(res, 200, "Appointments for counselor by date", appointments)
    }
    else {
      return responseMessage(res, 200, "No appointments for counselor by date")
    }

  } catch (error) {
    return responseMessage(res, 500, 'Unable to get appointments')

  }
}


module.exports = {
  ReserveAppointment,
  GetReservedAppointments
}