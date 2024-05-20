const { User, Appointment } = require('../../models')

const { responseMessage } = require('../../helpers')


async function GetAppointmentsByDate(req, res) {
  const userId = req.user._id;
  const { date } = req.body;
  try {
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);
    const appointments = await Appointment.find({
      counselorId: userId,
      date: { $gte: targetDate, $lt: new Date(targetDate.getTime() + 24 * 60 * 60 * 1000) }
    }).sort({ startTime: 1 });

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
  GetAppointmentsByDate
}