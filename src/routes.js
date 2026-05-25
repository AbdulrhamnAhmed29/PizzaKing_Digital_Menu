// ========================================
// Application Routes
// Centralized route configuration
// ========================================

/**
 * Application Routes Configuration
 * Define all routes for the application here
 */

const routes = {
    // Public Routes
    HOME: '/',
    MENU: '/menu',
    PRODUCTS: '/products',
    PRODUCT_DETAIL: '/products/:id',
    CATEGORY: '/category/:categoryName',
    SEARCH: '/search',
    ABOUT: '/about',
    CONTACT: '/contact',
    
    // Auth Routes
    LOGIN: '/login',
    REGISTER: '/register',
    FORGOT_PASSWORD: '/forgot-password',
    RESET_PASSWORD: '/reset-password/:token',
    
    // User Routes
    PROFILE: '/profile',
    MY_ORDERS: '/my-orders',
    MY_ADDRESSES: '/my-addresses',
    
    // Admin Routes
    ADMIN: '/admin',
    ADMIN_PRODUCTS: '/admin/products',
    ADMIN_CATEGORIES: '/admin/categories',
    ADMIN_ORDERS: '/admin/orders',
    ADMIN_USERS: '/admin/users',
    
    // Not Found
    NOT_FOUND: '*',
};

export default routes;
