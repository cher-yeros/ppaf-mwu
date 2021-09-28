const express = require('express');
const router = express.Router();

const SKController = require('../controllers/store-keeper-controller');

router.get('/', (req, res) => {
    res.send("Working now")
})

router.post('/add-property', SKController.addProperty);


module.exports = router;