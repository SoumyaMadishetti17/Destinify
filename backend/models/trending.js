const mongoose = require('mongoose');

const TrendingDestinationSchema = new mongoose.Schema({
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination', required: true },
  trendReason: { type: String },
  activeSeason: { type: String }, // Example: Summer, Winter, etc.
  popularityScore: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('TrendingDestination', TrendingDestinationSchema);
