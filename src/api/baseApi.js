// ========================================
// Base API Configuration
// Global API functions for all features
// ========================================

import axiosInstance from './config/axiosInstance';

/**
 * Global GET request function
 * @param {string} endpoint - API endpoint (relative to baseURL)
 * @param {object} config - Additional axios config (params, headers, etc.)
 * @returns {Promise} - API response promise
 */
export const getRequest = async (endpoint, config = {}) => {
    const response = await axiosInstance.get(endpoint, config);
    return response.data;

};


export default axiosInstance;
