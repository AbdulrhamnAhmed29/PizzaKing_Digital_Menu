import { useQuery } from "@tanstack/react-query"
import { fetchSections } from "../services/productService"

export const useMenuSections = () => {
    const mySection = useQuery({
        queryKey: ['menuSections'],
        queryFn: fetchSections,
        
    });
    return {
        Sections: mySection.data,
        isLoading: mySection.isLoading,
        isError: mySection.isError,
        error: mySection.error,
    }
}