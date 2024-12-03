const mongoose = require('mongoose');

// Define a car schema
const carSchema = new mongoose.Schema({
  year: Number,
  name: String,
  price: String,
  monthlyRent: String,
  image: String,
});

// Create a model for the car schema
const Car = mongoose.model('Car', carSchema);

module.exports = Car;
