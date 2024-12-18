import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ExampleComponent from '../components/ExampleComponent';
import { HomePage } from '../pages/HomePage/HomePage';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/example" element={<ExampleComponent />} /> */}
    </Routes>
  </Router>
);

export default AppRoutes;
