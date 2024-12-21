const mongoose = require('mongoose');

const userPreferenceSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: false,
  },
  destinationType: {
    type: [String], // E.g., ["mountains", "beaches", "cafes"]
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  preferredDate: {
    type: Date,
    required: true,
  },
  travelWay: {
    type: String, // E.g., "Car", "Flight", "Train"
    required: true,
  },
});

module.exports = mongoose.model('UserPreference', userPreferenceSchema);
