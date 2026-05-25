import { useEffect } from 'react';
import { useMenuSections } from "../../features/Products/hooks/useProductsQueries";
import { motion } from 'framer-motion';
import { CATEGORIES } from '../../config/constants';



const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
    const { Sections } = useMenuSections();
    const sectionsData = Sections?.data;
    const uniqueCategories = [];
    const seenNames = new Set();
    sectionsData?.forEach(section => {
        const cat = section.category;
        if (cat?.Name && !seenNames.has(cat.Name)) {
            uniqueCategories.push({
                name: cat.Name,
                order: cat.Order || 0
            });
            seenNames.add(cat.Name);
        }
    });
    const sortedCategoryNames = uniqueCategories
        .sort((a, b) => a.order - b.order)
        .map(cat => cat.name);
    const categories = [...sortedCategoryNames];
    useEffect(() => {
        if (!selectedCategory || selectedCategory === "") {
            setSelectedCategory(CATEGORIES.BEST_SELLER);
        }
    }, [sectionsData, setSelectedCategory, selectedCategory]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    }, [selectedCategory]);
    return (
        <div className="sticky top-6 z-50  w-full mx-auto">
            <div className="relative pb-5 flex justify-center items-center max-w-xl mx-auto">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.6, 1, 0.6],
                        boxShadow: ["0 0 8px #f97316", "0 0 18px #f97316", "0 0 8px #f97316"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute h-1.5 w-1.5 rounded-full bg-white"
                />
            </div>

            <div className="backdrop-blur-3xl border border-white/10 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 md:p-3 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                <div className="flex items-center gap-3 overflow-x-auto px-2 justify-start md:justify-center category-filter-scroll" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {categories.map((category) => {
                        const isActive = selectedCategory === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`relative shrink-0 px-5 py-2 rounded-full text-[10px] md:text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 ${isActive
                                    ? 'bg-gradient-to-br from-stone-500 via-white to-stone-500 text-black shadow-[0_10px_20px_rgba(245,158,11,0.4)] scale-110'
                                    : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-stone-100 border border-white/5'
                                    }`}
                            >
                                {category === CATEGORIES.BEST_SELLER ? (
                                    <span className="flex items-center gap-1">
                                        <span className="text-[12px]">⭐</span> {category}
                                    </span>
                                ) : category}
                                {isActive && (
                                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-black/50 rounded-full blur-[1px]"></span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="relative mt-5 flex justify-center items-center max-w-xl mx-auto">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

                <motion.div
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.6, 1, 0.6],
                        boxShadow: ["0 0 8px #f97316", "0 0 18px #f97316", "0 0 8px #f97316"]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute h-1.5 w-1.5 rounded-full bg-white"
                />
            </div>

        </div>
    );
};

export default CategoryFilter;