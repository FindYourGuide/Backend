const { User, Appointment } = require('../../models')

const { responseMessage } = require('../../helpers')

async function CheckSlotAvailibility(req, res) {
  const counselorId = req.user._id
  const { date, startTime, endTime } = req.body;

  try {
    console.log(startTime);

    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0);

    // Query appointments for the given counselorId and date
    const overlappingAppointments = await Appointment.find({
      counselorId,
      date: { $gte: targetDate, $lt: new Date(targetDate.getTime() + 24 * 60 * 60 * 1000) },
      $or: [
        { startTime: { $lt: endTime }, endTime: { $gt: startTime } }, // General overlap condition
        { startTime: { $eq: startTime } }, // Starts exactly at the specified start time
        { endTime: { $eq: endTime } }, // Ends exactly at the specified end time
        { startTime: { $lt: startTime }, endTime: { $gt: startTime } }, // Starts before and ends after the specified start time
        { startTime: { $lt: endTime }, endTime: { $gt: endTime } } // Starts before and ends after the specified end time
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