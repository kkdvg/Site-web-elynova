import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Menu, X, Globe } from 'lucide-react';

interface Props {
  scrolled: boolean;
  lang: 'en' | 'fr';
  toggleLang: () => void;
}

const nav = {
  en: [
    { href: '#hero', label: 'Home' },
    { href: '#features', label: 'Features' },
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#roadmap', label: 'Roadmap' },
    { href: '#team', label: 'Team' },
  ],
  fr: [
    { href: '#hero', label: 'Accueil' },
    { href: '#features', label: 'Fonctionnalités' },
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#roadmap', label: 'Feuille de Route' },
    { href: '#team', label: 'Équipe' },
  ],
};

export default function Navbar({ scrolled, lang, toggleLang }: Props) {
  const [open, setOpen] = useState(false);
  const items = nav[lang];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-slate-100' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3" onClick={(e) => handleClick(e, '#hero')}>
          <img src="/assets/token_1767780195906-1jc-AAZZ.png" alt="ElyNova" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold text-slate-900">ElyNova</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {items.map(item => (
            <a key={item.href} href={item.href} onClick={(e) => handleClick(e, item.href)}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="flex items-center gap-2 px-3 py-2 text-sm text-slate-500 hover:text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
            <Globe className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'en' ? 'FR' : 'EN'}</span>
          </button>

          <a href="#cta" onClick={(e) => handleClick(e, '#cta')}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg active:scale-95">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">{lang === 'en' ? 'Download' : 'Télécharger'}</span>
          </a>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {items.map(item => (
                <a key={item.href} href={item.href} onClick={(e) => handleClick(e, item.href)}
                  className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
