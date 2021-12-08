import Post from '../models/post.js';
import { unexpectedError } from '../helpers/handle-error.js';

const getPost = (req, res) => {
  Post.findById(req.params.id)
    .then((post) => res.status(200).json(post))
    .catch((err) => unexpectedError(res, err));
};

const getPosts = (req, res) => {
  Post.find()
    .sort({ createdAt: -1 })
    .then((posts) => res.status(200).json(posts))
    .catch((err) => unexpectedError(res, err));
};

const deletePost = (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json(req.params.id))
    .catch((err) => unexpectedError(res, err));
};

const updatePost = (req, res) => {
  const { title, author, text } = req.body;
  const { id } = req.params;
  Post.findByIdAndUpdate(id, { title, author, text }, { new: true })
    .then((post) => res.status(200).json(post))
    .catch((err) => unexpectedError(res, err));
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
    .then((post) => res.status(200).json(post))
    .catch((err) => unexpectedError(res, err));
};

export { getPost, getPosts, deletePost, updatePost, addNewPost };
