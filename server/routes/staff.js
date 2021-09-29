const express = require('express');
const router = express.Router();

const HeadController = require('../controllers/head-controller');

router.get('/', (req, res) => {
    res.send("Working now")
})

router.get('/issue', )
router.get('/transfer', )
router.get('/borrow', )
router.get('/issue', )
router.get('/issue', )
router.get('/issue', )

//router.get('/confirm', HeadController.confirmRequest);


module.exports = router;