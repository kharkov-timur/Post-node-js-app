import * as dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import methodOverride from 'method-override';

import postRoutes from './routes/post-routes.js';
import contactRoutes from './routes/contact-routes.js';
import apiPostRoutes from './routes/api-post-routes.js';
import createPath from './helpers/create-path.js';
import { errorMsg, successMsg } from './helpers/handle-error.js';

dotenv.config();

const app = express();

app.set('view engine', 'ejs');

const PORT = process.env.PORT;
const db = process.env.MONGO_URL;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => successMsg('Connected to DB'))
  .catch((error) => errorMsg(error));

app.listen(PORT, (error) => {
  error ? errorMsg(error) : successMsg(`Server started ${PORT}`);
});

app.use(
  morgan(':method :url :status :res[content-length] - :response-time ms'),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.static('styles'));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

app.use(postRoutes);
app.use(contactRoutes);
app.use(apiPostRoutes);

app.use((req, res) => {
  const title = 'Error page';
  res.status(404).render(createPath('error'), { title });
});
