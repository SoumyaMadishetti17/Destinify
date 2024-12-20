import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ExampleComponent from '../components/ExampleComponent';
import { HomePage } from '../pages/HomePage/HomePage';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup'
import DestinationPage from '../pages/DestinationPage/DestinationPage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/destination" element={<DestinationPage />} />
      <Route path="/signup" element={<Signup />} />
      
    </Routes>
  </Router>
);

export default AppRoutes;


// 