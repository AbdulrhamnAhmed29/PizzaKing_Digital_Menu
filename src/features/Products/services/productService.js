// ========================================
// showProducts Feature - Services
// API calls for products feature using baseApi
// ========================================
import { getRequest } from '../../../api/baseApi';
/**
 * Fetch all menu sections
 * @returns {Promise} - Products data
 */
export const fetchSections =  () => {  
    return getRequest('menu-sections?populate[category][populate]=*&populate[products][populate][prices][populate][products_size]=*&populate[products][populate][Image]=true&populate[price_offers][populate][offers]=*&populate[priceOfCompo][populate][compo_offers]=*');
};