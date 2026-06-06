import { useState, useEffect } from 'react';
import MenuItem from './SeactionsContent';
import { usePriceUpdates } from '../../features/priceUpdates/hook';
import SubCategoryFilter from './SeactionsFilter';

const MenuDisplay = ({ Sections, isLoading, isError, error, selectedCategory }) => {
    const [selectedSection, setSelectedSection] = useState("الكل");
    const { multiplier, getFinalPrice } = usePriceUpdates();
    const sectionsData = Sections?.data || [];
    const sortedSections = sectionsData.sort((a, b) => a.Order - b.Order);

    // category filter 
    const filteredByCategory = selectedCategory
        ? sortedSections.filter(section =>
            section.category?.Name === selectedCategory
        )
        : sortedSections;

    const uniqueSections = Array.from(
        new Set(filteredByCategory.map(section => section.Name))
    ).sort();

    // ____________________
    // sub catrgoty (sections) filtration 
    const filteredSections = selectedSection && selectedSection !== "الكل"
        ? filteredByCategory.filter(section => section.Name === selectedSection)
        : filteredByCategory;

    useEffect(() => {
        if (selectedSection === null || selectedSection === "الكل") {
            sessionStorage.removeItem('selectedSection');
        } else {
            sessionStorage.setItem('selectedSection', selectedSection);
        }
    }, [selectedSection]);

    useEffect(() => {
        setSelectedSection("الكل");
    }, [selectedCategory]);
    // ___________________________________

    if (isLoading) return <div className="text-center text-amber-500 py-20 font-black animate-pulse">LOADING PIZZA KING...</div>;
    if (isError) return <div className="text-center text-red-500 py-20">Error: {error?.message}</div>;

    return (
        sectionsData.length === 0 ? (
            <div >
                <div className="p-12 text-center border border-white/[0.06] bg-gradient-to-b from-zinc-900/20 to-zinc-950/40 backdrop-blur-md shadow-2xl  rounded-lg text-zinc-500 text-sm">
                    لا توجد أقسام مضافة حالياً. ابدأ بإضافة أول قسم للمنيو!
                </div>
            </div>
        ) : (
            <>
                <div className="space-y-10 mt-10 pb-20">
                    {/* sub category (sections) */}
                    <div className='sticky top-14 z-20'>
                        <SubCategoryFilter
                            uniqueSections={uniqueSections}
                            selectedSection={selectedSection}
                            setSelectedSection={setSelectedSection}
                        />
                    </div>
                    {/* Sections */}

                    {
                        filteredSections.map((section) => (
                            <div key={section.id} className="w-full mx-auto space-y-10">
                                {/* MenuItem */}
                                <MenuItem
                                    section={section}
                                    multiplier={multiplier}
                                    getFinalPrice={getFinalPrice}
                                />
                            </div>
                        ))
                    }
                </div>
            </>
        )
    );
};

export default MenuDisplay;