const express = require('express');
const router = express.Router();
const totalController = require('../controllers/totalController');

router.get('/:id', totalController.getTotalByGroupId);

module.exports = router;