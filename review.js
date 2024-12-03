const mongoose = require('mongoose');

// Define a review schema
const reviewSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  message: String,
  image: String,
});

// Create a model for the review schema
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
