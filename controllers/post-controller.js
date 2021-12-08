import Post from '../models/post.js';
import createPath from '../helpers/create-path.js';
import { handleError } from '../helpers/handle-error.js';

const getPost = (req, res) => {
  const title = 'Post';
  Post.findById(req.params.id)
    .then((post) => res.render(createPath('post'), { title, post }))
    .catch((err) => {
      handleError(res, err);
    });
};

const getPosts = (req, res) => {
  const title = 'Posts';
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.render(createPath('posts'), { title, posts }))
    .catch((err) => {
      handleError(res, err);
    });
};

const editPost = (req, res) => {
  const title = 'Edit Post';
  Post.findById(req.params.id)
    .then((post) => res.render(createPath('edit-post'), { title, post }))
    .catch((err) => {
      handleError(res, err);
    });
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(200))
    .catch((err) => {
      handleError(res, err);
    });
};

const updatePost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, author, text })
    .then((result) => res.redirect(`/posts/${id}`))
    .catch((err) => {
      handleError(res, err);
    });
};

const addNewPost = (req, res) => {
  const { title, author, text } = req.body;
  const post = new Post({
    id: new Date(),
    title,
    text,
    author,
  });

  post
    .save()
    .then(() => res.redirect('/posts'))
    .catch((err) => {
      handleError(res, err);
    });
};

const getNewPost = (req, res) => {
  const title = 'Add post';
  res.render(createPath('add-post'), { title });
};

export {
  getPost,
  getPosts,
  editPost,
  deletePost,
  updatePost,
  addNewPost,
  getNewPost,
};
