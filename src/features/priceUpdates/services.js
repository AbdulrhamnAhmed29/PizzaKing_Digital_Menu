// ========================================
// showProducts Feature - Services
// API calls for products feature using baseApi
// ========================================

import { getRequest } from '../../api/baseApi';

/**
 * Fetch all menu sections
 * @returns {Promise} - Products data
 */
export const fetchNewPrice = async () => {  
    const {data} = await getRequest('price-updates?populate=*');
    return data;
};