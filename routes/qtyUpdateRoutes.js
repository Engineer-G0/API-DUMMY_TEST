const express = require('express');
const router = express.Router();
const qtyController = require('../controllers/qtyUpdateController');

router.post('/create/:id', qtyController.createQty);
router.get('/:id', qtyController.getQtyUpdate);

module.exports = router;