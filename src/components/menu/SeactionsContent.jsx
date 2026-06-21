import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineTag, HiSparkles } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { FaCrown } from "react-icons/fa";

// 1. (Variants)
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const priceBadgeVariants = {
    hover: {
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.06)",
        borderColor: "rgba(245, 158, 11, 0.4)",
        transition: { duration: 0.3 }
    }
};

const MenuItem = ({ section, multiplier, getFinalPrice }) => {
    const [isOpen, setIsOpen] = useState(false);
    const STRAPI_URL = process.env.REACT_APP_STRAPI_URL || "http://localhost:1337";
    const getUpdatedPrice = (price) => {
        if (typeof getFinalPrice === 'function') {
            return getFinalPrice(price);
        }
        return Number(price) || 0;
    };
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="gradient w-full backdrop-blur-lg rounded-[2.5rem] shadow-2xl overflow-hidden mb-8 border border-white/[0.03]"
        >
            <div className="flex flex-col items-center justify-center px-6 pt-8  text-center select-none">
                <span className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-amber-500 mb-2 relative before:content-[''] before:absolute before:left-[-30px] before:top-1/2 before:w-5 before:h-[1px] before:bg-amber-500/50 after:content-[''] after:absolute after:right-[-30px] after:top-1/2 after:w-5 after:h-[1px] after:bg-amber-500/50">
                    PREMIUM SELECTION
                </span>
                {/* Header */}
                <div className="text-right border-b border-white/5 pb-4">
                    <h1 className="text-4xl italic font-black bg-gradient-to-l from-stone-100 via-amber-200 to-amber-500 bg-clip-text text-transparent">
                       {section.Name}
                    </h1>
                
                </div>
                <div className="flex items-center justify-center gap-4 mt-4 w-full max-w-[250px]">
                    <div className="h-[2px] w-full bg-gradient-to-r from-transparent to-amber-500" />
                    <div className="flex gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                        <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_#f59e0b]" />
                    </div>
                    <div className="h-[2px] w-full bg-gradient-to-l from-transparent to-amber-500" />
                </div>
            </div>
            {/* 2. Products Details */}
            <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 pt-7 lg:grid-cols-2 gap-4 p-4"
            >
                {section.products?.map((product) => (
                    <motion.div
                        key={product.id}
                        variants={itemVariants}
                        className="flex items-center justify-between gap-4 p-3 rounded-2xl hover:bg-white/[0.03] transition-all duration-300 group"
                    >
                        {/* 1. Product Info Wrapper */}
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-stone-100 group-hover:text-amber-400 transition-colors duration-300">
                                {product.Title}
                            </h3>

                            <p className="text-stone-500 text-xs md:w-52 line-clamp-1 mt-1">
                                {product.Description}
                            </p>

                            {/* Sizes & Prices Badges */}
                            <div className="flex items-center mt-4 gap-1">
                                {product.prices
                                    ?.sort((a, b) => {
                                        const order = { small: 1, medium: 2, large: 3 };
                                        return order[a.products_size?.size] - order[b.products_size?.size];
                                    })
                                    ?.map((priceItem, idx) => (
                                        <motion.div
                                            key={idx}
                                            variants={priceBadgeVariants}
                                            whileHover="hover"
                                            className="flex items-center gap-1.5 bg-white/[0.02] border border-white/[0.05] px-2.5 py-1 rounded-xl cursor-pointer transition-all"
                                        >
                                            <span className="text-[10px] font-black text-amber-500/60 group-hover:text-amber-500 uppercase">
                                                {priceItem.products_size?.size === 'small' ? 'S' :
                                                    priceItem.products_size?.size === 'medium' ? 'M' : 'L'}
                                            </span>

                                            <div className="w-[1px] h-2.5 bg-white/10"></div>

                                            <span className="text-white font-bold text-[12px]">
                                                {getUpdatedPrice(priceItem.price)}
                                                <small className="text-[8px] ms-0.5 text-stone-500">ج.م</small>
                                            </span>
                                        </motion.div>
                                    ))}
                            </div>
                        </div>

                        {/* 2. Product Image Wrapper */}
                        {product.Image ? (
                            <div className="relative flex-shrink-0">

                                {product.is_spicy && (
                                    <span className="absolute left-4 top-0 z-30 flex items-center gap-1 bg-gradient-to-r from-red-950/90 to-stone-950/90 backdrop-blur-md border border-red-500/30 text-red-400 text-[9px] font-black tracking-[0.2em] uppercase pl-2 pr-1.5 py-0.5 rounded-full shadow-[0_4px_15px_rgba(220,38,38,0.3)] select-none group-hover:border-red-500/60 group-hover:text-red-300 transition-all duration-300 whitespace-nowrap">
                                        Spicy
                                        {/* Glowing Fire Pulse */}
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
                                        </span>
                                    </span>
                                )}

                                <div className="relative w-[70px] h-[70px] rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-stone-900 border border-white/5 group-hover:border-amber-500/30 transition-all duration-500 z-10">
                                    <motion.img
                                        loading="lazy"
                                        src={`${STRAPI_URL}${product.Image.formats?.small?.url || product.Image.formats?.thumbnail?.url || product.Image.url}`}
                                        alt={product.Title}
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Dark Overlay inside the circle */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 z-10"></div>
                                </div>
                            </div>
                        ) : null}

                    </motion.div>
                ))}
            </motion.div>
            {/* 3- Offer Btn */}
            <div className="px-6 pb-6 pt-4">
                {section.offers_prices?.length > 0 && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-600/10 to-amber-500/5 border border-amber-500/20 flex items-center justify-center gap-3 group active:scale-[0.99] hover:border-amber-500/40 hover:from-amber-600/15 transition-all duration-300"
                    >
                        <HiOutlineTag className="text-amber-500 group-hover:rotate-12 transition-transform duration-300" size={20} />
                        <span className="text-amber-500 font-bold text-sm tracking-wide">تفاصيل العروض الحصرية</span>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                            <HiOutlineChevronDown className="text-amber-500" />
                        </motion.div>
                    </button>
                )}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1, transition: { height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.25 } } }}
                            exit={{ height: 0, opacity: 0, transition: { height: { duration: 0.3, ease: "easeInOut" }, opacity: { duration: 0.2 } } }}
                            className="overflow-hidden"
                        >
                            <div className="grid grid-cols-1 gap-4 pt-6 pb-2">
                                <p className="text-center text-[15px] p-1 text-gray-200 ">هذه الاسعار تنطبق على البيتزات المتاحة فى السيكشن</p>
                                {section.offers_prices
                                    ?.sort((a, b) => (a.offer?.[0]?.offer_type === "medium" ? -1 : 1))
                                    ?.map((offer) => {
                                        return (
                                            <motion.div
                                                key={`offer-${offer.id}`}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="relative flex justify-between items-center p-4 rounded-2xl bg-white/[0.01] border border-white/[0.03] border-r-4 border-r-amber-500 shadow-inner overflow-hidden hover:bg-white/[0.03] transition-all duration-300"
                                            >
                                                <span className="absolute top-0 right-0 bg-amber-500 text-black text-[9px] font-black应用 px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                                    {offer.offer?.offer_type === "medium" ? "وسط" : "كبير"}
                                                </span>
                                                <div className="space-y-1 pt-2">
                                                    <h4 className="text-white font-bold text-sm">
                                                        عرض الـ {offer.offer?.quantity} قطع {offer.offer?.offer_type === "medium" ? "Medium" : "Large"}
                                                    </h4>
                                                </div>
                                                <div className="text-right">
                                                    <span className="block text-white font-black text-2xl tracking-tighter">{getUpdatedPrice(offer.price)}</span>
                                                    <span className="text-stone-500 text-[9px] font-bold uppercase">جنيه</span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                {section.compo_offers_prices?.map((comboOffer, index) => (
                                    <motion.div
                                        key={`combo-${comboOffer.id}`}
                                        initial={{ opacity: 0, y: 25 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.6, ease: "easeOut" }}
                                        className="relative group overflow-hidden rounded-[2rem] bg-gradient-to-b from-slate-950/60 to-slate-950/20 border border-white/[0.03] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:border-amber-500/30 transition-all duration-500"
                                    >
                                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-500/5 blur-[80px] group-hover:bg-amber-500/10 transition-colors duration-1000"></div>

                                        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                                            <div className="flex items-center gap-5 w-full md:w-auto">
                                                <div className="relative flex-shrink-0">
                                                    <div className="absolute inset-0 bg-amber-500 blur-md opacity-10 group-hover:opacity-30 transition-opacity"></div>
                                                    <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 text-black shadow-xl transform group-hover:rotate-3 transition-transform duration-500">
                                                        <FaCrown size={24} />
                                                    </div>
                                                </div>

                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em] bg-amber-500/10 px-2 py-0.5 rounded-full">
                                                            Limited Edition
                                                        </span>
                                                        <HiSparkles className="text-amber-500 animate-pulse" size={12} />
                                                    </div>
                                                    <h4 className="text-xl font-black bg-gradient-to-r from-white via-stone-200 to-stone-400 bg-clip-text text-transparent">
                                                        {comboOffer.compo_offer?.description}
                                                    </h4>
                                                    <p className="text-stone-400 text-xs font-medium max-w-[220px] leading-relaxed">
                                                        {comboOffer.compo_offer?.title || "تجربة ملكية فريدة من نوعها لأصحاب الذوق الرفيع"}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="w-full md:w-auto flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 pt-4 md:pt-0 border-t border-white/5 md:border-0">
                                                <div className="text-right">
                                                    <p className="text-[9px] text-stone-500 font-bold uppercase tracking-widest mb-0.5">Exclusive Price</p>
                                                    <div className="flex items-baseline gap-1.5">
                                                        <span className="text-xs text-stone-600 line-through font-extrabold decoration-amber-500/40">
                                                            {getUpdatedPrice(parseInt(comboOffer.price) + 85)}
                                                        </span>
                                                        <span className="text-3xl font-black bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
                                                            {getUpdatedPrice(comboOffer.price)}
                                                        </span>
                                                        <span className="text-[9px] font-black text-amber-500">EGP</span>
                                                    </div>
                                                </div>

                                                <motion.button
                                                    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)" }}
                                                    whileTap={{ scale: 0.97 }}
                                                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-300 text-black font-black text-[10px] uppercase tracking-[0.15em] shadow-lg transition-all"
                                                >
                                                    Reserve Now
                                                </motion.button>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div >
    );
};

export default MenuItem;