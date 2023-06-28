const router = require('express').Router();
const { User } = require('../../models');

router.get('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.redirect('/');
      });
    } else {
      res.redirect('/');
    }
  });
  
  module.exports = router;