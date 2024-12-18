const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: {
    interests: [String],
    budget: { type: Number },
    travelStyle: [String],
    activities: [String]
  },
  travelHistory: [{
    destinationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
    visitDate: { type: Date }
  }],
  savedItineraries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
