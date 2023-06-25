const router = require('express').Router();
const homeRoutes = require('../homeRoutes');
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');

router.use('/signup', signUpRoutes);
router.use('/home', homeRoutes);
router.use('/login', loginRoutes);

module.exports = router;