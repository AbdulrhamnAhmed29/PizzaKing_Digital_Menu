

import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './api/config/queryClient';
import  Home  from './pages/Home';

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Home />
        </QueryClientProvider>
    );
};

export default App;
