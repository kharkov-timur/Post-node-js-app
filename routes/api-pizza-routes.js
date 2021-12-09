const express = require('express');

const { getPizzas } = require('../controllers/api-pizza-controller');


const router = express.Router();

// Get All Posts
router.get('/api/pizzas', getPizzas);

module.exports = router;
