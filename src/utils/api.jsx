// src/utils/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://your-api-base-url.com/api', // Replace with your actual API base URL
    timeout: 10000, // Optional timeout setting
});

export default api;
