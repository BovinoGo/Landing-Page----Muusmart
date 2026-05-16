import { CalendarCheck, ChartColumn, ClipboardList, ClipboardPlus, Package, Syringe, ArrowRight, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { motion } from "motion/react";

const iconList = [ClipboardList, Syringe, CalendarCheck, ChartColumn, ClipboardPlus, Package]

export function Features() {
    const { t } = useTranslation()
    const featureList = t('features.list', { returnObjects: true }) as Array<{ title: string; description: string }>
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    return (
        <section className="py-20 bg-gradient-to-b from-white to-[#eef3e6]" id="features">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header */}
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55 }} className="text-center mb-16 space-y-4">
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-forest-green">
                        {t('features.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-forest-green/70 font-mulish max-w-3xl mx-auto">
                        {t('features.subtitle')}
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {featureList.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ duration: 0.45, delay: index * 0.05 }}
                        >
                            <FeatureCard 
                                Icon={iconList[index]} 
                                title={feature.title} 
                                description={feature.description}
                                isHovered={hoveredFeature === index}
                                onHover={() => setHoveredFeature(index)}
                                onLeave={() => setHoveredFeature(null)}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Section */}
                <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }} className="bg-forest-green rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-lime-neon/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10 space-y-6">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <TrendingUp className="text-lime-neon" size={32} />
                            <h3 className="text-2xl md:text-3xl font-semibold font-display">
                                {t('features.cta.title')}
                            </h3>
                        </div>
                        
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            {t('features.cta.description')}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                            <button className="bg-lime-neon text-forest-green px-8 py-4 rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                                {t('features.cta.buttons.trial')}
                                <ArrowRight size={18} />
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-forest-green transition-all duration-300">
                                {t('features.cta.buttons.demo')}
                            </button>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 mt-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-lime-neon">+500</div>
                                <div className="text-sm text-white/80">{t('features.cta.statsLabels.farms')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-lime-neon">50K+</div>
                                <div className="text-sm text-white/80">{t('features.cta.statsLabels.animals')}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-lime-neon">98%</div>
                                <div className="text-sm text-white/80">{t('features.cta.statsLabels.satisfaction')}</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function FeatureCard({ 
    Icon, 
    title, 
    description, 
    isHovered, 
    onHover, 
    onLeave 
}: { 
    Icon: React.ElementType; 
    title: string; 
    description: string;
    isHovered: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileHover={{ y: -8 }}
            className={`group relative bg-gradient-to-br from-white to-white/80 backdrop-blur-xl border border-forest-green/15 rounded-3xl p-8 text-center transition-all duration-300 hover:border-lime-neon hover:shadow-2xl ${
                isHovered ? 'shadow-2xl border-lime-neon' : 'shadow-lg hover:shadow-xl'
            }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            role="article"
            aria-label={`${title}: ${description}`}
        >
            {/* Glow effect on hover */}
            {isHovered && (
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-lime-neon/10 to-transparent rounded-3xl pointer-events-none"
                />
            )}
            
            {/* Icon */}
            <motion.div 
                animate={{ scale: isHovered ? 1.15 : 1 }}
                className={`relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-lime-neon/20 to-forest-green/20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isHovered ? 'bg-gradient-to-br from-lime-neon to-forest-green shadow-lg' : ''
                }`}
            >
                <Icon 
                    className={`w-8 h-8 transition-all duration-300 ${
                        isHovered ? 'text-white' : 'text-forest-green'
                    }`} 
                    aria-hidden="true"
                />
            </motion.div>
            
            {/* Content */}
            <h3 className="relative z-10 text-xl font-semibold mb-4 text-forest-green font-display group-hover:text-forest-green transition-colors">
                {title}
            </h3>
            <p className="relative z-10 text-forest-green/70 font-mulish leading-relaxed">
                {description}
            </p>
            
            {/* Hover indicator */}
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 mt-4 h-1 bg-gradient-to-r from-lime-neon to-forest-green rounded-full origin-left"
            />
        </motion.div>
    );
}