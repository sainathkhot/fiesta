import React from 'react';
import LoginForm from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginInsurance = () => {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    // Handle login logic for insurance
    console.log('Insurance Login Data:', data);
    // Redirect to insurance dashboard upon successful login
    navigate('/insurance/dashboard');
  };

  return (
    <div className="container">
      <h2>Insurance Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginInsurance;
