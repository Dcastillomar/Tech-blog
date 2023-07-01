const router = require('express').Router();

router.get('/', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.redirect('/');
      });
    } else {
      res.redirect('/');
    }
  });

  module.exports = router;