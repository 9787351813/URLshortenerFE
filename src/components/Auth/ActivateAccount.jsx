import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ActivateAccount = () => {
    const { token } = useParams();
    const [message, setMessage] = useState('');

    useEffect(() => {
        const activateAccount = async () => {
            try {
                const response = await axios.get(`/api/auth/activate/${token}`);
                setMessage(response.data.message);
            } catch (error) {
                setMessage(error.response.data.message);
            }
        };

        activateAccount();
    }, [token]);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Account Activation</h2>
            {message && <p className="alert alert-info">{message}</p>}
        </div>
    );
};

export default ActivateAccount;
