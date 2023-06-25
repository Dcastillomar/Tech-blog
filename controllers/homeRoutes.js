const router = require('express').Router();
const { Blog } = require('../models');

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      order: [['date', 'ASC']],
    });

    // Convert each blog object to plain data using map
    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    // Pass the blogs to the template and render 'main' view
    res.render('main', {
      blogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;