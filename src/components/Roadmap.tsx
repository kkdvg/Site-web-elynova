import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Globe, Newspaper } from 'lucide-react';

interface RoadmapProps {
  lang: 'en' | 'fr';
}

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

export default function Roadmap({ lang }: RoadmapProps) {
  const phases = roadmapData[lang];

  return (
    <section id="roadmap" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            <span className="text-gradient">{lang === 'en' ? 'Roadmap' : 'Feuille de Route'}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {lang === 'en' ? 'The evolution of ElyNova towards success.' : 'L\'évolution d\'ElyNova vers le succès.'}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

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
                {/* Dot on timeline */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-2 ${phase.status === 'active' ? 'bg-primary border-primary shadow-[0_0_15px_rgba(6,182,212,0.8)]' : 'bg-background border-muted-foreground'} -translate-x-1/2 z-10`} />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`feature-card p-6 ${phase.status === 'active' ? 'border-primary/30 bg-primary/5' : ''}`}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 ${phase.status === 'active' ? 'bg-primary/20 text-primary' : 'bg-secondary/50 text-muted-foreground'}`}>
                      <Icon className="w-3 h-3" />
                      {phase.phase}
                    </div>
                    <h3 className="font-display font-bold text-xl mb-2 text-foreground">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{phase.dates}</p>
                    <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                      {phase.items.map(item => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground/80">
                          {!isLeft && <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />}
                          {item}
                          {isLeft && <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 ml-auto" />}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          {lang === 'en'
            ? 'Note: The roadmap may be modified depending on market conditions.'
            : 'Note : La feuille de route peut être modifiée selon les conditions du marché.'}
        </motion.p>
      </div>
    </section>
  );
}
