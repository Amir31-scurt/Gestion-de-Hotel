const express = require('express');
const router = express.Router();
const {
  setPosts,
  getPosts,
  editPost,
  deletePosts,
  likePost,
  dislikePost,
} = require('../controllers/post.controllers');

// Where actions are executed

router.get('/', getPosts);
router.post('/', setPosts);
router.put('/:id', editPost);
router.delete('/:id', deletePosts);
router.patch('/like-post/:id', likePost);
router.patch('/dislike-post/:id', dislikePost);

module.exports = router;
