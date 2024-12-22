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
    default: null,
  },
  destinationType: {
    type: [String], // E.g., ["mountains", "beaches"]
    default: [],
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
    type: String,
    default: null, 
  },
});


module.exports = mongoose.model('UserPreference', userPreferenceSchema);
