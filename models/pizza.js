const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pizzasSchema = new Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  types: {
    type: [Number],
    required: true,
  },
  sizes: {
    type: [Number],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

const Pizza = mongoose.model('Pizza', pizzasSchema);
module.exports = Pizza;
