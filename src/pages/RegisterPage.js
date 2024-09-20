// src/pages/RegisterPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css'; // Make sure RegisterPage.css is styled similarly to other related pages

const RegisterPage = () => {
  return (
    <div className="container">
      <h1>Register</h1>
      <div className="register-section">
        {/* Updated links to reflect correct registration routes */}
        <Link to="/hospital/register">Register as Hospital</Link>
        <br />
        <Link to="/insurance/register">Register as Insurance</Link>
        <br />
        <Link to="/patient/register">Register as Patient</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
