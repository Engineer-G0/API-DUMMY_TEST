const express = require('express');
const router = express.Router();
const companyRoutes = require('./companyRoutes');
const authRoutez = require('./authRoutez');
const userRoutes = require('../routes/userRoutes');
const projectRoutes = require('../routes/projectRoutes');
const groupRoutes = require('../routes/groupRoutes');

router.use('/project', projectRoutes);
router.use('/company', companyRoutes);
router.use('/auth', authRoutez);
router.use('/user', userRoutes);
router.use('/group', groupRoutes);

module.exports = router;