const router = require('express').Router();

const loginRoutes = require('./loginRoutes');
const signUpRoutes = require('./signUpRoutes');
const commentRoutes = require('./commentRoutes');
const newBlogRoutes = require('./newblogRoutes')

const logOutRoutes = require('./logOutRoutes');

router.use('/signup', signUpRoutes);
router.use('/login', loginRoutes);
router.use('/comment', commentRoutes);
router.use('/logout', logOutRoutes);
router.use('/newpost', newBlogRoutes);

module.exports = router;