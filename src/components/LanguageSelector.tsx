import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' }
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-lime-neon/10 transition-all duration-300 group"
      >
        <Globe className="text-forest-green group-hover:text-lime-neon transition-colors" size={18} />
        <span className="text-forest-green group-hover:text-lime-neon font-medium text-sm">
          {currentLanguage.name}
        </span>
        <ChevronDown 
          className={`text-forest-green group-hover:text-lime-neon transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
          size={16} 
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-full right-0 mt-2 bg-white/95 backdrop-blur-sm border border-forest-green/20 rounded-xl shadow-xl z-50 overflow-hidden animate-scale-in">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-lime-neon/10 transition-all duration-200 ${
                  currentLanguage.code === language.code
                    ? 'bg-lime-neon/20 text-forest-green font-semibold'
                    : 'text-forest-green/80 hover:text-forest-green'
                }`}
              >
                <span className="font-mulish">{language.name}</span>
                {currentLanguage.code === language.code && (
                  <div className="ml-auto w-2 h-2 bg-lime-neon rounded-full" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}