import { useQuery } from "@tanstack/react-query";
import { fetchNewPrice } from "./services";
import { calculateTotalMultiplier, formatFinalPrice } from "../../utils/priceHelpers";

export const usePriceUpdates = () => {
    const price_update = useQuery({
        queryKey: ['priceUpdate'],
        queryFn: fetchNewPrice,
    });
    const rawUpdates = price_update.data ?? [];
    const updates =rawUpdates.map((item) => item?.percentage)     
    const multiplier = calculateTotalMultiplier(updates);

    return {
        newPrice: price_update.data,
        multiplier,
        getFinalPrice: (basePrice) => formatFinalPrice(basePrice, multiplier),
        isLoading: price_update.isLoading,
        isError: price_update.isError,
        error: price_update.error,
    };
};