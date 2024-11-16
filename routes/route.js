const { Router } = require('express');
const Post = require('../modules/post.js');

const router = new Router();

router.post('/add', async (req, res) => {
  try {
    const { value, status } = req.body;

    const post = new Post({ value, status });
    await post.save();
    return res.json({ message: 'Пост добавлен' });
  } catch (error) {
    res.send(error);
  }
});

router.put('/update', async (req, res) => {
  try {
    const { value, status } = req.body;
    const filter = { _id: req.body._id };
    const update = { value: value, status: status };
    const result = await Post.findOneAndUpdate(filter, update);

    if (!result) {
      res.status(404).send({ error: 'Post is not found !' });
    }
    return res.json({ message: 'Пост обновлён' });
  } catch (error) {
    res.send(error);
  }
});

router.get('/', async (req, res) => {
  try {
    let AllPosts = await Post.find({});

    return res.send(AllPosts);
  } catch (error) {
    res.send(error);
  }
});

router.delete('/delete', async (req, res) => {
  try {
    const filter = { _id: req.body._id };

    const result = await Post.findOneAndDelete(filter);
    if (!result) {
      res.status(404).send({ error: 'Не найден' });
    }
    return res.json({ message: 'Пост удалён' });
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
