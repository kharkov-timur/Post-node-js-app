const Pizza = require('../models/pizza');

const handleError = (res, error) => {
  res.status(500).send(error.message);
};

const getPizzas = (req, res) => {
  const { category, sort } = req.query;

  const sortBy = () => {
    switch (sort) {
      case 'name':
        return { name: 1 };
        break;
      case 'price':
        return { price: -1 };
        break;
      default:
        return { rating: -1 };
    }
  };

  Pizza.find(category && { category: +category })
    .sort(sortBy())
    .then((pizzas) => res.status(200).json(pizzas))
    .catch((error) => handleError(res, error));
};

module.exports = {
  getPizzas,
};
