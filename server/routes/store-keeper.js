const express = require('express');
const router = express.Router();

const HeadController = require('../controllers/head-controller');

router.get('/', (req, res) => {
    res.send("Working now")
})

//router.get('/confirm', HeadController.confirmRequest);


module.exports = router;