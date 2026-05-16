import mockup from "../assets/mobile_app.webp"
import { useTranslation } from "react-i18next";
import { Smartphone, Download, Star, Users, Shield, Zap, Apple, Play } from "lucide-react";
import { motion } from "motion/react";

export function MobileApp() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gradient-to-b from-[#f5f2eb] to-[#eef3e6] overflow-hidden" id="app">
            {/* anchor alias for smooth scroll */}
            <div id="mobile-app" className="sr-only" />
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.55 }}
                    className="text-center mb-16 space-y-4"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Smartphone className="text-lime-neon" size={32} />
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-display text-forest-green">
                            {t('mobileApp.title')}
                        </h2>
                    </div>
                    <p className="text-base md:text-lg text-forest-green/68 font-mulish max-w-3xl mx-auto">
                        {t('mobileApp.description')}
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    
                    {/* Left Side - App Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="space-y-8"
                    >
                        
                        {/* App Features */}
                        <div className="grid sm:grid-cols-2 gap-5">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 }}
                                className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md p-6 rounded-3xl border border-forest-green/8 hover:border-lime-neon/40 transition-all duration-300 hover:shadow-lg"
                                role="region"
                                aria-label="Offline access feature"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        className="p-2 bg-lime-neon/20 rounded-lg group-hover:bg-lime-neon/30 transition-colors duration-300"
                                    >
                                        <Download className="text-lime-neon" size={20} />
                                    </motion.div>
                                    <h3 className="font-semibold text-forest-green">{t('mobileApp.cards.offline.title')}</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    {t('mobileApp.cards.offline.desc')}
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md p-6 rounded-3xl border border-forest-green/8 hover:border-lime-neon/40 transition-all duration-300 hover:shadow-lg"
                                role="region"
                                aria-label="Fast and efficient feature"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        className="p-2 bg-lime-neon/20 rounded-lg group-hover:bg-lime-neon/30 transition-colors duration-300"
                                    >
                                        <Zap className="text-lime-neon" size={20} />
                                    </motion.div>
                                    <h3 className="font-semibold text-forest-green">{t('mobileApp.cards.fast.title')}</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    {t('mobileApp.cards.fast.desc')}
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md p-6 rounded-3xl border border-forest-green/8 hover:border-lime-neon/40 transition-all duration-300 hover:shadow-lg"
                                role="region"
                                aria-label="Secure data feature"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        className="p-2 bg-lime-neon/20 rounded-lg group-hover:bg-lime-neon/30 transition-colors duration-300"
                                    >
                                        <Shield className="text-lime-neon" size={20} />
                                    </motion.div>
                                    <h3 className="font-semibold text-forest-green">{t('mobileApp.cards.secure.title')}</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    {t('mobileApp.cards.secure.desc')}
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-md p-6 rounded-3xl border border-forest-green/8 hover:border-lime-neon/40 transition-all duration-300 hover:shadow-lg"
                                role="region"
                                aria-label="Multi-user feature"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div 
                                        whileHover={{ scale: 1.1 }}
                                        className="p-2 bg-lime-neon/20 rounded-lg group-hover:bg-lime-neon/30 transition-colors duration-300"
                                    >
                                        <Users className="text-lime-neon" size={20} />
                                    </motion.div>
                                    <h3 className="font-semibold text-forest-green">{t('mobileApp.cards.multiuser.title')}</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    {t('mobileApp.cards.multiuser.desc')}
                                </p>
                            </motion.div>
                        </div>

                        {/* Download Stats */}
                        <div className="bg-white/60 rounded-3xl p-6 border border-forest-green/8">
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <Star className="text-lime-neon" size={16} />
                                        <span className="text-2xl font-bold text-forest-green">4.8</span>
                                    </div>
                                    <p className="text-sm text-forest-green/70">{t('mobileApp.stats.rating')}</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-forest-green mb-1">10K+</div>
                                    <p className="text-sm text-forest-green/70">{t('mobileApp.stats.downloads')}</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-forest-green mb-1">500+</div>
                                    <p className="text-sm text-forest-green/70">{t('mobileApp.stats.farms')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Download Buttons with icons */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="#" 
                                    className="group flex-1 bg-forest-green text-white rounded-2xl p-4 flex items-center gap-4 hover:bg-forest-green/90 transition-all duration-300"
                                    aria-label="Download on the App Store"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                        <Apple className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs opacity-80">{t('mobileApp.store.appStoreTop')}</div>
                                        <div className="font-semibold">{t('mobileApp.store.appStoreName')}</div>
                                    </div>
                                </a>
                                
                                <a 
                                    href="#" 
                                    className="group flex-1 bg-forest-green text-white rounded-2xl p-4 flex items-center gap-4 hover:bg-forest-green/90 transition-all duration-300"
                                    aria-label="Get it on Google Play"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                        <Play className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs opacity-80">{t('mobileApp.store.playTop')}</div>
                                        <div className="font-semibold">{t('mobileApp.store.playName')}</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="text-center">
                                <p className="text-sm text-forest-green/60">
                                    {t('mobileApp.compatibility')}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Phone Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 24, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, delay: 0.08 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-lime-neon/14 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-forest-green/12 rounded-full blur-2xl"></div>
                            
                            {/* Phone mockup */}
                            <div className="relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
                                <img
                                    src={mockup}
                                    alt="Muusmart Mobile App - iOS and Android application interface showcase with livestock management features"
                                    className="w-full max-w-sm mx-auto object-contain drop-shadow-2xl"
                                />
                                
                                <motion.div 
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -left-4 top-1/4 rounded-full border border-white/60 bg-white/80 px-3 py-2 text-sm font-medium text-forest-green shadow-md hover:shadow-lg transition-shadow"
                                >
                                    {t('mobileApp.badges.new')}
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="absolute -right-4 top-2/3 rounded-full border border-forest-green/10 bg-white/82 px-3 py-2 text-sm font-medium text-forest-green shadow-md hover:shadow-lg transition-shadow"
                                >
                                    {t('mobileApp.badges.free')}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}