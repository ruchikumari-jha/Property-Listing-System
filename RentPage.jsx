import React, { useState, useEffect } from 'react';

const RentPage = ({ onLogout, navigateTo }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const rentalProperties = [
        {
            id: 1,
            title: 'Modern Studio Apartment',
            price: '₹45,000/mo',
            location: 'C-Scheme, Jaipur',
            type: 'Apartment',
            beds: 1,
            baths: 1,
            sqft: '850',
            image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop',
            featured: true
        },
        {
            id: 2,
            title: 'Family Bungalow',
            price: '₹1.2 L/mo',
            location: 'Bani Park, Jaipur',
            type: 'Villa',
            beds: 4,
            baths: 3,
            sqft: '3,200',
            image: 'https://images.unsplash.com/photo-1580587771525-78b9bed3b902?q=80&w=2074&auto=format&fit=crop',
            featured: false
        },
        {
            id: 3,
            title: 'Luxury Loft',
            price: '₹75,000/mo',
            location: 'Malviya Nagar, Jaipur',
            type: 'Apartment',
            beds: 2,
            baths: 2,
            sqft: '1,500',
            image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop',
            featured: true
        },
        {
            id: 4,
            title: 'Garden View Villa',
            price: '₹2.5 L/mo',
            location: 'Vaishali Nagar, Jaipur',
            type: 'Villa',
            beds: 5,
            baths: 5,
            sqft: '5,000',
            image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop',
            featured: false
        },
        {
            id: 5,
            title: 'Cozy Penthouse',
            price: '₹90,000/mo',
            location: 'Tonk Road, Jaipur',
            type: 'Penthouse',
            beds: 3,
            baths: 3,
            sqft: '2,200',
            image: 'https://images.unsplash.com/photo-1628592102751-ba83b03bc42e?q=80&w=2097&auto=format&fit=crop',
            featured: true
        },
        {
            id: 6,
            title: 'Business Executive Suite',
            price: '₹60,000/mo',
            location: 'Mansarovar, Jaipur',
            type: 'Apartment',
            beds: 2,
            baths: 1,
            sqft: '1,200',
            image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
            featured: false
        }
    ];

    const filteredProperties = filter === 'All'
        ? rentalProperties
        : rentalProperties.filter(p => p.type === filter);

    const IconHome = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );

    const IconUser = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
        </svg>
    );

    const IconBed = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M2 4v16M2 8h18M2 12h18M2 16h18M22 4v16" />
        </svg>
    );

    const IconBath = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M7 21h10M9 5v11M15 5v11M4 11h16" />
        </svg>
    );

    const IconSqft = () => (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-[#fcfcfd] text-[#1a1a1a] font-sans">
            {/* 🧭 PREMIUM STICKY NAVBAR */}
            <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-4 flex items-center justify-between ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent'
                }`}>
                <div onClick={() => navigateTo('home')} className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-emerald-600 p-2 rounded-xl text-white shadow-lg shadow-emerald-200 group-hover:scale-110 transition-transform">
                        <IconHome />
                    </div>
                    <span className={`text-xl font-black tracking-tight text-gray-900`}>
                        Elite Estates
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    {['Home', 'Buy', 'Rent', 'Sell', 'Plots'].map((item) => (
                        <button
                            key={item}
                            onClick={() => navigateTo(item.toLowerCase())}
                            className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${item === 'Rent'
                                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700'
                                : 'bg-gray-50 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-100'
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-6">
                    <div className="relative group">
                        <button className={`p-2 rounded-full border border-gray-200 text-gray-900 hover:bg-gray-50 transition-all`}>
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

            {/* 🏘️ RENT HEADER */}
            <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
                            Find Your <span className="text-emerald-600">Rental</span> Home
                        </h1>
                        <p className="text-gray-500 text-lg font-medium">
                            Discover premium rentals ranging from cozy central apartments to magnificent suburban villas. Flexible stays for elite lifestyles.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex gap-2 bg-gray-100 p-1.5 rounded-2xl self-start md:self-end">
                        {['All', 'Villa', 'Apartment', 'Penthouse'].map((t) => (
                            <button
                                key={t}
                                onClick={() => setFilter(t)}
                                className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${filter === t
                                        ? 'bg-white text-emerald-600 shadow-sm'
                                        : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 🏠 PROPERTY GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProperties.map((prop) => (
                        <div key={prop.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 hover:border-emerald-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col">
                            {/* Image Container */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={prop.image}
                                    alt={prop.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 flex flex-col gap-2">
                                    {prop.featured && (
                                        <span className="bg-emerald-600 text-white text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                            Popular
                                        </span>
                                    )}
                                    <span className="bg-white/90 backdrop-blur-md text-gray-900 text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
                                        For Rent
                                    </span>
                                </div>
                                <div className="absolute bottom-6 right-6">
                                    <div className="bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl">
                                        <p className="text-emerald-600 text-lg font-black">{prop.price}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <p className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-2">{prop.type}</p>
                                    <h3 className="text-2xl font-black text-gray-900 mb-2 truncate">{prop.title}</h3>
                                    <p className="text-gray-400 text-sm font-medium flex items-center gap-1">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-emerald-500">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                        {prop.location}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between py-6 border-y border-gray-50 mb-6">
                                    <div className="flex flex-col items-center gap-1">
                                        <IconBed />
                                        <span className="text-[10px] font-black text-gray-900">{prop.beds} Beds</span>
                                    </div>
                                    <div className="w-px h-8 bg-gray-100" />
                                    <div className="flex flex-col items-center gap-1">
                                        <IconBath />
                                        <span className="text-[10px] font-black text-gray-900">{prop.baths} Baths</span>
                                    </div>
                                    <div className="w-px h-8 bg-gray-100" />
                                    <div className="flex flex-col items-center gap-1">
                                        <IconSqft />
                                        <span className="text-[10px] font-black text-gray-900">{prop.sqft} sqft</span>
                                    </div>
                                </div>

                                <button className="mt-auto w-full bg-gray-900 text-white py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-lg hover:shadow-emerald-200">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer className="bg-gray-900 text-white/40 py-12 px-6 text-center text-[10px] font-black uppercase tracking-[0.4em]">
                Elite Estates © 2026 • Crafted by Ruchi Properties • Jaipur, Rajasthan
            </footer>
        </div>
    );
};

export default RentPage;
