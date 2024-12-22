const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Load countries data from JSON file
const countriesDataPath = path.join(__dirname, '../data/countriesData.json'); // Adjust the path as needed

router.get('/', async (req, res) => {
  try {
    const { country } = req.query;
    if (!country) {
      return res.status(400).json({ message: 'Country is required' });
    }

    // Load JSON file
    const countriesData = JSON.parse(fs.readFileSync(countriesDataPath, 'utf-8'));

    // Filter data by country (case-insensitive match)
    const filteredCountries = countriesData.filter(
      (item) => item.country.toLowerCase() === country.toLowerCase()
    );

    if (filteredCountries.length === 0) {
      return res.status(404).json({ message: 'No destinations found' });
    }

    // Format the result
    const result = filteredCountries.map((countryData) => {
      return {
        country: countryData.country,
        cities: countryData.cities.map((city) => ({
          city: city.city,
          description: city.description,
          destinationType: city.destinationType,
          budget: city.budget,
          season: city.season,
          attractions: city.attractions,
        })),
      };
    });

    res.json(result);
  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
