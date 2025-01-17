const express = require('express');
const router = express.Router();
const lastQtyController = require('../controllers/lastQtyController');

router.get('/:id', lastQtyController.getAllLastQtyUpdate);

module.exports = router;