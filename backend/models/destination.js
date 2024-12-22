const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  country: String,
  city: [String],
  description: String,
  attractions: [String],
  budget: Number,
  destinationType: [String], // E.g., ["mountains", "beaches", "cafes"]
  weather: String, // E.g., "cold", "warm"
});

// Make sure the collection name matches your MongoDB Atlas collection
module.exports = mongoose.model('Destination', destinationSchema, 'destinations');



