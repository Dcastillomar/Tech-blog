const router = require('express').Router();

const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');
const commentRoutes = require('./commentRoutes');

const logOutRoutes = require('./logOutRoutes');

router.use('/signup', signUpRoutes);
router.use('/login', loginRoutes);
router.use('/comment', commentRoutes);
router.use('/logout', logOutRoutes);

module.exports = router;