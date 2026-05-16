import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import farmer1 from '../assets/farmer1.webp';
import farmer2 from '../assets/farmer2.webp';
import farmer3 from '../assets/farmer3.webp';
import { motion } from 'motion/react';

export function Testimonials() {
    const { t } = useTranslation();
    const testimonialUsers = t('testimonials.users', { returnObjects: true }) as Array<{
        name: string;
        role: string;
        text: string;
    }>;
    
    const testimonials = [
        { ...testimonialUsers[0], image: farmer1, rating: 5 },
        { ...testimonialUsers[1], image: farmer2, rating: 5 },
        { ...testimonialUsers[2], image: farmer3, rating: 5 }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-light-gray to-white">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-rokkitt text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-forest-green/70 font-mulish max-w-3xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="bg-forest-green rounded-3xl p-8 md:p-12 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-lime-neon mb-2">500+</div>
                            <div className="text-white/80">{t('testimonials.stats.farms')}</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-lime-neon mb-2">4.8★</div>
                            <div className="text-white/80">{t('testimonials.stats.avgRating')}</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-lime-neon mb-2">50K+</div>
                            <div className="text-white/80">{t('testimonials.stats.animals')}</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-lime-neon mb-2">99.9%</div>
                            <div className="text-white/80">{t('testimonials.stats.uptime')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
    return (
        <motion.div 
            whileHover={{ y: -8 }}
            className="relative bg-gradient-to-br from-white to-white/90 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-forest-green/10 hover:border-lime-neon/50 group"
            role="blockquote"
            aria-label={`Testimonial from ${testimonial.name}`}
        >
            {/* Glow effect on hover */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-lime-neon/5 to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            
            {/* Quote Icon */}
            <div className="flex justify-between items-start mb-6 relative z-10">
                <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    initial={{ rotate: -15 }}
                    className="text-lime-neon"
                >
                    <Quote size={32} />
                </motion.div>
                <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Star className="text-lime-neon fill-current" size={16} aria-hidden="true" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Testimonial Text */}
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-forest-green/80 font-mulish mb-6 leading-relaxed relative z-10"
            >
                "{testimonial.text}"
            </motion.p>

            {/* User Info */}
            <motion.div 
                className="flex items-center gap-4 relative z-10 pt-4 border-t border-forest-green/10 group-hover:border-lime-neon/20 transition-colors duration-300"
                whileHover={{ x: 4 }}
            >
                <motion.img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-lime-neon/30 group-hover:border-lime-neon transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                />
                <div>
                    <h4 className="font-bold text-forest-green font-rokkitt">
                        {testimonial.name}
                    </h4>
                    <p className="text-forest-green/60 text-sm">
                        {testimonial.role}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}