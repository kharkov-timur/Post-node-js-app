const Pizza = require('../models/pizza');

const handleError = (res, error) => {
  res.status(500).send(error.message);
}

const getPizzas = (req, res) => {
  Pizza
    .find()
    .sort({ createdAt: -1 })
    .then((pizzas) => res.status(200).json(pizzas))
    .catch((error) => handleError(res, error));
}


module.exports = {
  getPizzas,
};
