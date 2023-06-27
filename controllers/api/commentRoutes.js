const router = require('express').Router();
const { Comment } = require('../../models');

  
// Route for creating a new comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            user_id: req.session.user_id,
            name: req.body.name,
            text: req.body.text,

        });

        res.status(200).json(newComment);
    } catch (err) {
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