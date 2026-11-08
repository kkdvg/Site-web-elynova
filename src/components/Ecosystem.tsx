import { motion } from 'framer-motion';
import { Smartphone, Users, Coins, Sparkles } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

export default function Ecosystem({ lang }: Props) {
  const content = {
    en: {
      tag: 'Ecosystem',
      title: 'The ElyNova Ecosystem',
      desc: 'Discover our core pillars built for seamless participation, community growth, and blockchain transparency.',
      items: [
        { icon: Smartphone, status: 'Available', statusColor: 'bg-emerald-100 text-emerald-700', title: 'ElyNova Mining', desc: 'Community mobile mining application. Engage in daily cycles, complete missions, and earn rewards securely.' },
        { icon: Users, status: 'Active', statusColor: 'bg-blue-100 text-blue-700', title: 'ElyNova Community', desc: 'Information channels, participatory governance initiatives, and global community growth across 3 continents.' },
        { icon: Coins, status: 'On Solana', statusColor: 'bg-violet-100 text-violet-700', title: 'ELY Token', desc: 'The native digital asset powering the ecosystem with a fixed total supply of 350,000,000 ELY.' },
        { icon: Sparkles, status: 'In Development', statusColor: 'bg-amber-100 text-amber-700', title: 'Future Integrations', desc: 'Advanced DeFi integrations, staking mechanisms, and ecosystem expansions currently in development.' },
      ],
    },
    fr: {
      tag: 'Écosystème',
      title: 'L’Écosystème ElyNova',
      desc: 'Découvrez nos piliers fondamentaux conçus pour une participation fluide, la croissance communautaire et la transparence blockchain.',
      items: [
        { icon: Smartphone, status: 'Disponible', statusColor: 'bg-emerald-100 text-emerald-700', title: 'ElyNova Mining', desc: 'Application de minage communautaire mobile. Cycles quotidiens, missions et récompenses en toute sécurité.' },
        { icon: Users, status: 'Actif', statusColor: 'bg-blue-100 text-blue-700', title: 'ElyNova Community', desc: 'Canaux d’information, initiatives participatives et développement de la communauté sur 3 continents.' },
        { icon: Coins, status: 'Sur Solana', statusColor: 'bg-violet-100 text-violet-700', title: 'Token ELY', desc: 'Actif numérique natif alimentant l’écosystème avec une offre totale fixe de 350 000 000 ELY.' },
        { icon: Sparkles, status: 'En développement', statusColor: 'bg-amber-100 text-amber-700', title: 'Intégrations Futures', desc: 'Intégrations DeFi avancées, mécanismes de staking et expansions de l’écosystème en cours de développement.' },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="ecosystem" className="py-24 bg-[#EFF4FF]/40">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[#1746D2] uppercase tracking-wider mb-4 block">{t.tag}</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">{t.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{t.desc}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-[#E5EAF2] hover:border-[#1746D2]/30 hover:shadow-xl transition-all relative overflow-hidden group">
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.statusColor}`}>{item.status}</span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-[#1746D2]/10 flex items-center justify-center mb-6 group-hover:bg-[#1746D2] transition-colors">
                <item.icon className="w-7 h-7 text-[#1746D2] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-xl text-[#172033] mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
