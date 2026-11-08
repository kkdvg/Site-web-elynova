import { motion } from 'framer-motion';
import { Rocket, TrendingUp, Wallet, BarChart3, Zap } from 'lucide-react';

interface Props { lang: 'en' | 'fr'; }

const PHASES_EN = [
  { phase: 'Q1-Q2 2026', title: 'Foundation & Launch', status: 'completed', icon: Rocket, items: ['Community platform launch', 'Official ELY token generation on Solana', 'Bug bounty program launched'] },
  { phase: 'Nov 20, 2026', title: 'Withdrawal Phase', status: 'in_progress', icon: Wallet, items: ['First withdrawal cycle to Solana wallets', 'KYC-free verification process', 'Wallet linkage verification'] },
  { phase: 'Q1 2027', title: 'Market Listing', status: 'planned', icon: BarChart3, items: ['Official exchange listing (March 2027)', 'Liquidity pool initialization', 'Trading pairs activation'] },
  { phase: '2027+', title: 'Ecosystem Growth', status: 'planned', icon: Zap, items: ['NFT marketplace launch', 'DeFi protocol integrations', 'ElyNova DAO governance activation'] },
];

const PHASES_FR = [
  { phase: 'T1-T2 2026', title: 'Fondation & Lancement', status: 'completed', icon: Rocket, items: ['Lancement de la plateforme communautaire', 'Génération officielle du token ELY sur Solana', 'Programme bug bounty lancé'] },
  { phase: '20 Nov 2026', title: 'Phase de Retrait', status: 'in_progress', icon: Wallet, items: ['Premier cycle de retraits vers portefeuilles Solana', 'Processus de vérification sans KYC', 'Vérification du lien portefeuille'] },
  { phase: 'T1 2027', title: 'Listing Marché', status: 'planned', icon: BarChart3, items: ['Listing officiel sur échange (Mars 2027)', 'Initialisation des pools de liquidité', 'Activation des paires de trading'] },
  { phase: '2027+', title: 'Croissance Écosystème', status: 'planned', icon: Zap, items: ['Lancement marketplace NFT', 'Intégrations protocoles DeFi', 'Activation DAO ElyNova'] },
];

export default function RoadmapPage({ lang }: Props) {
  const phases = lang === 'en' ? PHASES_EN : PHASES_FR;
  const isEn = lang === 'en';

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">
          {isEn ? 'Roadmap' : 'Feuille de Route'}
        </h1>
        <p className="text-lg text-[#475467]">
          {isEn
            ? 'Key milestones for the ElyNova ecosystem development and growth.'
            : 'Jalons clés pour le développement et la croissance de l\'écosystème ElyNova.'}
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#1746D2] via-[#D12B9A] to-transparent hidden md:block" />

        <div className="space-y-8">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex gap-6 md:gap-12 items-start"
              >
                <div className={`hidden md:flex absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg z-10 ${
                  phase.status === 'completed' ? 'bg-emerald-500' :
                  phase.status === 'in_progress' ? 'bg-blue-500 animate-pulse' : 'bg-slate-300'
                }`} />
                <div className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  phase.status === 'completed' ? 'bg-emerald-500' :
                  phase.status === 'in_progress' ? 'bg-blue-500' : 'bg-slate-300'
                }`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div className="ml-16 md:ml-0 flex-1 card-white p-6 hover:border-[#1746D2]/30 transition-all">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      phase.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                      phase.status === 'in_progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {phase.status === 'completed' ? `✓ ${isEn ? 'Completed' : 'Terminé'}` :
                       phase.status === 'in_progress' ? `◌ ${isEn ? 'In Progress' : 'En cours'}` :
                       `○ ${isEn ? 'Planned' : 'Prévu'}`}
                    </span>
                    <h3 className="font-bold text-[#172033]">{phase.title}</h3>
                  </div>
                  <p className="text-xs text-[#475467] font-mono mb-4">{phase.phase}</p>
                  <ul className="space-y-2">
                    {phase.items.map(item => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#475467]">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                          phase.status === 'completed' ? 'bg-emerald-500' :
                          phase.status === 'in_progress' ? 'bg-blue-500' : 'bg-slate-300'
                        }`} />
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
  );
}
