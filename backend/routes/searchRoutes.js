const express = require('express');
const router = express.Router();
const Destination = require('../models/destination'); 

router.get('/', async (req, res) => { 
  try {
    const { country } = req.query; 
    if (!country) {
      return res.status(400).json({ message: 'Country is required' });
    }

    const destinations = await Destination.find({
      country: { $regex: country, $options: 'i' }, 
    });

    if (!destinations || destinations.length === 0) {
      return res.status(404).json({ message: 'No destinations found' });
    }

    const citiesGroupedByCountry = destinations.reduce((acc, destination) => {
      if (!acc[destination.country]) {
        acc[destination.country] = [];
      }
      acc[destination.country].push(destination);
      return acc;
    }, {});

    const result = Object.keys(citiesGroupedByCountry).map((countryName) => {
      const cities = citiesGroupedByCountry[countryName];
      return { country: countryName, cities };
    });

    res.json(result);
  } catch (error) {
    console.error('Server Error:', error); 
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

