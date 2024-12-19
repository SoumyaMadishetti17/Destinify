// models/Destination.js
const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  country: { type: String, required: true },
  city: { type: String, required: true },
  attractions: { type: [String], default: [] }, 
  description: { type: String, default: '' }, 
});

const Destination = mongoose.model('Destination', destinationSchema);
module.exports = Destination;


