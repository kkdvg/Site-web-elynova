import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Globe, Newspaper } from 'lucide-react';

const roadmapData = {
  en: [
    { phase: 'Q1 2026', title: 'Foundation & Launch', dates: 'January - March 2026', icon: Rocket, status: 'active', items: ['App launch on iOS & Android', 'Community building (50K+ users)', 'Token generation event', 'Bug bounty program'] },
    { phase: 'Q2 2026', title: 'Growth & Community', dates: 'April - June 2026', icon: TrendingUp, status: 'upcoming', items: ['Referral program launch', 'First airdrop distribution', 'Partnership announcements', 'Staking features'] },
    { phase: 'Q3 2026', title: 'Expansion', dates: 'July - September 2026', icon: Globe, status: 'upcoming', items: ['Multi-chain deployment', 'Mobile wallet release', 'DEX listing', 'Governance voting'] },
    { phase: 'Q4 2026', title: 'Tokenomics & Ecosystem', dates: 'October - December 2026', icon: Newspaper, status: 'upcoming', items: ['CEX listings', 'NFT marketplace beta', 'DeFi integrations', 'ElyNova DAO launch'] },
  ],
  fr: [
    { phase: 'T1 2026', title: 'Fondation & Lancement', dates: 'Janvier - Mars 2026', icon: Rocket, status: 'active', items: ['Lancement de l\'app iOS & Android', 'Construction communautaire (50K+ users)', 'Événement de génération de token', 'Programme bug bounty'] },
    { phase: 'T2 2026', title: 'Croissance', dates: 'Avril - Juin 2026', icon: TrendingUp, status: 'upcoming', items: ['Lancement programme de parrainage', 'Premier airdrop', 'Annonces de partenariats', 'Fonctionnalités de staking'] },
    { phase: 'T3 2026', title: 'Expansion', dates: 'Juillet - Septembre 2026', icon: Globe, status: 'upcoming', items: ['Déploiement multi-chaîne', 'Sortie du wallet mobile', 'Listing DEX', 'Vote de gouvernance'] },
    { phase: 'T4 2026', title: 'Écosystème', dates: 'Octobre - Décembre 2026', icon: Newspaper, status: 'upcoming', items: ['Listings CEX', 'Bêta marketplace NFT', 'Intégrations DeFi', 'Lancement ElyNova DAO'] },
  ],
};

export default function Roadmap({ lang }: { lang: 'en' | 'fr' }) {
  const phases = roadmapData[lang];

  return (
    <section id="roadmap" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            {lang === 'en' ? 'Our Path' : 'Notre chemin'}
          </span>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            {lang === 'en' ? 'Roadmap' : 'Feuille de Route'}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {lang === 'en' ? 'The evolution of ElyNova towards success.' : 'L\'évolution d\'ElyNova vers le succès.'}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

          {phases.map((phase, i) => {
            const Icon = phase.icon;
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-start gap-8 mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 -translate-x-1/2 z-10 ${phase.status === 'active' ? 'border-blue-500 bg-white shadow-lg shadow-blue-200' : 'border-slate-300 bg-white'}`} />

                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`p-6 rounded-2xl bg-white border ${phase.status === 'active' ? 'border-blue-200 shadow-lg shadow-blue-50' : 'border-slate-100 card-shadow'} transition-all`}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 ${phase.status === 'active' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-500'}`}>
                      <Icon className="w-3 h-3" />
                      {phase.phase}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-slate-900">{phase.title}</h3>
                    <p className="text-sm text-slate-500 mb-4">{phase.dates}</p>
                    <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                      {phase.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                          {!isLeft && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />}
                          {item}
                          {isLeft && <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 ml-auto" />}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 mt-8"
        >
          {lang === 'en'
            ? 'Note: The roadmap may be modified depending on market conditions.'
            : 'Note : La feuille de route peut être modifiée selon les conditions du marché.'}
        </motion.p>
      </div>
    </section>
  );
}
