import React, { useState, useMemo } from 'react';
import { HiCheck, HiOutlineSparkles } from 'react-icons/hi';
   const menuItems = [
        {
            id: 1,
            category: "باستا",
            title: "باستا بيستو إيطالي",
            description: "مكرونة فريش مع صوص الريحان الإيطالي، وزيت الزيتون البكر، وجبنة بارميزان معتقة.",
            image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856",
            sizes: {
                "وسط": [
                    { id: '1pc-m', label: 'قطعة واحدة', price: 150 },
                    { id: '2pc-m', label: 'عرض القطعتين', price: 220, savings: 'وفر 80 ج.م' },
                    { id: '3pc-m', label: 'عرض 3 قطع ', price: 400, savings: 'وفر 60 ج.م' },

                ],
                "كبير": [
                    { id: '1pc-l', label: 'قطعة واحدة', price: 210 },
                    { id: '2pc-l', label: 'عرض القطعتين', price: 380, savings: 'وفر 40 ج.م' },
                    { id: '3pc-l', label: 'عرض 3 قطع ', price: 550, savings: 'وفر 50 ج.م' },

                ]
            },
            bigOffer: {
                id: 'big-1',
                label: 'عرض الكينج (1 كبير + 2 وسط)',
                price: 450,
                discountBadge: 'خصم 35%',
                details: 'وفر أكتر من 160 ج.م مع عرض العيلة'
            }
        },
        {
            id: 2,
            category: "مشويات",
            title: "كباب مشوي ملوكي",
            description: "قطع لحم بلدي متبلة بخلطة كينج السرية، مشوية على الفحم الهادئ تقدم مع المقبلات.",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
            sizes: {
                "وسط": [
                    { id: 'k-1pc-m', label: 'فرد واحد', price: 180 },
                    { id: 'k-2pc-m', label: 'عرض الصحاب', price: 320, savings: 'وفر 40 ج.م' },
                    { id: 'k-3pc-m', label: 'عرض 3 أفراد', price: 550, savings: 'وفر 50 ج.م' },
                ],
                "كبير": [
                    { id: 'k-1pc-l', label: 'فرد واحد', price: 250 },
                    { id: 'k-2pc-l', label: 'عرض الصحاب', price: 460, savings: 'وفر 40 ج.م' },
                    { id: 'k-3pc-l', label: 'عرض 3 أفراد', price: 750, savings: 'وفر 50 ج.م' },
                ]
            },
            bigOffer: {
                id: 'big-2',
                label: 'وليمة المشويات المختلطة',
                price: 850,
                discountBadge: 'الأكثر مبيعاً',
                details: 'تكفي 4 أفراد بخصم خاص جداً'
            }
        }
    ];
