import React, { useState } from 'react';
import axios from 'axios';
 // Import the CSS file

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Clear previous errors
        try {
            const response = await axios.post('http://localhost:5000/api/auth/forgot-password', { email });
            setMessage(response.data.message);
        } catch (err) {
            console.error('Error sending forgot password request:', err);
            setError('Failed to send reset password email');
        }
    };

    return (
        <div className="forgot-password-page">
            <h1 className="forgot-password-title">Forgot Password</h1>
            <div className="forgot-password-container">
                <form onSubmit={handleSubmit} className="forgot-password-form">
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <button type="submit" className="forgot-password-button">Reset Password</button>
                </form>
            </div>
            {message && <div className="message alert alert-success">{message}</div>}
            {error && <div className="error-message alert alert-danger">{error}</div>}
        </div>
    );
};

export default ForgotPassword;
