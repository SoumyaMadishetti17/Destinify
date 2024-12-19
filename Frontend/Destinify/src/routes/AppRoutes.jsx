import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import ExampleComponent from '../components/ExampleComponent';
import { HomePage } from '../pages/HomePage/HomePage';
import Login from '../components/Login/Login';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default AppRoutes;
