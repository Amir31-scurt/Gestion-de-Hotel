const PostModel = require('../models/post.model');

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: 'No post found, please add a post' });
  }

  const post = await PostModel.create({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};
module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json({ message: 'Not Found' });
  }

  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });
  res.status(200).json(updatePost);
};

module.exports.deletePosts = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) {
    res.status(400).json({ message: 'Not Found' });
  }

  await post.remove();
  res.status(200).json('Message deleted' + req.params.id);
};

module.exports.likePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { likers: req.body.userId } },
      { new: true }
    ).then((data) => {
      res.status(200).send(data);
    });
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports.dislikePost = async (req, res) => {
  try {
    await PostModel.findByIdAndUpdate(
      req.params.id,
      { $pull: { likers: req.body.userId } },
      { new: true }
    ).then((data) => {
      res.status(200).send(data);
    });
  } catch (e) {
    res.status(400).json(e);
  }
};
