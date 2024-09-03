import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// Import the CSS file

const Dashboard = () => {
    const [counts, setCounts] = useState({ countToday: 0, countMonth: 0 });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const response = await axios.get('https://urlshortenerbe-14.onrender.com/api/url/counts');
                setCounts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching counts:', error);
                setLoading(false);
            }
        };

        fetchCounts();
    }, []);

    if (loading) {
        return <div className="dashboard-container">Loading...</div>;
    }

    return (
        <div className="dashboard">
            <h1>URL Shortener Dashboard</h1>
            <div className="dashboard-container">
                <div className="counts">
                    <div className="count-today">
                        <h2>URLs Created Today:</h2>
                        <p>{counts.countToday}</p>
                    </div>
                    <div className="count-month">
                        <h2>URLs Created This Month:</h2>
                        <p>{counts.countMonth}</p>
                    </div>
                </div>
                <Link to="/create-url">
                    <button className="create-url-button">Create URL</button>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
