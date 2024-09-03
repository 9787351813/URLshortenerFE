import React, { useState, useEffect } from 'react';
import axios from 'axios';
 // Import the CSS file

const URLList = () => {
  const [urls, setUrls] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await axios.get('https://urlshortenerbe-14.onrender.com/api/url/urls');
        console.log('Response data:', response.data); // Debugging log
        if (Array.isArray(response.data)) {
          setUrls(response.data);
        } else {
          setError('Response data is not an array');
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUrls();
  }, []);

  const UrlTable = () => {
    if (!Array.isArray(urls)) {
      return <p>Error: URLs data is not an array</p>;
    }

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th> {/* Updated Header */}
            <th>Long URL</th>
            <th>Short URL</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Display Row Number */}
              <td>{url.longUrl}</td>
              <td>{url.shortUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container mt-4">
      <h2>URL List</h2>
      {error && <p className="text-danger">Error: {error}</p>}
      {!error && <UrlTable />}
    </div>
  );
};

export default URLList;
