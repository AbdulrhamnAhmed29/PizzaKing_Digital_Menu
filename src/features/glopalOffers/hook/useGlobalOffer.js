import { useQuery } from "@tanstack/react-query"
import { fetchGlopalOffers } from "../services/globalOfferServices";

export const useGlopalOffers = () => {

    const myOffer = useQuery({
        queryKey: ['glopalOffers'],
        queryFn:  fetchGlopalOffers,
    });
    return {
        glopalOffer: myOffer.data,
        isLoading: myOffer.isLoading,
        isError: myOffer.isError,
        error: myOffer.error,
    }
}