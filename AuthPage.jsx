import React, { useState } from 'react';

const AuthPage = ({ onLogin }) => {
    const [view, setView] = useState('splash'); // 'splash' or 'auth'
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        identifier: '',
        password: '',
        name: '',
        // confirmPassword: '',
        role: 'Buy',
        agreeTerms: false
    });

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAuthClick = (loginMode) => {
        setIsLogin(loginMode);
        setView('auth');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Simulate successful login
        if (onLogin) onLogin();
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
            {/* Background Image with Overlay */}
            <div
                className={`absolute inset-0 z-0 bg-cover bg-center transition-all duration-1000 ${view === 'auth' ? 'scale-110' : 'scale-100'}`}
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')`,
                }}
            >
                <div className={`absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity duration-700 ${view === 'auth' ? 'opacity-80' : 'opacity-40'}`} />
            </div>

            {/* Splash View (Matching User Example) */}
            {view === 'splash' && (
                <div className="relative z-10 text-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tight">
                        Elite Estates
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
                        "Find the key to your dreams where every home tells a story and every room holds a future."
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button
                            onClick={() => handleAuthClick(true)}
                            className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full text-lg shadow-xl hover:shadow-emerald-500/20 transform hover:-translate-y-1 transition-all duration-300 w-48"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => handleAuthClick(false)}
                            className="px-10 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full text-lg border-2 border-white/30 shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-48"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            )}

            {/* Auth View (The Modal/Card) */}
            {view === 'auth' && (
                <div className="relative z-10 w-full max-w-md mx-4 animate-in fade-in zoom-in duration-500">
                    <div className="bg-white/95 backdrop-blur-xl rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] overflow-hidden p-8 md:p-12 border border-white/20">

                        {/* Back Button */}
                        <button
                            onClick={() => setView('splash')}
                            className="absolute top-8 left-8 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>

                        {/* Logo & Header */}
                        <div className="text-center mb-8 pt-4">
                            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500 rounded-2xl mb-4 shadow-lg shadow-emerald-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-1">
                                {isLogin ? 'Welcome Back' : 'Get Started'}
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Enter your details to access the premium listing
                            </p>
                        </div>

                        {/* Tabs */}
                        <div className="flex p-1.5 bg-gray-100 rounded-2xl mb-8 relative">
                            <div
                                className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-white rounded-xl shadow-sm transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${!isLogin ? 'left-[calc(50%+3px)]' : 'left-1.5'}`}
                            />
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-2.5 text-sm font-bold rounded-xl relative z-10 transition-colors ${isLogin ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-2.5 text-sm font-bold rounded-xl relative z-10 transition-colors ${!isLogin ? 'text-gray-900' : 'text-gray-500'}`}
                            >
                                Sign Up
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!isLogin && (
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full px-5 py-3.5 bg-gray-100/50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
                                        required={!isLogin}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}

                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email or Phone</label>
                                <input
                                    type="text"
                                    name="identifier"
                                    placeholder="name@email.com"
                                    className="w-full px-5 py-3.5 bg-gray-100/50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="space-y-1.5 relative">
                                <div className="flex justify-between items-center ml-1">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Password</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="••••••••"
                                        className="w-full px-5 py-3.5 bg-gray-100/50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
                                        required
                                        onChange={handleInputChange}
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-500 transition-colors"
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {isLogin && (
                                <div className="flex justify-end">
                                    <button type="button" className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 uppercase tracking-widest">
                                        Forgot password?
                                    </button>
                                </div>
                            )}

                            {/* {!isLogin && (
                                <div className="space-y-1.5">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="••••••••"
                                        className="w-full px-5 py-3.5 bg-gray-100/50 border-none rounded-2xl focus:ring-2 focus:ring-emerald-500 outline-none transition-all placeholder:text-gray-400"
                                        required={!isLogin}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )} */}

                            <button
                                type="submit"
                                className="w-full py-4 bg-emerald-500 text-white font-black rounded-2xl shadow-xl shadow-emerald-200 hover:bg-emerald-600 transform hover:-translate-y-0.5 transition-all active:scale-[0.98] mt-4 uppercase tracking-[0.2em]"
                            >
                                {isLogin ? 'Login' : 'Sign Up'}
                            </button>
                        </form>

                        {/* Social Logins */}
                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-100"></div>
                            </div>
                            {/* <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                                <span className="px-4 bg-white">Connect</span>
                            </div> */}
                        </div>

                        {/* <div className="grid grid-cols-3 gap-3">
                            <button className="flex justify-center items-center py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-100">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
                            </button>
                            <button className="flex justify-center items-center py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-100">
                                <img src="https://www.svgrepo.com/show/475638/facebook-color.svg" className="w-5 h-5" alt="Facebook" />
                            </button>
                            <button className="flex justify-center items-center py-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors border border-gray-100">
                                <img src="https://www.svgrepo.com/show/442910/apple.svg" className="w-5 h-5" alt="Apple" />
                            </button>
                        </div> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AuthPage;