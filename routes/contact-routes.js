import express from 'express';
const routes = express.Router();

import { getContacts } from '../controllers/contact-controller.js';

routes.get('/contacts', getContacts);

export default routes;
