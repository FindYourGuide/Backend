const { User, Appointment } = require('../../models')

const { responseMessage } = require('../../helpers')


async function AddAppointment(req, res) {
  const { date, startTime, endTime } = req.body;
  const counselorId = req.user._id
  try {


    const appointment = new Appointment({ counselorId, date, startTime, endTime });
    await appointment.save();

    return responseMessage(res, 201, "Appointment added successfully", appointment)
  } catch (error) {
    console.log(error)
    return responseMessage(res, 500, "Internal Server Error")
  }
}


module.exports = AddAppointment;


