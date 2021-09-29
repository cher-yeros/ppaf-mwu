const express = require('express');
const router = express.Router();

const PurchaserController = require('../controllers/purchaser-controller');

router.get('/', (req, res) => {
    res.send("Working now")
})

router.get('/see-request', PurchaserController.showPurchaseRequest);
router.post('/report-purchased', PurchaserController.reportPurchasedProperty);

module.exports = router;