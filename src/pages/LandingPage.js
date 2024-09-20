// src/pages/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="containerlan">
      <h1>Welcome to AYS Hospital</h1>

      {/* Login Section */}
      <div className="login-section">
        <h2>Login</h2>
        <Link to="/hospital/login">Login as Hospital</Link>
        <br />
        <Link to="/insurance/login">Login as Insurance</Link>
        <br />
        <Link to="/patient/login">Login as Patient</Link>
      </div>

      {/* Registration Prompt */}
      <div className="register-prompt">
        <p>New member?</p>
        {/* Register text styled as a link, not a button */}
        <Link to="/register" className="register-link">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
