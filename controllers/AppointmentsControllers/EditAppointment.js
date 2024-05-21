const { User, Appointment } = require('../../models')

const { responseMessage } = require('../../helpers')

async function EditAppointment(req, res) {
  const { startTime, endTime, date } = req.body;
  const counselorId = req.user._id
  const appointmentId = req.params.id;
  try {
    const appointment = await Appointment.findById({ _id: appointmentId });
    console.log(appointment, counselorId);
    if (!appointment) {
      return responseMessage(res, 404, 'Appointment not found')
    }
    if (appointment.counselorId.toString() !== counselorId.toString()) {
      return responseMessage(res, 401, 'Unauthorized')
    }

    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);

    const overlappingAppointments = await Appointment.find({
      counselorId,
      date: { $gte: targetDate, $lt: new Date(targetDate.getTime() + 24 * 60 * 60 * 1000) },
      _id: { $ne: appointmentId },
      $or: [
        { startTime: { $lt: endTime }, endTime: { $gt: startTime } }, // General overlap condition
        { startTime: { $eq: startTime } }, // Starts exactly at the specified start time
        { endTime: { $eq: endTime } }, // Ends exactly at the specified end time
        { startTime: { $lt: startTime }, endTime: { $gt: startTime } }, // Starts before and ends after the specified start time
        { startTime: { $lt: endTime }, endTime: { $gt: endTime } } // Starts before and ends after the specified end time
      ]
    });

    if (overlappingAppointments.length > 0) {
      return responseMessage(res, 401, 'Slot is not available');
    } else {
      const updatedAppointment = await Appointment.findByIdAndUpdate({ _id: appointmentId }, { $set: { startTime, endTime } }, { new: true });
      return responseMessage(res, 200, 'Appointment updated successfully', updatedAppointment)
    }


  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, 'Internal server error')
  }
}

module.exports = EditAppointment;