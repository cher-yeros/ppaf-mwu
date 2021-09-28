const express = require('express');
const router = express.Router();
const { Department } = require('../models/schema')

const HeadController = require('../controllers/head-controller');

router.post('/add-department', (req, res) => {
    const result = Department.create(req.body);

    res.send({
        response: result
    })
})

//router.get('/confirm', HeadController.confirmRequest);


module.exports = router;