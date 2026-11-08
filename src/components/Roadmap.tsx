import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Globe, Newspaper } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

const phases = {
  en: [
    { phase: 'Q1 2026', title: 'Foundation & Launch', items: ['Community platform launch', 'Community (50K+ users)', 'Token generation event', 'Bug bounty program'] },
    { phase: 'Q2 2026', title: 'Growth & Community', items: ['Referral program', 'First airdrop', 'Partnerships', 'Staking features'] },
    { phase: 'Q3 2026', title: 'Expansion', items: ['Multi-chain deployment', 'Mobile wallet', 'DEX listing', 'Governance voting'] },
    { phase: 'Q4 2026', title: 'Ecosystem', items: ['CEX listings', 'NFT marketplace', 'DeFi integrations', 'ElyNova DAO'] },
  ],
  fr: [
    { phase: 'T1 2026', title: 'Fondation & Lancement', items: ['Lancement plateforme communautaire', 'Communauté (50K+ users)', 'Événement génération token', 'Programme bug bounty'] },
    { phase: 'T2 2026', title: 'Croissance', items: ['Programme de parrainage', 'Premier airdrop', 'Partenariats', 'Fonctionnalités staking'] },
    { phase: 'T3 2026', title: 'Expansion', items: ['Déploiement multi-chaîne', 'Wallet mobile', 'Listing DEX', 'Vote gouvernance'] },
    { phase: 'T4 2026', title: 'Écosystème', items: ['Listings CEX', 'Marketplace NFT', 'Intégrations DeFi', 'DAO ElyNova'] },
  ],
};

const icons = [Rocket, TrendingUp, Globe, Newspaper];

export default function Roadmap({ lang }: Props) {
  const data = phases[lang];

  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">{lang === 'en' ? 'Roadmap' : 'Feuille de Route'}</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{lang === 'en' ? 'Our Journey' : 'Notre Parcours'}</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent hidden md:block" />

          <div className="space-y-8">
            {data.map((phase, i) => {
              const Icon = icons[i];
              return (
                <motion.div key={phase.phase} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                  className="relative flex gap-6 md:gap-12 items-start">
                  {/* Dot */}
                  <div className="hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10" />
                  <div className="md:hidden w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="ml-16 md:ml-0 flex-1 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">{phase.phase}</span>
                      <h3 className="font-bold text-lg text-slate-900">{phase.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
