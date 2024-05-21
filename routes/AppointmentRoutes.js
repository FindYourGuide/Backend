const express = require('express')
const router = express.Router();
const { GetAppointmentsByDate, CheckSlotAvailibility, AddAppointment,
  DeleteAppointment, EditAppointment
} = require('../controllers')
const { AuthMiddleware } = require('../middlewares')

router.post('/getappointmentsbydate', AuthMiddleware, GetAppointmentsByDate);
router.post('/checkslotavailibility', AuthMiddleware, CheckSlotAvailibility);
router.post('/addappointment', AuthMiddleware, AddAppointment)
router.delete('/deleteappointment/:id', AuthMiddleware, DeleteAppointment)
router.patch('/editappointment/:id', AuthMiddleware, EditAppointment)


module.exports = router;