const router = require('express').Router()
const { submitEnquiry } = require('../controllers/enquiryController')

router.post('/', submitEnquiry)

module.exports = router
