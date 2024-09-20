import React from 'react';
import LoginForm from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginPatient = () => {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    // Handle login logic for patient
    console.log('Patient Login Data:', data);
    // Redirect to patient dashboard upon successful login
    navigate('/patient/dashboard');
  };

  return (
    <div className="container">
      <h2>Patient Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPatient;
