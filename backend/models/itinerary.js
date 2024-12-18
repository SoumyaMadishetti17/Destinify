const mongoose = require('mongoose');

const ItinerarySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  destinations: [{
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    day: { type: Number },
    activities: [String]
  }],
  startDate: { type: Date },
  endDate: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Itinerary', ItinerarySchema);
