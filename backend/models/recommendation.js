const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // User to whom the recommendations belong
    required: true,
  },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination', // Recommended destination
    required: true,
  },
  score: {
    type: Number, // Score or relevance of the recommendation based on user preferences
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Recommendation = mongoose.model('Recommendation', recommendationSchema);
module.exports = Recommendation;

