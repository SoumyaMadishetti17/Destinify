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
    const { userId, country, city, destinationType, budget, preferredDate, travelWay } = req.body;

    if (!userId || !country || !destinationType || !budget || !preferredDate || !travelWay) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    // Create and save the new preference
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

// Fetch suggestions based on JSON file
router.get('/suggestions', async (req, res) => {
    try {
      const { userId } = req.query;
  
      // Fetch user preferences from the database
      const preferences = await UserPreference.findOne({ userId });
      if (!preferences) {
        return res.status(404).json({ message: 'Preferences not found for this user' });
      }
  
      const { country, city, destinationType, budget } = preferences;
      const destinationTypes = Array.isArray(destinationType) ? destinationType : [destinationType];
  
      // Load JSON file
      const countriesData = JSON.parse(fs.readFileSync(countriesDataPath, 'utf-8'));
  
      // Filter suggestions based on user preferences
      const suggestions = [];
      const matchingCountries = countriesData.filter(
        (item) => item.country.toLowerCase() === country.toLowerCase()
      );
  
      if (!matchingCountries.length) {
        return res.status(404).json({ message: 'No destinations found for this country' });
      }
  
      matchingCountries.forEach((destination) => {
        if (!destination.cities || !Array.isArray(destination.cities) || destination.cities.length === 0) {
          console.warn(`Skipping ${destination.country}: Invalid or missing cities.`);
          return;
        }
  
        destination.cities.forEach((cityData) => {
          const isCityMatching = !city || cityData.city.toLowerCase() === city.toLowerCase();
          const cityBudget = Number(cityData.budget);
          const userBudget = Number(budget);
  
          // Ensure the city budget is less than or equal to the user's budget
          const isBudgetMatching = !isNaN(cityBudget) && cityBudget <= userBudget;
  
          // Ensure at least one destination type matches
          const isTypeMatching = cityData.destinationType.some((type) =>
            destinationTypes.map((prefType) => prefType.toLowerCase()).includes(type.toLowerCase())
          );
  
          // Add city to suggestions only if all conditions are met
          if (isCityMatching && isBudgetMatching && isTypeMatching) {
            suggestions.push({
              country: destination.country,
              city: cityData.city,
              budget: cityBudget,
              destinationType: cityData.destinationType,
            });
          }
        });
      });
  
      if (!suggestions.length) {
        return res.status(404).json({ message: 'No destinations match your preferences' });
      }
  
      res.status(200).json({ message: 'Suggestions fetched successfully', suggestions });
    } catch (error) {
      console.error('Error fetching suggestions:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;

  
