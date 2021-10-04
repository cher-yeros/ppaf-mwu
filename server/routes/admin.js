const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/admin-controller')

router.post('/add-department', AdminController.addDepartment)
router.post('/add-employee', AdminController.addEmployee)
router.delete('/delete-employee', AdminController.deleteEmployee)
router.put('/update-employee', AdminController.updateEmployee)
router.post('/add-role', AdminController.addRole)
router.post('/set-role', AdminController.setRole)
router.get('/get-employees', AdminController.getEmployee)

router.get('/get-issues', AdminController.getIssues)
router.get('/get-transfers', AdminController.getTransfers)
router.get('/get-returns', AdminController.getReturns)
router.get('/get-purchase-requests', AdminController.getPurchaseRequests)
router.get('/get-borrows', AdminController.getBorrows)
router.get('/get-leave-issues', AdminController.getLeaveIssues)

//router.post('/set-head')
//router.get('/confirm', HeadController.confirmRequest);

module.exports = router;