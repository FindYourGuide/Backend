const express = require('express')
const router = express.Router();
const { GetAppointmentsByDate, CheckSlotAvailibility, AddAppointment
} = require('../controllers')
const { AuthMiddleware } = require('../middlewares')

router.post('/getappointmentsbydate', AuthMiddleware, GetAppointmentsByDate);
router.post('/checkslotavailibility', AuthMiddleware, CheckSlotAvailibility);
router.post('/addappointment', AuthMiddleware, AddAppointment)

module.exports = router;