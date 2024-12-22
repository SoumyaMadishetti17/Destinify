const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const UserPreference = require('../models/userPreference'); // Retain this for saving preferences

// Path to the JSON file
const countriesDataPath = path.join(__dirname, '../data/countriesData.json');

// Helper function to calculate the season
const getSeason = (date) => {
  const month = new Date(date).getMonth() + 1; // 1-based month
  if (month >= 3 && month <= 5) return 'Spring';
  if (month >= 6 && month <= 8) return 'Summer';
  if (month >= 9 && month <= 11) return 'Autumn';
  return 'Winter';
};

// Save a single user preference
router.post('/', async (req, res) => {
  try {
    console.log('Request body:', req.body); // Log the request body for debugging

    const { userId, country, city, destinationType, budget, preferredDate, travelWay } = req.body;

    if (!userId || !country || !budget || !preferredDate || !destinationType) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const preference = new UserPreference({
      userId,
      country,
      city,
      destinationType,
      budget,
      preferredDate,
      travelWay,
    });

    const savedPreference = await preference.save();
    res.status(201).json({ message: 'Preference saved successfully', data: savedPreference });
  } catch (error) {
    console.error('Error saving preference:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});




router.get('/suggestions', async (req, res) => {
  try {
    const { userId } = req.query;

    // Fetch user preferences
    const preferences = await UserPreference.findOne({ userId });
    if (!preferences) {
      return res.status(404).json({ message: 'Preferences not found for this user' });
    }

    const { country, city, destinationType, budget } = preferences;
    const destinationTypes = Array.isArray(destinationType) ? destinationType.map((type) => type.toLowerCase()) : [];

    // Load JSON data
    const countriesData = JSON.parse(fs.readFileSync(countriesDataPath, 'utf-8'));

    console.log('Countries Data:', countriesData);

    // Filter suggestions based on preferences
    const suggestions = [];

    countriesData.forEach((destination) => {
      if (destination.country.toLowerCase() === country.toLowerCase()) {
        destination.cities.forEach((cityData) => {
          const cityNameMatches = !city || city.trim().toLowerCase() === cityData.city.trim().toLowerCase();

          const cityBudget = Number(cityData.budget);
          const userBudget = Number(budget);
          const budgetMatches = !isNaN(cityBudget) && cityBudget <= userBudget;

          const typeMatches =
            destinationTypes.length === 0 ||
            cityData.destinationType.some((type) => destinationTypes.includes(type.toLowerCase()));

          if (cityNameMatches && budgetMatches && typeMatches) {
            suggestions.push({
              country: destination.country,
              city: cityData.city,
              budget: cityBudget,
              destinationType: cityData.destinationType,
              season: cityData.season,
              attractions: cityData.attractions,
            });
          }
        });
      }
    });

    if (suggestions.length === 0) {
      return res.status(404).json({ message: 'No destinations match your preferences' });
    }

    res.status(200).json({ message: 'Suggestions fetched successfully', suggestions });
  } catch (error) {
    console.error('Error fetching suggestions:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

