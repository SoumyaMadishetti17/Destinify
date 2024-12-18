const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  preferences: {
    type: Object, // Stores user preferences such as interests, budget, travel style, etc.
    default: {},
  },
  travelHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Destination', // Reference to destination model
    },
  ],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
