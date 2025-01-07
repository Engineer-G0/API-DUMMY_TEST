const express = require('express');
const router = express.Router();
const rabController = require('../controllers/rabController');
const {authenticate} = require('../middlewares/authMiddleware');

router.post('/create/:id', authenticate, rabController.createRab);
router.delete('/delete/:id', rabController.deleteRab);
router.put('/update/:id', rabController.updateRab);
router.get('/:id', rabController.getRabByGrupId);
router.get('/', rabController.getAllRab);

module.exports = router;
