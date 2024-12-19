const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  country: { type: String, required: true },
  cities: [
    {
      city: { type: String, required: true },
      description: { type: String, required: true },
      attractions: [String]
    }
  ]
});

module.exports = mongoose.model('Country', CountrySchema);
