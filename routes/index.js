const express = require('express');
const router = express.Router();
const companyRoutes = require('./companyRoutes');
const authRoutez = require('./authRoutez');
const userRoutes = require('../routes/userRoutes');
const projectRoutes = require('../routes/projectRoutes');
const groupRoutes = require('../routes/groupRoutes');
const rabRoutes = require('../routes/rabRoutes');
const totalRoutes = require('../routes/totalRoutes');
const dailyRoutes = require('../routes/dailyRoutes');
const qtyRoutes = require('../routes/qtyUpdateRoutes');
const lastQtyROutes = require('../routes/lastQtyRoutes');
const typeReport = require('../routes/typeReportRoutes');

router.use('/project', projectRoutes);
router.use('/company', companyRoutes);
router.use('/auth', authRoutez);
router.use('/total', totalRoutes);
router.use('/user', userRoutes);
router.use('/group', groupRoutes);
router.use('/rab', rabRoutes);
router.use('/daily', dailyRoutes);
router.use('/qty', qtyRoutes);
router.use('/lastQty', lastQtyROutes);
router.use('/typeReport', typeReport);

module.exports = router;