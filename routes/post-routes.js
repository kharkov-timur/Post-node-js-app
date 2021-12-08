import express from 'express';
const routes = express.Router();

import {
  getPost,
  getPosts,
  editPost,
  deletePost,
  updatePost,
  addNewPost,
  getNewPost,
} from '../controllers/post-controller.js';

routes.get('/posts/:id', getPost);
routes.get('/edit/:id', editPost);
routes.delete('/posts/:id', deletePost);
routes.put('/edit/:id', updatePost);
routes.get('/posts', getPosts);
routes.post('/add-post', addNewPost);
routes.get('/add-post', getNewPost);

export default routes;
