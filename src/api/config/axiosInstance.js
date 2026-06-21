// ========================================
// Axios Instance Configuration
// ========================================

import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
// Create axios instance with default config

const axiosInstance = axios.create({
    baseURL: apiUrl ,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});
 


export default axiosInstance;
