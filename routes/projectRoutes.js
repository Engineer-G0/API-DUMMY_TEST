const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const {authenticate} = require('../middlewares/authMiddleware');

router.use('/create/:id', projectController.createProject);
router.use('/:id', projectController.getAllProject);

module.exports = router;