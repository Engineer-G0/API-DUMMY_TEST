const express = require('express');
const router = express.Router();
const rabController = require('../controllers/rabController');
const {authenticate} = require('../middlewares/authMiddleware');

router.post('/create/:id', authenticate, rabController.createRab);
router.get('/', rabController.getAllRab);

module.exports = router;
