const express = require('express');
const router = express.Router();
const companyControllers = require('../controllers/companyControllers');
const upload = require('../middlewares/multerLogoMiddleware');

router.get('/', companyControllers.getAllCompany);
router.get('/:id', companyControllers.getCompanyById);
router.post('/create', upload.single('logo'), companyControllers.createCompany);

module.exports = router;