const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  destinations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Destination', // List of destinations included in the itinerary
    },
  ],
  dates: {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
  activities: [String], // Activities planned during the itinerary (e.g., sightseeing, dining)
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Itinerary = mongoose.model('Itinerary', itinerarySchema);
module.exports = Itinerary;

