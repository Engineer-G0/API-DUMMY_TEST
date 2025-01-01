const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.use('/create/:id', groupController.createGroup);
router.use('/:id', groupController.getAllGroup);

module.exports = router;