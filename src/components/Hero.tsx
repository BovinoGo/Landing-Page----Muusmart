import { Trans, useTranslation } from 'react-i18next';
import hero from '../assets/hero.webp';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
    const { t } = useTranslation();
    return (
        <div className='relative min-h-screen -mt-10 flex items-center justify-center overflow-hidden bg-[#071612] md:-mt-16'>
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={hero} 
                    className='h-full w-full scale-[1.1] object-cover object-[center_30%] saturate-[1.18] contrast-[1.1]' 
                    alt="Muusmart Hero"
                />
                <div className="absolute inset-0 bg-[#071612]/48" />
                <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#071612]/96 via-[#071612]/72 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(10,26,22,0.36),_transparent_40%),radial-gradient(circle_at_top_left,_rgba(168,201,106,0.16),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.06),_transparent_30%)]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#071612]/30" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-4 py-20 text-center md:py-24">
                <div className='space-y-5'>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <span className="inline-flex items-center rounded-full border border-white/16 bg-white/12 px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-white/88 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.14)]">
                            {t('hero.kicker')}
                        </span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className='mx-auto max-w-4xl text-[2.6rem] font-normal leading-[0.88] tracking-[0.03em] text-white md:text-[4.6rem] lg:text-[6.4rem]'
                        style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                    >
                        <Trans
                            i18nKey="hero.title"
                            components={{
                                br: <br />,
                                strong: <span className="text-lime-neon" />,
                            }}
                        />
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.12 }}
                        className="mx-auto max-w-3xl text-[0.96rem] leading-relaxed text-white/82 md:text-[1.05rem] md:leading-[1.55]"
                    >
                        {t('hero.subtitle')}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex flex-col items-center justify-center gap-3 sm:flex-row"
                    >
                        <button 
                            className='group inline-flex items-center justify-between gap-6 border-b border-lime-neon/60 bg-transparent px-0 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-lime-neon transition-all duration-300 hover:translate-x-1 md:text-base' 
                            onClick={handleScroll('fair')}
                        >
                            <span>{t('hero.primary')}</span>
                            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
                        </button>
                        <button 
                            className='group inline-flex items-center justify-between gap-6 border-b border-white/35 bg-transparent px-0 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-white transition-all duration-300 hover:translate-x-1 md:text-base' 
                            onClick={handleScroll('app')}
                        >
                            <span>{t('hero.secondary')}</span>
                            <ChevronRight className="transition-transform group-hover:translate-x-1" size={18} />
                        </button>
                    </motion.div>

                    <div className="grid max-w-3xl gap-3 pt-1 sm:grid-cols-3">
                        {[
                            { label: t('hero.metrics.match'), value: '3x' },
                            { label: t('hero.metrics.fair'), value: '24/7' },
                            { label: t('hero.metrics.trust'), value: '100%' },
                        ].map((metric) => (
                            <div key={metric.label} className="rounded-2xl border border-white/12 bg-white/8 px-4 py-3 text-left backdrop-blur-md shadow-[0_14px_40px_rgba(0,0,0,0.12)] sm:text-center">
                                <div className="text-[1.9rem] font-semibold text-[#cbe56b] md:text-[2.25rem]">{metric.value}</div>
                                <p className="max-w-[12rem] text-[0.63rem] uppercase tracking-[0.24em] text-white/72 md:text-[0.72rem]">{metric.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-[#071612] to-transparent" />
        </div>
    )
}

const handleScroll = (id: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
};