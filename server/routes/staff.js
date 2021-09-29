const express = require('express');
const staffController = require('../controllers/staff-controller');
const router = express.Router();

const StaffController = require('../controllers/staff-controller');

router.get('/', (req, res) => {
    res.send("Working now")
})

router.post('/issue', StaffController.issueProperty)
router.post('/transfer', StaffController.transferProperty)
router.post('/borrow', StaffController.borrowProperty)
router.post('/leave-issue', StaffController.leaveIssue)
router.post('/return', StaffController.returnProperty)
router.post('/request-purchase', StaffController.requestPurchase)

router.get('/status',StaffController.showStatus)

//router.get('/confirm', HeadController.confirmRequest);


module.exports = router;