const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const uploadPhoto = require('../middlewares/multerPhotoMiddleware');

router.post('/register', uploadPhoto.single('photo'), authController.register);
router.post('/login', authController.login);

module.exports = router;
