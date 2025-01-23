const express = require('express');
const router = express.Router();
const qtyController = require('../controllers/qtyUpdateController');

router.put('/update/:id', qtyController.updateQty);
router.get('/:id', qtyController.getQtyUpdate);

module.exports = router;