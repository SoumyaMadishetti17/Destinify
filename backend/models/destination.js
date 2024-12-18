const mongoose = require('mongoose');

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true }
  },
  images: [String], 
  keyAttractions: [String],
  activities: [String],
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
}, { timestamps: true });

module.exports = mongoose.model('Destination', DestinationSchema);
