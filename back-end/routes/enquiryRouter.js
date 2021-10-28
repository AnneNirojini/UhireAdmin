const router = require('express').Router()
const enquiryCtrl = require('../controllers/enquiryCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')

router.post('/enquiry', enquiryCtrl.createEnquiry)
router.get('/enquiry', auth, authAdmin, enquiryCtrl.getEnquiry)

module.exports = router