import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  scrolled: boolean;
  lang: 'en' | 'fr';
  toggleLang: () => void;
}

const navItems = {
  en: [
    { href: '#hero', label: 'Home' },
    { href: '#token', label: 'Token' },
    { href: '#features', label: 'Features' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#vision', label: 'Vision' },
    { href: '#team', label: 'Team' },
    { href: '#cta', label: 'Download' },
  ],
  fr: [
    { href: '#hero', label: 'Accueil' },
    { href: '#token', label: 'Token' },
    { href: '#features', label: 'Fonctionnalités' },
    { href: '#roadmap', label: 'Feuille de Route' },
    { href: '#vision', label: 'Vision' },
    { href: '#team', label: 'Équipe' },
    { href: '#cta', label: 'Télécharger' },
  ],
};

const socialLinks = {
  youtube: 'https://www.youtube.com/@Elynova1',
  telegram: 'https://t.me/elynova_official',
};

export default function Navbar({ scrolled, lang, toggleLang }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = navItems[lang];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '#hero')}>
            <img
              src="/assets/token_1767780195906-1jc-AAZZ.png"
              alt="ElyNova"
              className="w-8 h-8 rounded-lg object-contain group-hover:scale-110 transition-transform"
            />
            <span className="font-bold text-xl tracking-tight text-slate-900">ElyNova</span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {items.slice(0, -1).map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'en' ? 'FR' : 'EN'}</span>
            </button>

            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href={socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-blue-500 transition-colors rounded-lg hover:bg-blue-50">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>

            <a
              href="#cta"
              onClick={(e) => handleNavClick(e, '#cta')}
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-semibold text-sm rounded-full hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95 ml-2"
            >
              <Download className="w-4 h-4" />
              {lang === 'en' ? 'Download' : 'Télécharger'}
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200 p-4 md:hidden shadow-xl"
          >
            <div className="flex flex-col space-y-1">
              {items.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-medium text-slate-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
