import { useTranslation } from 'react-i18next';
import farmer from '../assets/farmer3.webp';
import { Target, Users, Globe, Leaf, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function AboutUs() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gradient-to-b from-[#f5f2eb] to-white" id='aboutus'>
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.55 }} className="text-center mb-16 space-y-4">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-green">
                        {t('aboutus.title')}
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-lime-neon to-forest-green mx-auto rounded-full"></div>
                </motion.div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    
                    {/* Left Side - Content */}
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="space-y-8">
                        <div className="space-y-6">
                            <p className="text-lg md:text-xl text-forest-green/78 font-mulish leading-relaxed">
                                {t('aboutus.description')}
                            </p>
                            
                            <blockquote className="text-xl md:text-2xl font-display italic text-forest-green border-l-4 border-lime-neon pl-6 py-4 bg-lime-neon/5 rounded-r-xl">
                                {t('aboutus.subtitle')}
                            </blockquote>
                        </div>

                        {/* Mission & Vision */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-forest-green/5 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Target className="text-lime-neon" size={24} />
                                    <h3 className="font-bold text-forest-green font-rokkitt">{t('aboutus.mission.title')}</h3>
                                </div>
                                <p className="text-forest-green/70 text-sm">
                                    {t('aboutus.mission.description')}
                                </p>
                            </div>

                            <div className="bg-lime-neon/10 rounded-2xl p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <Globe className="text-forest-green" size={24} />
                                    <h3 className="font-bold text-forest-green font-rokkitt">{t('aboutus.vision.title')}</h3>
                                </div>
                                <p className="text-forest-green/70 text-sm">
                                    {t('aboutus.vision.description')}
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-forest-green/20">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-forest-green">2024</div>
                                <div className="text-sm text-forest-green/70">{t('aboutus.stats.founded')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-forest-green">15+</div>
                                <div className="text-sm text-forest-green/70">{t('aboutus.stats.regions')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-forest-green">24/7</div>
                                <div className="text-sm text-forest-green/70">{t('aboutus.stats.support')}</div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Image */}
                    <motion.div initial={{ opacity: 0, y: 24, scale: 0.98 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }} className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-lime-neon/20 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-forest-green/20 rounded-full blur-2xl"></div>
                        
                        {/* Main image */}
                        <div className="relative z-10">
                            <img 
                                src={farmer} 
                                alt={t('aboutus.imageAlt')}
                                className="w-full aspect-[4/3] object-cover rounded-3xl shadow-2xl"
                            />
                            
                            {/* Overlay badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-lime-neon rounded-full animate-pulse"></div>
                                    <span className="text-forest-green font-semibold text-sm">
                                        {t('aboutus.badge')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className="bg-gradient-to-br from-forest-green/5 to-lime-neon/5 rounded-3xl p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-semibold text-forest-green font-display mb-4">
                            {t('aboutus.values.title')}
                        </h3>
                        <p className="text-forest-green/70 font-mulish max-w-2xl mx-auto">
                            {t('aboutus.values.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-lime-neon/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-neon transition-all duration-300">
                                <Leaf className="text-forest-green group-hover:text-white" size={24} />
                            </div>
                            <h4 className="font-bold text-forest-green mb-2 font-rokkitt">{t('aboutus.values.sustainability.title')}</h4>
                            <p className="text-forest-green/70 text-sm">
                                {t('aboutus.values.sustainability.description')}
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-forest-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-forest-green transition-all duration-300">
                                <Users className="text-forest-green group-hover:text-white" size={24} />
                            </div>
                            <h4 className="font-bold text-forest-green mb-2 font-rokkitt">{t('aboutus.values.community.title')}</h4>
                            <p className="text-forest-green/70 text-sm">
                                {t('aboutus.values.community.description')}
                            </p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-lime-neon/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-neon transition-all duration-300">
                                <Shield className="text-forest-green group-hover:text-white" size={24} />
                            </div>
                            <h4 className="font-bold text-forest-green mb-2 font-rokkitt">{t('aboutus.values.reliability.title')}</h4>
                            <p className="text-forest-green/70 text-sm">
                                {t('aboutus.values.reliability.description')}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}