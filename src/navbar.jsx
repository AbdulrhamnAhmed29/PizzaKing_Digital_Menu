import React, { useState, useEffect } from 'react';
function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // تأثير لتغيير شكل الناف بار عند السكرول
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav 
            dir="rtl" 
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
                scrolled ? 'py-2' : 'py-4'
            }`}
        >
            <div className={`mx-4 md:mx-12 transition-all duration-500 border border-white/10 rounded-[1.5rem] shadow-2xl overflow-hidden
                ${scrolled 
                    ? 'bg-black/80 backdrop-blur-xl shadow-amber-500/5' 
                    : 'bg-black/40 backdrop-blur-md'
                }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 py-3 flex justify-between items-center">
                    
                    {/* الجانب الأيمن: اللوجو والهوية */}
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="relative">
                            <img 
                                src="/image/logo.png" 
                                className={`transition-all duration-500 ${scrolled ? 'w-12' : 'w-16'}`} 
                                alt="Pizza King Logo" 
                            />
                            {/* إضاءة خلف اللوجو */}
                            <div className="absolute inset-0 bg-amber-500/20 blur-2xl rounded-full -z-10 group-hover:bg-amber-500/40 transition-all"></div>
                        </div>

                        <div className="hidden md:block">
                            <h1 className="text-white font-black text-xl leading-none tracking-tight">
                                بيتزا <span className="text-amber-500">كينج</span>
                            </h1>
                            <p className="text-[9px] text-zinc-500 font-bold uppercase tracking-[3px] mt-1">
                                أصل البيتزا في مصر
                            </p>
                        </div>
                    </div>

    

                </div>
            </div>
        </nav>
    );
}

export default Navbar;