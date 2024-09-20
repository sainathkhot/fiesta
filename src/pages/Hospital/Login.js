import React from 'react';
import LoginForm from '../../components/LoginForm';
import { useNavigate } from 'react-router-dom';

const LoginHospital = () => {
  const navigate = useNavigate();

  const handleLogin = (data) => {
    // Handle login logic for hospital
    console.log('Hospital Login Data:', data);
    // Redirect to hospital dashboard upon successful login
    navigate('/hospital/dashboard');
  };

  return (
    <div className="container">
      <h2>Hospital Login</h2>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginHospital;
