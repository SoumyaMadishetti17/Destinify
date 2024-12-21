const express = require('express');
const router = express.Router();
const UserPreference = require('../models/userPreference');
const Destination = require('../models/destination');

// Helper function to calculate the season
const getSeason = (date) => {
  const month = new Date(date).getMonth() + 1; // 1-based month
  if (month >= 3 && month <= 5) return 'Spring';
  if (month >= 6 && month <= 8) return 'Summer';
  if (month >= 9 && month <= 11) return 'Autumn';
  return 'Winter';
};

// Save user preferences
router.post('/', async (req, res) => {
  try {
    const { userId, country, city, destinationType, budget, preferredDate, travelWay } = req.body;

    if (!userId || !country || !destinationType || !budget || !preferredDate || !travelWay) {
      return res.status(400).json({ message: 'All required fields must be filled' });
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
    res.status(201).json({ message: 'Preferences saved successfully', data: savedPreference });
  } catch (error) {
    console.error('Error saving preferences:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Suggest destinations
router.get('/suggestions', async (req, res) => {
    try {
      const { userId } = req.query;
  
      // Retrieve preferences for the user
      const preferences = await UserPreference.findOne({ userId });
      if (!preferences) {
        return res.status(404).json({ message: 'Preferences not found for this user' });
      }
  
      const { country, destinationType, budget, preferredDate } = preferences;
  
      // Ensure destinationType is always an array
      const destinationTypes = Array.isArray(destinationType) ? destinationType : [destinationType];
  
      // Check if preferredDate is valid
      const date = new Date(preferredDate);
      if (isNaN(date)) {
        return res.status(400).json({ message: 'Invalid preferred date' });
      }
  
      // Convert budget to a number (it might be a string in the database)
      const numericBudget = Number(budget);
      if (isNaN(numericBudget)) {
        return res.status(400).json({ message: 'Invalid budget value' });
      }
  
      // Log the user preferences and query parameters for debugging
      console.log('User Preferences:', preferences);
      console.log('Destination Types:', destinationTypes);
      console.log('Budget:', numericBudget);
  
      // Query destinations with cities
      const destinations = await Destination.find({
        country: { $regex: new RegExp(country.trim(), 'i') },  // Case-insensitive search and trimming
      });
  
      // Filter cities within the destinations that match the user preferences
      const suggestions = destinations
        .map((destination) => {
          // Ensure the 'cities' field exists in the destination
          if (!destination.cities) {
            return null; // Skip this destination if no cities are defined
          }
  
          // Filter cities in each destination that match the user's destination type and budget
          const matchingCities = destination.cities.filter((city) => {
            return (
              city.destinationType.some((type) => destinationTypes.includes(type)) &&
              Number(city.budget) <= numericBudget // Convert city budget to number if necessary
            );
          });
  
          // If matching cities exist, add the country and city data to the result
          if (matchingCities.length) {
            return {
              country: destination.country,
              cities: matchingCities,
            };
          }
          return null; // No matching cities for this destination
        })
        .filter((destination) => destination !== null); // Remove any null entries
  
      // Handle case where no suggestions are found
      if (!suggestions.length) {
        return res.status(404).json({ message: 'No destinations match your preferences' });
      }
  
      // Calculate the season
      const season = getSeason(preferredDate);
  
      // Return suggestions with the season
      res.json({ message: 'Suggestions fetched successfully', season, suggestions });
    } catch (error) {
      console.error('Error fetching suggestions:', error.message);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  module.exports = router;