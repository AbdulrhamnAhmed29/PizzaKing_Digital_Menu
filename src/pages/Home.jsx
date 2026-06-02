// ========================================
// ShowProducts Feature - Main Container
// Feature wrapper with all product display logic
// ========================================

import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CategoryFilter from '../components/menu/CategoryFilter';
import MenuContent from '../components/menu/MenuSections';
import { useMenuSections } from '../features/Products/hooks/useProductsQueries';
import RoyalAnnouncement from '../features/glopalOffers/components/RoyalAnnouncement';
import { CATEGORIES } from '../config/constants';

/**
 * ShowProducts Feature Component
 * Main container for product display with React Query integration
 */
const ShowProductsContainer = () => {
    const { Sections, isLoading, isError, error } = useMenuSections();
    // State management for selected category with session storage persistence
    const [selectedCategory, setSelectedCategory] = useState(CATEGORIES.BEST_SELLER);
    return (
        <div dir="rtl" className="min-h-screen bg-[#050501]  px-5 font-['Cairo'] text-white selection:bg-amber-500/30">
            <div className="max-w-[800px] md:max-w-[800px] mx-auto space-y-2">
                {/* Header Component */}
                <Header />
                {/* Category Filter Component */}
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
                {/* Menu Display Component */}
                <MenuContent
                    selectedCategory={selectedCategory}
                    Sections={Sections}
                    isLoading={isLoading}
                    isError={isError}
                    error={error}
                />
                {/* Footer Component */}
                <Footer />
                <RoyalAnnouncement />
            </div>
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap');
                body { 
                    background-color: #050505;
                    -ms-overflow-style: none;
                }
                ::-webkit-scrollbar { display: none; }
                html { -webkit-font-smoothing: antialiased; }
            `}</style>
        </div>
    );
};
export default ShowProductsContainer;
