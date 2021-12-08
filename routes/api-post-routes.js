import express from 'express';
const routes = express.Router();

import {
  getPosts,
  addNewPost,
  getPost,
  deletePost,
  updatePost,
} from '../controllers/api-post-controller.js';

// Get All Posts
routes.get('/api/posts', getPosts);

// Add New Post
routes.post('/api/post', addNewPost);

// Get Post by ID
routes.get('/api/post/:id', getPost);

// Delete Post by ID
routes.delete('/api/post/:id', deletePost);

// Update Post by ID
routes.put('/api/post/:id', updatePost);

export default routes;
