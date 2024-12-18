const mongoose = require('mongoose');

const trendingSchema = new mongoose.Schema({
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination', // Trending destination
    required: true,
  },
  events: [String], // Events or festivals happening at the destination
  popularity: {
    type: Number, // Popularity score or index
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Trending = mongoose.model('Trending', trendingSchema);
module.exports = Trending;
