const express = require('express')
const router = express.Router();

const { GetCounselorDetails, GetUserDetails } = require('../controllers')
const { AuthMiddleware } = require('../middlewares')


router.get('/counselordetails', AuthMiddleware, GetCounselorDetails)
router.get('/userdetails', AuthMiddleware, GetUserDetails)


module.exports = router;