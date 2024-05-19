const express = require('express')
const router = express.Router();

const { GetCounselorDetails } = require('../controllers')
const { AuthMiddleware } = require('../middlewares')


router.get('/counselordetails', AuthMiddleware, GetCounselorDetails)


module.exports = router;