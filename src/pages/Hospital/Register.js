import React, { useState } from 'react';
import RegisterForm from '../../components/RegisterForm';
import { useNavigate } from 'react-router-dom';

const RegisterHospital = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    // Handle registration logic for hospital
    console.log('Hospital Register Data:', data);
    setIsRegistered(true); // Set registration complete state
  };

  if (isRegistered) {
    return (
      <div className="container">
        <h2>Registration Complete</h2>
        <p>Your registration as a Hospital is successful✔.</p>
        <button onClick={() => navigate('/')}>Go Back to Landing Page and Login</button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Hospital Registration</h2>
      <RegisterForm onSubmit={handleRegister} />
    </div>
  );
};

export default RegisterHospital;
