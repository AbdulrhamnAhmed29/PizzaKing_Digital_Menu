// ========================================
// Axios Instance Configuration
// ========================================

import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
// Create axios instance with default config

const axiosInstance = axios.create({
    baseURL: apiUrl || 'http://localhost:1337/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
 


export default axiosInstance;
