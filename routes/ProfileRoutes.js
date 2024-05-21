const express = require('express')
const router = express.Router();

const { GetCounselorDetails, GetUserDetails, GetAllCounselors
} = require('../controllers')
const { AuthMiddleware } = require('../middlewares')


router.get('/counselordetails', AuthMiddleware, GetCounselorDetails)
router.get('/userdetails', AuthMiddleware, GetUserDetails)
router.get('/getallcounselors', AuthMiddleware, GetAllCounselors)



module.exports = router;