const router = require('express').Router();
const { Blog } = require('../models');
const { Comment } = require('../models');

//render all blog posts
router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      order: [['date', 'ASC']],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('layouts/home', {
      blogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//login render
router.get('/login', async (req, res) => {
  res.render('layouts/login');
});
//signup render
router.get('/signup', async (req, res) => {
  try{
  res.render('layouts/signup');
  } catch (err){
    res.status(500).json(err)
  }
});

// Individual blog post route
router.get('/blogs/:id', async (req, res) => {
  try {
    const blogId = req.params.id;
    const blogData = await Blog.findByPk(blogId);
    const commentsData = await Comment.findAll({ where: { blogId } });

    const comments = commentsData.map((comment) => comment.get({ plain: true }));

    res.render('layouts/blog', {
      blog: blogData.get({ plain: true }),
      comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;