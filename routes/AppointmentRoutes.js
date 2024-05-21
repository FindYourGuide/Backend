const express = require('express')
const router = express.Router();
const { GetAppointmentsByDate, CheckSlotAvailibility, AddAppointment,
  DeleteAppointment, EditAppointment, GetCounselorDataById, GetAvailableAppointmentsByDate, ReserveAppointment, GetReservedAppointments
} = require('../controllers')
const { AuthMiddleware } = require('../middlewares')

router.post('/getappointmentsbydate', AuthMiddleware, GetAppointmentsByDate);
router.post('/checkslotavailibility', AuthMiddleware, CheckSlotAvailibility);
router.post('/addappointment', AuthMiddleware, AddAppointment)
router.delete('/deleteappointment/:id', AuthMiddleware, DeleteAppointment)
router.patch('/editappointment/:id', AuthMiddleware, EditAppointment)
router.get('/counselorbyid/:id', AuthMiddleware, GetCounselorDataById)
router.post('/availableappointmentsbydate', AuthMiddleware, GetAvailableAppointmentsByDate)
router.post('/reserveappointment', AuthMiddleware, ReserveAppointment)
router.post('/reservedappointments', AuthMiddleware, GetReservedAppointments)

module.exports = router;