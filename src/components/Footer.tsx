import { Link } from 'react-router-dom';
import { Mail, Send, Youtube } from 'lucide-react';
import { translations } from '../translations';

interface Props {
  lang: 'en' | 'fr';
}

export default function Footer({ lang }: Props) {
  const t = translations[lang].footer;

  return (
    <footer className="bg-[#172033] dark:bg-[#060b14] text-white pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/assets/token_1767780195906-1jc-AAZZ.png" alt="ElyNova" className="w-10 h-10" />
            <span className="text-2xl font-bold text-white">ElyNova</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-6 dark:text-slate-500">{t.tagline}</p>
          <div className="flex gap-3">
            <a href="https://t.me/elynova_official" target="_blank" rel="noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg hover:bg-[#D12B9A] transition-colors flex items-center justify-center"
              aria-label="Telegram">
              <Send size={18} />
            </a>
            <a href="https://www.youtube.com/@Elynova_official" target="_blank" rel="noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg hover:bg-[#D12B9A] transition-colors flex items-center justify-center"
              aria-label="YouTube">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm text-slate-400 mb-6 dark:text-slate-500">{lang === 'en' ? 'Navigation' : 'Navigation'}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link to="/" className="hover:text-white transition-colors">{lang === 'en' ? 'Home' : 'Accueil'}</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">{lang === 'en' ? 'About' : 'À propos'}</Link></li>
            <li><Link to="/ecosystem" className="hover:text-white transition-colors">{lang === 'en' ? 'Ecosystem' : 'Écosystème'}</Link></li>
            <li><Link to="/tokenomics" className="hover:text-white transition-colors">{lang === 'en' ? 'Tokenomics' : 'Tokenomics'}</Link></li>
            <li><Link to="/roadmap" className="hover:text-white transition-colors">{lang === 'en' ? 'Roadmap' : 'Feuille de route'}</Link></li>
            <li><Link to="/whitepaper" className="hover:text-white transition-colors">Whitepaper</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold uppercase tracking-wider text-sm text-slate-400 mb-6 dark:text-slate-500">{lang === 'en' ? 'Contact Us' : 'Contactez-nous'}</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><a href="mailto:jokalou51@gmail.com" className="hover:text-white transition-colors flex items-center gap-2"><Mail size={14} /> jokalou51@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 px-6 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} ElyNova. {t.rights} {lang === 'en' ? 'BUILD. PARTICIPATE. GROW.' : 'CONSTRUIRE. PARTICIPER. GRANDIR.'}
      </div>
    </footer>
  );
}
