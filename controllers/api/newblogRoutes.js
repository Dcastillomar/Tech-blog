const router = require('express').Router();
const { Blog } = require('../../models');

router.post('/', async (req, res) => {
console.log(req.body, req.session.user_id)
  try {
    const blogData = await Blog.create({...req.body, userId: req.session.user_id});
      res.status(200).json(blogData);
    }
 catch (err) {
    res.status(400).json(err);
  }
});
//renders post into the layouts/editpost
router.get('/:id', async (req, res) => {
    try {
      const blogId = req.params.id;
      const blogData = await Blog.findByPk(blogId);
  
      if (blogData) {
        const blog = blogData.get({ plain: true });
  
        res.render('layouts/editpost', { blog }); 
      } else {
        res.status(404).json({ error: 'Blog not found' });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.put('/:id', async (req, res) => {
    try {
      const [affectedRows] = await Blog.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
  
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      const [affectedRows] = Blog.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

  

module.exports = router;