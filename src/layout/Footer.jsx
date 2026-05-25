import { HiOutlinePhone, HiOutlineGlobeAlt } from 'react-icons/hi2';
import { FaFacebookF } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { HOTLINE, HOTLINE_TEXT } from '../config/constants';

const Footer = () => {
    return (
        <footer className="relative mt-20 pb-12 pt-16 px-6 overflow-hidden">
            {/* تأثير إضاءة خلفية خفيفة في الفوتر */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
            
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
                
                {/* 1. قسم التواصل - الخط الساخن */}
                <div className="flex flex-col items-center gap-4 group">
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative"
                    >
                        {/* Glow Effect خلف الرقم */}
                        <div className="absolute inset-0 bg-amber-500 blur-2xl opacity-10 group-hover:opacity-25 transition-opacity"></div>
                        
                        <a href={`tel:${HOTLINE}`} className="relative flex items-center gap-4 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 px-8 py-4 rounded-[2rem] shadow-2xl shadow-amber-900/40 text-black">
                            <div className="bg-black/10 p-2 rounded-xl animate-pulse">
                                <HiOutlinePhone size={28} />
                            </div>
                            <span className="font-black text-3xl tracking-tighter italic">
                                {HOTLINE}
                            </span>
                        </a>
                    </motion.div>
                    <p className="text-[10px] text-amber-500/60 font-black tracking-[0.3em] uppercase">
                        {HOTLINE_TEXT}
                    </p>
                </div>

                {/* 2. أيقونات السوشيال ميديا والموقع (Social Mix) */}
                <div className="flex items-center gap-6">
                    {/* Facebook Icon */}
                    <motion.a 
                        whileHover={{ y: -5, backgroundColor: "#1877F2" }}
                        href="https://www.facebook.com/PizzaKingEgRestaurants" // حط اللينك الحقيقي هنا
                        target="_blank"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300"
                    >
                        <FaFacebookF size={20} />
                    </motion.a>

                    {/* Website Icon */}
                    <motion.a 
                        whileHover={{ y: -5, backgroundColor: "#f59e0b", color: "#000" }}
                        href="https://www.pizzaking-eg.com/ar" //
                        target="_blank"
                        className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300"
                    >
                        <HiOutlineGlobeAlt size={22} />
                    </motion.a>
                </div>

                {/* 3. حقوق الملكية والضريبة */}
                <div className="w-full space-y-6 pt-10 border-t border-white/5 text-center">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 opacity-40">
                         <span className="text-[9px] font-bold text-zinc-400 tracking-widest uppercase">
                            Premium Experience
                         </span>
                         <div className="hidden md:block h-1 w-1 rounded-full bg-amber-500"></div>
                         <span className="text-[9px] font-bold text-zinc-400 tracking-widest uppercase">
                            Original Pizza Taste
                         </span>
                    </div>

                    <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-[0.5em] max-w-xs mx-auto leading-loose">
                        جميع الأسعار تشمل ضريبة القيمة المضافة <br /> 
                        <span className="text-amber-500/40">© 2026 PIZZA KING EGYPT • DEVELOPED BY ABDULRHMAN</span>
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;