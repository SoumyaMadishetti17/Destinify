const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  attractions: [String], // List of attractions for the destination
  cost: {
    type: String, // Can be 'low', 'medium', or 'high'
    required: true,
  },
  region: {
    type: String, // E.g., "Asia", "Europe"
    required: true,
  },
  imageUrl: String, // Image URL for displaying the destination
});

const Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;