const DigitalMenu = () => {
    const [selectedSize, setSelectedSize] = useState({});
    const [selectedOffers, setSelectedOffers] = useState({});
    // حالة الكاتيجوري المختارة
    const [activeTab, setActiveTab] = useState("الكل");

 

    // استخراج الكاتيجوريز بدون تكرار
    const categories = ["الكل", ...new Set(menuItems.map(item => item.category))];

// فلترة المنتجات بناءً على التاب النشط
    const filteredItems = useMemo(() => {
        return activeTab === "الكل"
            ? menuItems
            : menuItems.filter(item => item.category === activeTab);
    }, [activeTab, menuItems]); // شيلنا category وضفنا menuItems
    const handleSelectOffer = (productId, offerId) => {
        setSelectedOffers(prev => ({ ...prev, [productId]: offerId }));
    };

    return (
        <section dir="rtl" className="min-h-screen bg-[#050505] py-24 px-4 md:px-10 font-['Cairo'] text-white">
            <div className="max-w-[850px] mx-auto space-y-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <h2 className="text-4xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-l from-white to-zinc-500">
                        قائمة الطعام الرقمية
                    </h2>
                    <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full shadow-[0_0_15px_rgba(243,183,50,0.5)]"></div>
                </div>

                {/* --- Category Filter Tabs --- */}
                <div className="flex flex-wrap justify-center gap-2 mb-12 sticky top-5 z-50 backdrop-blur-md py-4 rounded-3xl">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-6 py-2 rounded-full text-xs font-black transition-all duration-500 border
                                ${activeTab === cat
                                    ? 'bg-amber-500 text-black border-amber-500 shadow-[0_5px_15px_rgba(243,183,50,0.3)]'
                                    : 'bg-zinc-900/50 text-zinc-500 border-white/5 hover:border-white/20'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu List */}
                <div className="space-y-8 min-h-[400px]">
                    {filteredItems.map((item) => {
                        const activeSize = selectedSize[item.id] || "وسط";
                        const availableOffers = item.sizes[activeSize];
                        const currentOfferId = selectedOffers[item.id];
                        const isBigOfferActive = currentOfferId === item.bigOffer?.id;
                        const activeOffer = isBigOfferActive
                            ? item.bigOffer
                            : (availableOffers.find(o => o.id === currentOfferId) || availableOffers[0]);

                        return (
                            <div key={item.id} className="animate-fade-in group bg-black/40 border border-white/10 rounded-[2.5rem] p-5 md:p-8 transition-all duration-500 shadow-xl">
                                {/* Product Info Section */}
                                <div className="flex gap-4 md:gap-8 items-start mb-8">
                                    <div className="w-24 h-24 md:w-36 md:h-36 flex-shrink-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                                        <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
                                        {isBigOfferActive && (
                                            <div className="absolute inset-0 bg-amber-500/20 animate-pulse border-2 border-amber-500 rounded-3xl"></div>
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-md font-bold mb-2 inline-block">
                                                    {item.category}
                                                </span>
                                                <h3 className="text-xl md:text-3xl font-black text-white leading-tight">{item.title}</h3>
                                                <p className="mt-2 text-zinc-500 text-xs md:text-sm font-light leading-relaxed line-clamp-2">{item.description}</p>
                                            </div>
                                            <div className="text-left bg-zinc-950 px-4 py-2 rounded-2xl border border-white/10 shadow-inner">
                                                <span className="text-amber-500 font-black text-2xl md:text-3xl tracking-tighter">{activeOffer.price}</span>
                                                <span className="text-[10px] text-zinc-500 mr-1 italic">ج.م</span>
                                            </div>
                                        </div>

                                        {/* Size Switcher */}
                                        <div className="mt-6 flex items-center gap-4">
                                            <span className="text-xs uppercase tracking-widest text-zinc-600 font-black">الحجم:</span>
                                            <div className="flex bg-black/40 p-1 rounded-xl border border-white/5">
                                                {Object.keys(item.sizes).map((size) => (
                                                    <button
                                                        key={size}
                                                        disabled={isBigOfferActive}
                                                        onClick={() => {
                                                            setSelectedSize(prev => ({ ...prev, [item.id]: size }));
                                                            setSelectedOffers(prev => ({ ...prev, [item.id]: null }));
                                                        }}
                                                        className={`px-5 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-300 ${activeSize === size && !isBigOfferActive ? 'bg-amber-500 text-black shadow-lg' : 'text-zinc-500 opacity-50'}`}
                                                    >
                                                        {size}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Normal Offers Grid */}
                                <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 transition-all duration-500 ${isBigOfferActive ? 'opacity-30 grayscale blur-[1px]' : 'opacity-100'}`}>
                                    {availableOffers.map((offer) => (
                                        <button
                                            key={offer.id}
                                            onClick={() => handleSelectOffer(item.id, offer.id)}
                                            className={`relative flex flex-col items-center justify-center py-4 rounded-2xl border transition-all duration-300
                                                ${currentOfferId === offer.id ? 'border-white bg-white shadow-2xl scale-[1.02]' : 'border-white/5 bg-zinc-950/60 hover:border-white/20'}`}
                                        >
                                            <span className={`text-[10px] font-black ${currentOfferId === offer.id ? 'text-black' : 'text-zinc-500'}`}>{offer.label}</span>
                                            {offer.savings && <span className={`mt-1 text-[9px] font-black uppercase ${currentOfferId === offer.id ? 'text-amber-600' : 'text-green-500'}`}>{offer.savings}</span>}
                                            {currentOfferId === offer.id && <HiCheck className="absolute top-2 left-2 text-black" size={12} />}
                                        </button>
                                    ))}
                                </div>

                                {/* Big Offer Button */}
                                {item.bigOffer && (
                                    <div className="mt-6">
                                        <button
                                            onClick={() => handleSelectOffer(item.id, item.bigOffer.id)}
                                            className={`w-full relative group/big overflow-hidden rounded-3xl p-[2px] transition-all duration-500 hover:scale-[1.01] active:scale-[0.98]
                                                ${isBigOfferActive ? 'shadow-[0_0_30px_rgba(243,183,50,0.3)]' : ''}`}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-r from-amber-600 via-white to-amber-600 animate-spin-slow transition-opacity duration-500 ${isBigOfferActive ? 'opacity-100' : 'opacity-10 group-hover/big:opacity-30'}`}></div>
                                            <div className={`relative flex flex-row items-center justify-between gap-4 p-4 md:p-6 rounded-[calc(1.5rem-2px)] transition-all duration-500 
                                                ${isBigOfferActive ? 'bg-amber-500 text-black' : 'bg-zinc-950 text-white'}`}>
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-3 rounded-2xl transition-colors ${isBigOfferActive ? 'bg-black text-amber-500' : 'bg-amber-500/10 text-amber-500'}`}>
                                                        <HiOutlineSparkles size={24} className="animate-bounce" />
                                                    </div>
                                                    <div className="text-right">
                                                        <h4 className="font-black text-sm md:text-lg uppercase leading-none">{item.bigOffer.label}</h4>
                                                        <p className={`text-[10px] mt-1 font-bold ${isBigOfferActive ? 'text-black/70' : 'text-zinc-500'}`}>{item.bigOffer.details}</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <div className={`px-4 py-1.5 rounded-full font-black text-xs animate-pulse border-2 shadow-lg ${isBigOfferActive ? 'bg-black text-white border-black/10' : 'bg-red-600 text-white border-white/20'}`}>
                                                        {item.bigOffer.discountBadge}
                                                    </div>
                                                    {isBigOfferActive && <HiCheck size={24} className="text-black" />}
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                <p className="text-center text-zinc-700 text-[11px] mt-20 font-bold tracking-[5px] uppercase italic">
                    THE KING EXPERIENCE
                </p>
            </div>

            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-spin-slow {
                    animation: spin-slow 4s linear infinite;
                }
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default DigitalMenu;