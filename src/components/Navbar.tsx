import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { ChevronDown, Store, UserPlus } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export function Navbar() {
    const { t } = useTranslation();
    const [authOpen, setAuthOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-gradient-to-b from-[#f5f2eb]/96 to-[#f5f2eb]/70 px-2 pt-2 sm:px-4 md:px-6">
            <nav className="mx-auto flex max-w-[min(96vw,88rem)] items-center justify-between border-b border-forest-green/8 bg-transparent px-2 py-3 text-forest-green backdrop-blur-sm md:px-3 md:py-3" >
            <Link to="/" className="select-none leading-none transition-transform duration-300 hover:scale-[1.01]">
                <span className="block font-serif text-[1.55rem] font-medium tracking-[0.08em] text-forest-green md:text-[1.75rem]">
                    Muusmart
                </span>
            </Link>
            <div className='flex items-center gap-3 md:gap-4'>
                <ul className="hidden md:flex items-center gap-4 font-medium text-[0.73rem] lg:text-[0.78rem] tracking-[0.12em] uppercase text-forest-green/78">
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("aboutus")}>{t('navbar.about')}</li>
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("fair")}>{t('navbar.fair')}</li>
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("features")}>{t('navbar.features')}</li>
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("prices")}>{t('navbar.prices')}</li>
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("app")}>{t('navbar.getapp')}</li>
                </ul>
                
                {/* Auth Menu - Desktop */}
                <div className="relative hidden md:block">
                    <button
                        type="button"
                        onClick={() => setAuthOpen((value) => !value)}
                        className="inline-flex items-center gap-2 rounded-full bg-forest-green px-3.5 py-2 text-[0.78rem] font-semibold text-white transition-all duration-300 hover:bg-lime-neon hover:text-forest-green"
                    >
                        {t('auth.menu.title', { defaultValue: 'Acceso' })}
                        <ChevronDown size={14} className={`${authOpen ? 'rotate-180' : ''} transition-transform`} />
                    </button>

                    {authOpen && (
                        <>
                            <button
                                type="button"
                                className="fixed inset-0 z-40"
                                onClick={() => setAuthOpen(false)}
                                aria-label="Cerrar acceso"
                            />
                            <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-forest-green/10 bg-[#f8f6ef]/95 p-2 shadow-[0_18px_40px_rgba(23,55,47,0.12)] backdrop-blur-xl">
                                <a
                                    href="https://marketplacemuusmart.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-white bg-forest-green transition-all duration-300 hover:bg-lime-neon hover:text-forest-green"
                                    onClick={() => setAuthOpen(false)}
                                >
                                    <Store size={15} />
                                    Marketplace
                                </a>
                                <a
                                    href="https://muusmart.netlify.app/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-forest-green transition-colors hover:bg-lime-neon/10 hover:text-lime-neon"
                                    onClick={() => setAuthOpen(false)}
                                >
                                    <UserPlus size={15} />
                                    {t('auth.register.title')}
                                </a>
                            </div>
                        </>
                    )}
                </div>

                <div className='flex items-center gap-3'>
                    <LanguageSelector />
                    <Sidebar />
                </div>
            </div>
            </nav>
        </div>
    )
}

function Sidebar() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);

    return (
        <div className="md:hidden">
            <MenuIcon 
                onClick={() => setOpen(true)} 
                className="cursor-pointer text-forest-green hover:text-lime-neon transition-colors" 
            />
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="right"
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            width: '280px'
                        }
                    }
                }}
            >
                <div className="p-6 space-y-6">
                    {/* Mobile Menu Items */}
                    <ul className="flex flex-col gap-3 font-medium text-forest-green">
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("aboutus")}>{t('navbar.about')}</li>
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("fair")}>{t('navbar.fair')}</li>
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("features")}>{t('navbar.features')}</li>
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("prices")}>{t('navbar.prices')}</li>
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("app")}>{t('navbar.getapp')}</li>
                    </ul>
                    
                    {/* Mobile Auth Buttons */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-forest-green/20">
                        <button
                            type="button"
                            className="flex items-center justify-between rounded-full bg-forest-green px-4 py-3 text-sm font-semibold text-white"
                            onClick={() => setAuthOpen((value) => !value)}
                        >
                            {t('auth.menu.title', { defaultValue: 'Acceso' })}
                            <ChevronDown size={16} />
                        </button>
                        {authOpen && (
                            <div className="space-y-2 rounded-2xl border border-forest-green/10 bg-white/70 p-2 backdrop-blur-sm">
                                <a
                                    href="https://marketplacemuusmart.netlify.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white bg-forest-green hover:bg-lime-neon hover:text-forest-green transition-all duration-300"
                                    onClick={() => setOpen(false)}
                                >
                                    <Store size={18} />
                                    Marketplace
                                </a>
                                <a 
                                    href="https://vacapp.netlify.app/register"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-white bg-forest-green hover:bg-lime-neon hover:text-forest-green transition-all duration-300"
                                    onClick={() => setOpen(false)}
                                >
                                    <UserPlus size={18} />
                                    {t('auth.register.title')}
                                </a>
                            </div>
                        )}
                        
                        {/* Language Selector for Mobile */}
                        <div className="pt-4 border-t border-forest-green/20">
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

const handleScroll = (id: string) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
};