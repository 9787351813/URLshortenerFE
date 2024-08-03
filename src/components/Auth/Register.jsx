import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
    };
    console.log('Request Data:', requestData);

    try {
        const response = await axios.post('http://localhost:5000/api/register', requestData);
        console.log('Registration successful:', response.data);
        // Redirect to login page after successful registration
        navigate('/login');
    } catch (error) {
        console.error('Registration error:', error);
        setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <h1 className="register-title">Register</h1>
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={formData.firstName} 
              onChange={handleChange} 
              autoComplete="given-name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={formData.lastName} 
              onChange={handleChange} 
              autoComplete="family-name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              autoComplete="email" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              autoComplete="new-password" 
              required 
            />
          </div>
          <button type="submit" className="register-button">Register</button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default Register;
