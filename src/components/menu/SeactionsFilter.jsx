import React from 'react'

function SubCategoryFilter({uniqueSections ,selectedSection ,setSelectedSection}) {
    return (
        <div className='hidden'>
            {/* Section Filter Bar */}
            {uniqueSections.length > 0 && (
                <div className=" w-full">
                    <div className="backdrop-blur-3xl p-2 md:p-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
                        <div className="absolute left-1 top-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-90 transition-all duration-700 flex items-center gap-1 hover:scale-110">
                            <span className="text-amber-400 text-[8px] font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">اسحب</span>
                            <div className="flex items-center gap-1 animate-bounce">
                                <div className="w-0 h-0 border-l-[8px] border-l-amber-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]"></div>
                                <div className="w-0 h-0 border-l-[8px] border-l-amber-400/70 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]"></div>
                            </div>
                        </div>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-90 transition-all duration-700 flex items-center gap-1 hover:scale-110">
                            <div className="flex items-center gap-1 animate-bounce" style={{ animationDelay: '0.2s' }}>
                                <div className="w-0 h-0 border-r-[8px] border-r-amber-400/70 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent drop-shadow-[0_0_4px_rgba(245,158,11,0.4)]"></div>
                                <div className="w-0 h-0 border-r-[8px] border-r-amber-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent drop-shadow-[0_0_4px_rgba(245,158,11,0.6)]"></div>
                            </div>
                            <span className="text-amber-400 text-[8px] font-bold tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">اسحب</span>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/60 via-black/20 to-transparent pointer-events-none z-5"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black/60 via-black/20 to-transparent pointer-events-none z-5"></div>
                        <div className="flex items-center gap-3 overflow-x-auto px-2 justify-start md:justify-center" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            {uniqueSections.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => setSelectedSection(section)}
                                    className={`relative shrink-0 px-4 py-2 rounded-lg text-xs font-black tracking-[0.15em] uppercase transition-all duration-500 whitespace-nowrap ${selectedSection === section
                                        ? 'bg-white text-black shadow-[0_10px_20px_rgba(245,158,11,0.3)] scale-105'
                                        : 'bg-white/5 text-stone-400 hover:bg-white/10 hover:text-stone-100 border border-white/5'
                                        }`}
                                >
                                    {section}
                                    {selectedSection === section && (
                                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full animate-pulse"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SubCategoryFilter
