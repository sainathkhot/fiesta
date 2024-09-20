// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginHospital from './pages/Hospital/Login';
import RegisterHospital from './pages/Hospital/Register';
import DashboardHospital from './pages/Hospital/Dashboard';
import LoginInsurance from './pages/Insurance/Login';
import RegisterInsurance from './pages/Insurance/Register';
import DashboardInsurance from './pages/Insurance/Dashboard';
import LoginPatient from './pages/Patient/Login';
import RegisterPatient from './pages/Patient/Register';
import DashboardPatient from './pages/Patient/Dashboard';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage'; // Importing RegisterPage

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for Hospital */}
        <Route path="/hospital/login" element={<LoginHospital />} />
        <Route path="/hospital/register" element={<RegisterHospital />} />
        <Route path="/hospital/dashboard" element={<DashboardHospital />} />
        
        {/* Define routes for Insurance */}
        <Route path="/insurance/login" element={<LoginInsurance />} />
        <Route path="/insurance/register" element={<RegisterInsurance />} />
        <Route path="/insurance/dashboard" element={<DashboardInsurance />} />
        
        {/* Define routes for Patient */}
        <Route path="/patient/login" element={<LoginPatient />} />
        <Route path="/patient/register" element={<RegisterPatient />} />
        <Route path="/patient/dashboard" element={<DashboardPatient />} />
        
        {/* Landing Page and Registration Page */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} /> {/* RegisterPage route */}
      </Routes>
    </Router>
  );
};

export default App;
