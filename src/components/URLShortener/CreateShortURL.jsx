import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the CSS file

const CreateShortURL = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null); // Clear previous errors
        try {
            const response = await axios.post('https://urlshortenerbe-14.onrender.com/api/url/shorten', { longUrl });
            setShortUrl(`https://shorturl.at/${response.data.shortUrl}`);
        } catch (err) {
            setError('Failed to create short URL');
        }
    };

    const handleShowTable = () => {
        navigate('/urls');
    };

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">Create Short URL</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={longUrl}
                                onChange={(e) => setLongUrl(e.target.value)}
                                placeholder="Enter long URL"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Shorten URL</button>
                    </form>
                    {shortUrl && <p className="mt-3">Short URL: <a href={shortUrl}>{shortUrl}</a></p>}
                    {error && <p className="mt-3 text-danger">{error}</p>}
                    <button className="btn btn-secondary mt-3" onClick={handleShowTable}>Show Table</button>
                </div>
            </div>
        </div>
    );
};

export default CreateShortURL;
