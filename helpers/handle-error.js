import chalk from 'chalk';

import createPath from '../helpers/create-path.js';

const successMsg = (msg) => {
  console.log(chalk.bgGreenBright(msg));
};

const errorMsg = (msg) => {
  console.log(chalk.bgRedBright(msg));
};

const handleError = (res, err) => {
  errorMsg(err);
  res.render(createPath('error'), { title: 'Error' });
};

const unexpectedError = (res, err) => {
  errorMsg(err);
  res.status(500).send(err.message);
};

export { errorMsg, successMsg, handleError, unexpectedError };
