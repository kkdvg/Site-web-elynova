import { Youtube, Send } from 'lucide-react';
import { useState } from 'react';

interface Props {
  lang: 'en' | 'fr';
}

export default function Footer({ lang }: Props) {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setMsg(lang === 'en' ? 'Request sent!' : 'Demande envoyée !');
    setTimeout(() => setMsg(''), 3000);
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/assets/token_1767780195906-1jc-AAZZ.png" alt="ElyNova" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-white">ElyNova</span>
            </div>
            <p className="text-sm max-w-sm mb-6">{lang === 'en' ? 'Mining made simple. Join the mobile crypto revolution.' : 'Le minage rendu simple. Rejoignez la révolution crypto mobile.'}</p>
            <div className="flex gap-3">
              <a href="https://www.youtube.com/@Elynova1" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 hover:bg-red-500/20 hover:text-red-500 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="https://t.me/elynova_official" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-500/20 hover:text-blue-400 transition-colors"><Send className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">{lang === 'en' ? 'Links' : 'Liens'}</h4>
            <ul className="space-y-3 text-sm">
              {['#hero', '#features', '#tokenomics', '#roadmap', '#team'].map(href => (
                <li key={href}><a href={href} className="hover:text-white transition-colors">{lang === 'en' ? href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1) : href.replace('#', '')}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">{lang === 'en' ? 'Legal' : 'Juridique'}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy Policy' : 'Confidentialité'}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms of Service' : 'Conditions'}</a></li>
              <li><a href="mailto:contact@elynova.com" className="hover:text-white transition-colors">contact@elynova.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} ElyNova. {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            {lang === 'en' ? 'Made with' : 'Fait avec'} <span className="text-red-500">&hearts;</span> {lang === 'en' ? 'for the community' : 'pour la communauté'}
          </div>
        </div>
      </div>
    </footer>
  );
}
