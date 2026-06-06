/**
 *
 * @param {Array<{percentage: number, isActive: boolean}>} updates 
 * @returns {number}
 */

// if func not array return 1 
export const calculateTotalMultiplier = (updates) => {
    if (!Array.isArray(updates)) {
        return 1;
    }
    // get sum factor of all active updates 
    return updates
        .filter((update) => update)
        .reduce((accumulator, update) => {
            const percentage = Number(update) || 0;
            const factor = 1 + percentage / 100;
            const Multiplier = accumulator * factor;
            return Multiplier;
        }, 1);
};
/**
 *
 * @param {number} basePrice 
 * @param {number} multiplier
 * @returns {number}
 */
export const formatFinalPrice = (basePrice, multiplier) => {
    const price = Number(basePrice) * Number(multiplier);

    return Math.round(price || 0);
};
