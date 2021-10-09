const express = require('express');
const router = express.Router();

const SKController = require('../controllers/store-keeper-controller');

router.get('/', (req, res) => {
    res.send("Working now")
})

router.post('/add-property', SKController.addProperty);
router.delete('/delete-property', SKController.deleteProperty);
router.put('/update-property', SKController.updateProperty);
router.get('/get-property', SKController.getProperty);
router.put('/approve-issue', SKController.approveIssue);
//router.put('/approve-return', SKController.approveReturn);
//router.put('/get-return', SKController.approveReturn);



module.exports = router;