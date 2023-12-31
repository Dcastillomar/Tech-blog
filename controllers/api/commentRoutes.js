const router = require('express').Router();
const { Comment } = require('../../models');

  
// Route for creating a new comment
router.post('/blogs/:id', async (req, res) => {
  console.log('new comment route reached');
  try {
    // if (!req.session.logged_in) {
    //   // User is not logged in, redirect to the login page
    //   res.redirect('/login');
    //   return;
    // }

    const commentData = await Comment.create({
      blogId: req.params.id,
      name: req.body.name,
      text: req.body.text,
    });

    res.status(200).json(commentData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Route for deleting a comment
// router.delete('/:id', async (req, res) => {
//     try {
//         const deletedComment = await Comment.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });

//         res.status(200).json(deletedComment);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;