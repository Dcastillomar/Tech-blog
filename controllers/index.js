const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api/index');
// const dashboardRoutes = require('./dashboardRoutes.js');

router.use('/api', apiRoutes)
router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);

module.exports = router;