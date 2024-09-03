import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
 // Import the CSS file

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post(`https://urlshortenerbe-14.onrender.com/api/auth/reset-password/${token}`, { password });
      setMessage('Password has been successfully reset. You can now log in with your new password.');
      setError('');
    } catch (error) {
      if (error.response && error.response.data.message === 'Invalid or expired token') {
        setError('The token is invalid or has expired. Please request a new password reset link.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="reset-password-page">
      <h1 className="reset-password-title">Reset Password</h1>
      <div className="reset-password-container">
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit} className="reset-password-form">
          <div className="form-group">
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password:</label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reset-password-button btn btn-primary">
            Reset Password
          </button>
        </form>
      </div>
      {message && <div className="alert alert-success reset-password-message">{message}</div>}
    </div>
  );
};

export default ResetPassword;
