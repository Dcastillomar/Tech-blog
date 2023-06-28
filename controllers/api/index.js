const router = require('express').Router();

const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');
const commentRoutes = require('./commentRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/signup', signUpRoutes);
router.use('/login', loginRoutes);
router.use('/comment', commentRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;