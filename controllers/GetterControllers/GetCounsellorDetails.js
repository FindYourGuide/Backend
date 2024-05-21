const { User, Counselor } = require('../../models')

const { responseMessage } = require('../../helpers')

async function GetAllCounselors(req, res) {


  try {

    const counselors = await Counselor.find({}).populate({
      path: 'counselorId', // Field to populate (foreign key reference)
      select: 'firstname lastname email phone counselorType' // Specific fields to include
    });

    return responseMessage(res, 200, 'Details of counselors', counselors)
  } catch (error) {
    return responseMessage(res, 500, 'Unable to get details of counselors')
  }
}

async function GetCounselorDataById(req, res) {
  const id = req.params.id

  try {

    const counselors = await Counselor.find({ counselorId: id }).populate({
      path: 'counselorId', // Field to populate (foreign key reference)
      select: 'firstname lastname email phone counselorType' // Specific fields to include
    });

    return responseMessage(res, 200, 'Details of counselor', counselors)
  } catch (error) {
    return responseMessage(res, 500, 'Unable to get details of counselor')
  }
}

module.exports = { GetAllCounselors, GetCounselorDataById }
