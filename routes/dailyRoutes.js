const express = require('express');
const router = express.Router();
const dailyController = require('../controllers/dailyController');

router.get('/:id', dailyController.getAllDailyById);

module.exports = router