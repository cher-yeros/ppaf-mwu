const express = require('express');
const router = express.Router();
const { Department } = require('../models/schema')

const HeadController = require('../controllers/head-controller');
const storeController = require('../controllers/admin-controller');

router.post('/add-department', (req, res) => {
    const result = Department.create(req.body);

    res.send({
        response: true
    })
})

router.post('/add-employee', storeController.addemployee)

//router.get('/confirm', HeadController.confirmRequest);


module.exports = router;