import React, { useState, useEffect } from 'react';

const HomePage = ({ onLogout }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- Premium Icon Components (Inline SVG) ---
    const IconHome = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );

    const IconSearch = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
    );

    const IconUser = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
    );

    const IconArrow = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-[#fcfcfd] text-[#1a1a1a] font-sans selection:bg-emerald-100 selection:text-emerald-900">

            {/* 🧭 PREMIUM STICKY NAVBAR */}
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent'
                }`}>
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-emerald-600 p-2 rounded-xl text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                        <IconHome />
                    </div>
                    <span className={`text-xl font-black tracking-tight text-gray-900`}>
                        Elite Estates
                    </span>
                </div>

                {/* Desktop Category Buttons */}
                <div className="hidden lg:flex items-center gap-3">
                    {['Home', 'Buy', 'Rent', 'Sell', 'Plots'].map((item) => (
                        <button
                            key={item}
                            className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${item === 'Home'
                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700'
                                : 'bg-gray-50 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-100'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    {/* <div className={`hidden sm:flex items-center gap-4 text-sm font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                        <span className="cursor-pointer hover:text-emerald-500 transition-colors uppercase tracking-widest text-[10px]">Saved</span>
                    </div> */}

                    <div className="relative group">
                        <button className={`p-2 rounded-full border transition-all ${isScrolled ? 'border-gray-200 text-gray-900 hover:bg-gray-50' : 'border-gray-200 text-gray-900 hover:bg-gray-50'}`}>
                            <IconUser />
                        </button>
                        <div className="absolute right-0 mt-3 w-56 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-right border border-gray-100">
                            <div className="p-6 border-b border-gray-50 bg-gray-50/50">
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Welcome,</p>
                                <p className="text-sm font-black text-gray-900 mt-1">Ruchi Properties</p>
                            </div>
                            <div className="p-2">
                                <button className="w-full text-left px-4 py-3 text-xs font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-2xl transition-all uppercase tracking-widest">Dashboard</button>
                                <button className="w-full text-left px-4 py-3 text-xs font-bold text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-2xl transition-all uppercase tracking-widest">Saved Listings</button>
                                <div className="h-px bg-gray-50 my-2 mx-4" />
                                <button
                                    onClick={onLogout}
                                    className="w-full text-left px-4 py-3 text-xs font-black text-red-500 hover:bg-red-50 rounded-2xl transition-all uppercase tracking-widest"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* 🏰 HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
                {/* Clean Hero Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                        className="w-full h-full object-cover brightness-[0.85]"
                        alt="Modern Estate"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center text-center">
                    <h1 className="text-7xl md:text-9xl font-black text-gray-900 mb-6 leading-[1.05] tracking-tighter">
                        Find Your <span className="text-emerald-600">Space.</span>
                    </h1>
                    <p className="text-gray-500 text-xl font-medium max-w-xl">
                        Discover the most exclusive properties in Rajasthan's prime locations.
                    </p>
                </div>
            </section >

            {/* 🏠 FEATURED CATEGORIES SECTION */}
            < section className="py-32 px-6 md:px-12 max-w-7xl mx-auto" >
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Explore by Lifestyle</h2>
                        <p className="text-gray-500 font-medium leading-relaxed">
                            Tailored categories to help you find precisely what you're looking for, whether it's a cozy studio or a sprawling royal estate.
                        </p>
                    </div>
                    <button className="group flex items-center text-xs font-black uppercase tracking-[0.3em] text-emerald-600 border-b-2 border-emerald-100 pb-2 hover:border-emerald-500 transition-all">
                        View All Collections <IconArrow />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {[
                        { title: 'Royal Villas', count: '120+ Estates', img: 'https://images.unsplash.com/photo-1613977257363-b073f4dd48c9?q=80&w=2070&auto=format&fit=crop', color: 'bg-amber-500' },
                        { title: 'Modern Living', count: '450+ Properties', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop', color: 'bg-emerald-500' },
                        { title: 'Premium Plots', count: '85+ Locations', img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop', color: 'bg-blue-500' }
                    ].map((cat, i) => (
                        <div key={i} className="group relative h-[500px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
                            <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="absolute bottom-10 left-10">
                                <span className={`px-4 py-1.5 ${cat.color} text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-4 inline-block`}>
                                    New Listings
                                </span>
                                <h3 className="text-3xl font-black text-white mb-2">{cat.title}</h3>
                                <p className="text-white/60 font-medium">{cat.count}</p>
                            </div>
                            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <IconArrow />
                            </div>
                        </div>
                    ))}
                </div>
            </section >

            {/* 📱 FOOTER PREVIEW */}
            < footer className="bg-gray-900 text-white/40 py-12 px-6 text-center text-[10px] font-black uppercase tracking-[0.4em]" >
                Elite Estates & copy; 2026 • Crafted by Ruchi Properties • Jaipur, Rajasthan
            </footer >
        </div >
    );
};

export default HomePage;