const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');
// const commentRoutes = require('./commentRoutes');

router.use('/signup', signUpRoutes);
router.use('/login', loginRoutes);
// router.use('/comment', commentRoutes);

module.exports = router;