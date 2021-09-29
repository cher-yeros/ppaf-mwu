const express = require('express');
const router = express.Router();
const { Department } = require('../models/schema')

const HeadController = require('../controllers/head-controller');
const AdminController = require('../controllers/admin-controller')

router.post('/add-department', (req, res) => {
    const result = Department.create(req.body);

    res.send({
        response: true
    })
})

router.post('/add-employee', AdminController.addemployee)
router.post('/add-role', AdminController.addRole)

//router.get('/confirm', HeadController.confirmRequest);


module.exports = router;