const { User, Appointment } = require('../../models')

const { responseMessage } = require('../../helpers')

async function CheckSlotAvailibility(req, res) {
  const counselorId = req.user._id
  const { date, startTime, endTime } = req.body;

  try {
    console.log(startTime);



    // Query appointments for the given counselorId and date
    const overlappingAppointments = await Appointment.find({
      counselorId,
      date,
      $or: [
        { startTime: { $lt: endTime }, endTime: { $gt: startTime } }, // Check if any appointment overlaps with the specified time range
        { startTime: startTime, endTime: endTime }, // Check if any appointment starts or ends exactly at the specified start or end time
        { startTime: { $gt: startTime, $lt: endTime } } // Check if any appointment starts and ends within the specified time range
      ]
    });

    // If there are overlapping appointments, the slot is not available
    if (overlappingAppointments.length > 0) {
      responseMessage(res, 200, 'Slot is not available', { available: false });
    } else {
      responseMessage(res, 200, 'Slot Available', { available: true });
    }
  } catch (error) {
    console.error('Error checking slot availability:', error);
    responseMessage(res, 500, 'An error occurred while checking slot availability');
  }
};

module.exports = CheckSlotAvailibility