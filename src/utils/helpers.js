// ========================================
// Utilities File
// Helper Functions
// (دوال مساعدة للعمليات الحسابية والمنطق)
// ========================================

import { PRICE_GROUPS, PRICE_THRESHOLDS } from '../config/constants';

/**
 * حساب متوسط السعر لعنصر
 * @param {Object} item - عنصر المنتج
 * @returns {number} متوسط السعر
 */
export const getAveragePrice = (item) => {
  const prices = Object.values(item.basePrices);
  return prices.reduce((a, b) => a + b, 0) / prices.length;
};

/**
 * تحديد مجموعة السعر للعنصر
 * @param {number} averagePrice - متوسط السعر
 * @returns {string} اسم مجموعة السعر
 */
export const getPriceGroup = (averagePrice) => {
  if (averagePrice <= PRICE_THRESHOLDS.ECONOMIC_MAX) return PRICE_GROUPS.ECONOMIC;
  if (averagePrice <= PRICE_THRESHOLDS.STANDARD_MAX) return PRICE_GROUPS.STANDARD;
  return PRICE_GROUPS.PREMIUM;
};

/**
 * تجميع العناصر حسب الأقسام
 * @param {Array} items - قائمة العناصر
 * @returns {Object} العناصر منظمة حسب الأقسام
 */
export const groupBySection = (items) => {
  return items.reduce((grouped, item) => {
    const section = item.section || 'عام';
    if (!grouped[section]) {
      grouped[section] = [];
    }
    grouped[section].push(item);
    return grouped;
  }, {});
};

/**
 * الحصول على قائمة الأقسام
 * @param {Object} groupedItems - العناصر المجمعة حسب الأقسام
 * @returns {Array} قائمة الأقسام
 */
export const getSections = (groupedItems) => {
  return Object.keys(groupedItems);
};

/**
 * @param {Array} fullMenuData 
 * @param {string} activeCategory 
 * @returns {Array}
 */
export const filterMenuByCategory = (fullMenuData, activeCategory) => {
  if (activeCategory === 'الكل') return fullMenuData;
  return fullMenuData.filter(c => c.category === activeCategory);
};

/**
 * @param {Array} fullMenuData 
 * @returns {Array}
 */
export const getCategories = (fullMenuData) => {
  return ['الكل', ...fullMenuData.map(c => c.category)];
};
