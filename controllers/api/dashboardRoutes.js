const router = require('express').Router();
const { Comment, User, Blog } = require('../../models');

router.post('/dashboard', async (req, res) => {
    try {
      const { blogName, blogDate, blogText } = req.body;
      const userId = req.session.user_id; // Get the user_id from the session
  
      const newBlog = await Blog.create({
        name: blogName,
        date: blogDate,
        text: blogText,
        user_id: userId, // Associate the blog post with the current user
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;