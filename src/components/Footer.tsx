import { motion } from 'framer-motion';
import { Youtube, Send, Heart } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  lang: 'en' | 'fr';
}

export default function Footer({ lang }: FooterProps) {
  const [email, setEmail] = useState('');
  const [deleted, setDeleted] = useState(false);
  const [msg, setMsg] = useState('');

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDeleted(true);
    setMsg(lang === 'en' ? 'Request sent!' : 'Demande envoyée !');
    setTimeout(() => setDeleted(false), 3000);
  };

  return (
    <footer className="py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="font-display font-bold text-sm text-background">E</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight">ElyNova</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Mining made simple. Join the mobile crypto revolution and earn ELY tokens from your smartphone.'
                : 'Le minage rendu simple. Rejoignez la révolution crypto mobile et gagnez des tokens ELY depuis votre smartphone.'}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.youtube.com/@Elynova1" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-[#ff0000] hover:border-[#ff0000]/30 transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://t.me/elynova_official" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-[#26A5E4] hover:border-[#26A5E4]/30 transition-all">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-4">
              {lang === 'en' ? 'Quick Links' : 'Liens Rapides'}
            </h4>
            <ul className="space-y-3">
              {['#hero', '#token', '#features', '#roadmap', '#team', '#cta'].map(href => {
                const item = lang === 'en'
                  ? [{ href: '#hero', label: 'Home' }, { href: '#token', label: 'Token' }, { href: '#features', label: 'Features' }, { href: '#roadmap', label: 'Roadmap' }, { href: '#team', label: 'Team' }, { href: '#cta', label: 'Download' }]
                  : [{ href: '#hero', label: 'Accueil' }, { href: '#token', label: 'Token' }, { href: '#features', label: 'Fonctionnalités' }, { href: '#roadmap', label: 'Feuille de Route' }, { href: '#team', label: 'Équipe' }, { href: '#cta', label: 'Télécharger' }];
                const found = item.find(i => i.href === href);
                return found ? (
                  <li key={href}>
                    <a href={href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {found.label}
                    </a>
                  </li>
                ) : null;
              })}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-foreground/60 mb-4">
              {lang === 'en' ? 'Legal' : 'Juridique'}
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{lang === 'en' ? 'Privacy Policy' : 'Politique de confidentialité'}</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">{lang === 'en' ? 'Terms of Service' : 'Conditions d\'utilisation'}</a></li>
              <li>
                <a href="mailto:contact@elynova.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  contact@elynova.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Account deletion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/5 pt-8 mb-8"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-sm text-foreground/80">{lang === 'en' ? 'Delete My Account' : 'Supprimer mon compte'}</h4>
              <p className="text-xs text-muted-foreground mt-1">{lang === 'en' ? 'We respect your privacy. No data is stored without consent.' : 'Nous respectons votre vie privée. Aucune donnée n\'est stockée sans consentement.'}</p>
            </div>
            <form onSubmit={handleDelete} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={lang === 'en' ? 'Your email' : 'Ton email'}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 w-48"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium hover:bg-red-500/20 transition-colors"
              >
                {lang === 'en' ? 'Delete' : 'Supprimer'}
              </button>
            </form>
          </div>
          {msg && (
            <motion.p
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm text-emerald-glow mt-2"
            >
              {msg}
            </motion.p>
          )}
        </motion.div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} ElyNova. {lang === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
          <p className="flex items-center gap-1">
            {lang === 'en' ? 'Made with' : 'Fait avec'} <Heart className="w-3 h-3 text-red-500" /> {lang === 'en' ? 'for the community' : 'pour la communauté'}
          </p>
        </div>
      </div>
    </footer>
  );
}
