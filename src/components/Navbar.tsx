import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Globe, ExternalLink, Moon, Sun } from 'lucide-react';
import { translations } from '../translations';
import { useTheme } from '../context/ThemeContext';

interface Props {
  lang: 'en' | 'fr';
  toggleLang: () => void;
}

export default function Navbar({ lang, toggleLang }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang].nav;
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: t.home, path: '/' },
    { name: t.about, path: '/about' },
    { name: t.ecosystem, path: '/ecosystem' },
    { name: t.token, path: '/token' },
    { name: t.tokenomics, path: '/tokenomics' },
  ];

  const moreLinks = [
    { name: t.mining, path: '/mining' },
    { name: t.roadmap, path: '/roadmap' },
    { name: t.transparency, path: '/transparency' },
    { name: t.security, path: '/security' },
    { name: t.whitepaper, path: '/whitepaper' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-[#E5EAF2] dark:bg-[#0a1628]/90 dark:border-[#1e293b] transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/token_1767780195906-1jc-AAZZ.png" alt="ElyNova" className="w-10 h-10" />
          <span className="text-xl font-bold text-[#1746D2]">ElyNova</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="text-sm font-medium text-[#475467] hover:text-[#1746D2] transition-colors">
              {link.name}
            </Link>
          ))}

          <div className="relative group">
            <button className="text-sm font-medium text-[#475467] group-hover:text-[#1746D2] flex items-center gap-1">
              {lang === 'en' ? 'More' : 'Plus'}
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-[#E5EAF2] rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-2 dark:bg-[#0f1d32] dark:border-[#1e293b]">
              {moreLinks.map((link) => (
                <Link key={link.path} to={link.path} className="block px-4 py-2 text-sm text-[#475467] hover:bg-[#EFF4FF] hover:text-[#1746D2] dark:text-slate-300 dark:hover:bg-[#1e293b]">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <button onClick={toggleLang} className="p-2 text-[#475467] hover:bg-[#EFF4FF] rounded-lg transition-colors flex items-center gap-2 dark:text-slate-300 dark:hover:bg-[#1e293b]">
            <Globe size={18} />
            <span className="text-sm font-bold uppercase">{lang === 'en' ? 'FR' : 'EN'}</span>
          </button>
          <button onClick={toggleTheme} className="p-2 text-[#475467] hover:bg-[#EFF4FF] rounded-lg transition-colors" aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="https://t.me/ElyNova_bot?start=ref_6628765249" target="_blank" rel="noreferrer" className="btn-primary py-2 px-5 text-sm">
            {t.openApp}
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-[#172033]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-[#E5EAF2] px-6 py-8 flex flex-col gap-6 dark:bg-[#0f1d32] dark:border-[#1e293b]">
          {[...links, ...moreLinks].map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className="text-lg font-semibold text-[#172033] dark:text-[#f1f5f9]">
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t border-[#E5EAF2] dark:border-[#1e293b]">
            <div className="flex items-center gap-4">
              <button onClick={() => { toggleLang(); setIsOpen(false); }} className="flex items-center gap-2 text-[#172033] font-semibold dark:text-[#f1f5f9]">
                <Globe size={20} />
                {lang === 'en' ? 'Switch to French' : 'Passer en Anglais'}
              </button>
              <button onClick={() => { toggleTheme(); setIsOpen(false); }} className="ml-auto p-2 text-[#475467] hover:bg-[#EFF4FF] dark:hover:bg-[#1e293b] rounded-lg transition-colors" aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <a href="https://t.me/ElyNova_bot?start=ref_6628765249" target="_blank" rel="noreferrer" className="btn-primary w-full">
              {t.openApp}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
