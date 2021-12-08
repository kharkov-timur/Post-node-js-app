const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const methodOverride = require('method-override');
const postRoutes = require('./routes/post-routes');
const postApiRoutes = require('./routes/api-post-routes');
const contactRoutes = require('./routes/contact-routes');
const createPath = require('./helpers/create-path');

const errorMsg = chalk.bgKeyword('white').redBright;
const successMsg = chalk.bgKeyword('green').white;

const server = express();

server.set('view engine', 'ejs');

mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log(successMsg('Connected to DB')))
  .catch((error) => console.log(errorMsg(error)));

server.listen(process.env.PORT, (error) => {
  error ? console.log(errorMsg(error)) : console.log(successMsg(`listening port ${process.env.PORT}`));
});

server.use(express.urlencoded({ extended: false }));

server.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

server.use(express.static('styles'));

server.use(methodOverride('_method'));

server.get('/', (req, res) => {
  const title = 'Home';
  res.render(createPath('index'), { title });
});

server.use(postRoutes);
server.use(contactRoutes);
server.use(postApiRoutes);

server.use((req, res) => {
  const title = 'Error Page';
  res
    .status(404)
    .render(createPath('error'), { title });
});
