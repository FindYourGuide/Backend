const express = require('express')
const { PORT } = require('./config')
const { connectDB } = require('./connections')
const cors = require('cors')
const cron = require('node-cron');
const { authRouter, profileRouter, appointmentRouter } = require('./routes')
const { Appointment } = require('./models')

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//cron job to update status of expired appointments every hour
cron.schedule('0 * * * *', async () => {
  try {
    const currentTime = new Date();
    const appointments = await Appointment.find({ endTime: { $lte: currentTime }, status: 'active' });
    for (const appointment of appointments) {
      appointment.status = 'expired';
      await appointment.save();
      console.log(`Appointment ${appointment._id} expired`);
    }
  } catch (error) {
    console.error('Error updating status of expired appointments:', error);
  }
});

app.get('/', (req, res) => {
  res.json({ 'msg': "hello" })
})

app.use('/api/auth', authRouter)
app.use('/api/profile', profileRouter);
app.use('/api/appointment', appointmentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
