import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ExampleComponent from '../components/ExampleComponent';
import { HomePage } from '../pages/HomePage/HomePage';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup'
import DestinationPage from '../pages/DestinationPage/DestinationPage';
import DestinationDetails from '../pages/DestinationDetails/DestinationDetails';


const selectedDestination = {
  city: "Delhi",
  country: "India",
  description: "The capital city, known for its mix of modernity and ancient landmarks.",
  budget: 800,
  travelWay: "Flight",
  preferredDate: "2024-12-25",
  imageUrl: "https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.jpg?s=1024x1024&w=is&k=20&c=RQ-Qi7KqzmC4XWsWibcy7--3lHyNb0hJWyAZkDCXxNM=",
};

const AppRoutes = () => (

  
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/destinationDetails" element={<DestinationDetails destination={selectedDestination}/>} />
      
    </Routes>
  </Router>
);

export default AppRoutes;


// 