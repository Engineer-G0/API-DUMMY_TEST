const express = require("express");
const router = express.Router();
const typeRouterController = require('../controllers/typeReportController');

router.get('/:id', typeRouterController.getAllTypeReport);

module.exports = router;