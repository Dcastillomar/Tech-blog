const router = require('express').Router();
const { Blog } = require('../models');

router.post('/', async (req, res) => {

  try {
    const blogData = await Blog.create(req.body);
      res.status(200).json(blogData);
    }
 catch (err) {
    res.status(400).json(err);
  }
});

 

//   try {
//     const { blogName, blogDate, blogText } = req.body;
//     const userId = req.session.user_id; // Get the user_id from the session

//     const blogData = await Blog.create({
//       name: blogName,
//       date: blogDate, 
//       text: blogText,
//       userId, // Associate the blog post with the current user
//     });

//     // Log the created blog post
//     console.log('New Blog Post:', blogData);

//     res.status(200).json(blogData);
//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).json(err);
//   }
// });



module.exports = router;