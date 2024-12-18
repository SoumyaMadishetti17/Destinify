const mongoose = require('mongoose');

const RecommendationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  recommendedDestinations: [{
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    reason: { type: String }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Recommendation', RecommendationSchema);
