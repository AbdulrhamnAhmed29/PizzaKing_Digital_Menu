import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';

// استيراد ملفات الـ CSS الخاصة بـ Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
    "/image/1.png",
    "/image/234.jpeg",
];

function Banner() {
    return (
        <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[85vh] bg-zinc-950 overflow-hidden shadow-2xl">
            
            {/* Swiper Slider */}
          <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index} className="relative">
                        {/* الصورة */}
                        <img 
                            src={src} 
                            alt={`Slide ${index + 1}`}
                            className="w-full rounded-md h-full object-cover"
                        />

                        {/* 🌟 تأثير الضوء المتحرك (Shine Effect) 🌟 */}
                        <motion.div
                            initial={{ x: '0%' }}
                            animate={{ x: '200%' }}
                            transition={{ 
                                duration: 2.5, 
                                repeat: Infinity, 
                                ease: "linear", 
                                repeatDelay: 3 
                            }}
                            className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] z-20 pointer-events-none"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* طبقة الـ Overlay (بنيت الـ 20% اللي طلبتها) */}
            <div className="absolute inset-0 bg-black/20 z-10" />

         
        </section>
    );
}

export default Banner;