const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const {authenticate} = require('../middlewares/authMiddleware');

router.use('/create/:id', authenticate, projectController.createProject);
router.use('/', projectController.getAllProject);

module.exports = router;