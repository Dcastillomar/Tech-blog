const router = require('express').Router();
const { Blog, Comment, User } = require('../models');

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
const redirectToDashboard = (req, res, next) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

router.get('/login', redirectToDashboard, async (req, res) => {
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
    console.log(comments);

    res.render('layouts/blog', {
      blog: blogData.get({ plain: true }),
      comments,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/dashboard', async (req, res) => {
  try {
    if (!req.session.user_id) {
      return res.redirect('/login');
    }

    const userId = req.session.user_id; 

    const blogData = await Blog.findAll({
      where: { userId }
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render('layouts/dashboard', {
      blogs,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/newpost', async (req, res) => {
  res.render('layouts/newblog');
});

// router.get('/blog/:id', async (req, res) => {
//   try {
// const blogData = await Blog.findByPk(req.params.id, {
//   include: [
//     User, 
//     {model: Comment,
//     include: [User], 
//   },
//   ],
//   });
// if (blogData) {
//   const blog = blogData.get({ plain: true });

//   res.render('layouts/editpost', { blog });
//   }
// } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

module.exports = router;


