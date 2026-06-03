// ========================================
// React Query Client Configuration
// Centralized QueryClient setup
// ========================================

import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, 
            gcTime: 10 * 60 * 1000, 
            retry: 1,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            refetchOnMount: true,
        },
        mutations: {
            retry: 1,
        },
    },
});

export default queryClient;
