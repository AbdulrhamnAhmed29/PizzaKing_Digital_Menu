import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGlopalOffers } from '../hook/useGlobalOffer';

const RoyalAnnouncement = () => {
  const { glopalOffer } = useGlopalOffers();
  
  // التأكد إننا بنتعامل مع Object مش Array عشان نقدر نقرأ is_active
  const offer = glopalOffer?.data[0] || [];
  
   
  // if (!offer || !offer.is_active) return null;

  return (
    <AnimatePresence>
      <div className="sticky bottom-1  z-[100] w-full">
        <div className="bg-[#050505] border-b-2 border-[#C0A080] py-3 px-2 rounded-md shadow-[0_4px_20px_rgba(192,160,128,0.3)] overflow-hidden relative">

          <motion.div
            animate={{ x: ['-100%', '300%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0A080]/20 to-transparent w-40 skew-x-[-25deg]"
          />

          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                filter: ["drop-shadow(0 0 2px #C0A080)", "drop-shadow(0 0 8px #C0A080)", "drop-shadow(0 0 2px #C0A080)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center text-[#C0A080] text-xl md:text-2xl"
            >
              👑
            </motion.div>

            <div className="flex-1 text-center">
              <div className="text-[#F5EEDC] font-medium text-xs md:text-sm lg:text-base tracking-wide flex flex-wrap justify-center items-center gap-1 md:gap-2">
                <span className="text-[#C0A080] font-black uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {offer.title} :
                </span>
                <span className="hidden md:inline text-[#C0A080]/50">|</span>
                <span className="opacity-90">{offer.description}</span>
              </div>
            </div>

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center text-xl md:text-2xl"
            >
              🍕
            </motion.div>

          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default RoyalAnnouncement;