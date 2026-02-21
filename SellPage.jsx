import React, { useState, useEffect } from 'react';

const SellPage = ({ onLogout, navigateTo }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        location: '',
        type: 'Villa',
        beds: '',
        baths: '',
        sqft: '',
        description: ''
    });

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Property listing submitted for review! Our agents will contact you shortly.');
        setFormData({
            title: '',
            price: '',
            location: '',
            type: 'Villa',
            beds: '',
            baths: '',
            sqft: '',
            description: ''
        });
    };

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
                            className={`px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${item === 'Sell'
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

            {/* 📝 SELL SECTION */}
            <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1]">
                        List Your <span className="text-emerald-600">Property</span> With The Experts.
                    </h1>
                    <p className="text-gray-500 text-xl font-medium mb-12 max-w-lg">
                        Reach thousands of qualified buyers and get the best value for your luxury estate. Our premium marketing tools ensure your property stands out.
                    </p>

                    <div className="space-y-8">
                        {[
                            { title: 'Global Exposure', desc: 'Showcase your property to international buyers across our network.' },
                            { title: 'Professional Media', desc: 'Complimentary high-end photography and cinematic virtual tours.' },
                            { title: 'Expert Valuation', desc: 'Get an accurate market analysis from Rajasthan\'s top real estate consultants.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="bg-emerald-50 text-emerald-600 p-3 rounded-2xl">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-1">{item.title}</h4>
                                    <p className="text-gray-400 text-sm font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Form */}
                <div className="lg:w-1/2 bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)] border border-gray-50">
                    <h3 className="text-2xl font-black text-gray-900 mb-8">Property Details</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Property Title</label>
                                <input
                                    type="text" name="title" value={formData.title} onChange={handleChange} required
                                    placeholder="e.g. Royal Heritage Villa"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Expected Price</label>
                                <input
                                    type="text" name="price" value={formData.price} onChange={handleChange} required
                                    placeholder="e.g. ₹5.5 Cr"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Location</label>
                            <input
                                type="text" name="location" value={formData.location} onChange={handleChange} required
                                placeholder="e.g. Civil Lines, Jaipur"
                                className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Property Type</label>
                                <select
                                    name="type" value={formData.type} onChange={handleChange}
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none appearance-none cursor-pointer"
                                >
                                    <option>Villa</option>
                                    <option>Apartment</option>
                                    <option>Penthouse</option>
                                    <option>Plot</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Total SQFT</label>
                                <input
                                    type="text" name="sqft" value={formData.sqft} onChange={handleChange} required
                                    placeholder="e.g. 4500"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Bedrooms</label>
                                <input
                                    type="number" name="beds" value={formData.beds} onChange={handleChange} required
                                    placeholder="0"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Bathrooms</label>
                                <input
                                    type="number" name="baths" value={formData.baths} onChange={handleChange} required
                                    placeholder="0"
                                    className="w-full bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Description</label>
                            <textarea
                                name="description" value={formData.description} onChange={handleChange} required
                                rows="4" placeholder="Describe the unique features of your property..."
                                className="w-full bg-gray-50 border-none rounded-3xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-emerald-600 text-white py-5 rounded-2xl text-[11px] font-extrabold uppercase tracking-[0.2em] shadow-xl shadow-emerald-100 hover:bg-emerald-700 hover:scale-[1.02] active:scale-[0.98] transition-all pt-6"
                        >
                            List Property Now
                        </button>
                    </form>
                </div>
            </div>

            <footer className="bg-gray-900 text-white/40 py-12 px-6 text-center text-[10px] font-black uppercase tracking-[0.4em]">
                Elite Estates © 2026 • Crafted by Ruchi Properties • Jaipur, Rajasthan
            </footer>
        </div>
    );
};

export default SellPage;
