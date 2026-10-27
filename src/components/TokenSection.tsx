import { motion } from 'framer-motion';
import { Coins, TrendingUp, HeartHandshake } from 'lucide-react';

export default function TokenSection({ lang }: { lang: 'en' | 'fr' }) {
  const cards = {
    en: [
      { icon: Coins, title: 'Fair Mining', desc: 'An algorithm optimized for smartphones, ensuring a decentralized distribution.', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
      { icon: TrendingUp, title: 'ELY Tokens', desc: 'The native cryptocurrency at the heart of all transactions and rewards.', iconBg: 'bg-violet-100', iconColor: 'text-violet-600' },
      { icon: HeartHandshake, title: 'Global Vision', desc: 'A worldwide network of pioneer users building the future of mobile DeFi.', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
    ],
    fr: [
      { icon: Coins, title: 'Minage Équitable', desc: 'Un algorithme optimisé pour les smartphones, garantissant une distribution décentralisée.', iconBg: 'bg-blue-100', iconColor: 'text-blue-600' },
      { icon: TrendingUp, title: 'Tokens ELY', desc: 'La crypto-monnaie native au cœur de toutes les transactions et récompenses.', iconBg: 'bg-violet-100', iconColor: 'text-violet-600' },
      { icon: HeartHandshake, title: 'Vision Globale', desc: 'Un réseau mondial d\'utilisateurs pionniers construisant l\'avenir de la DeFi mobile.', iconBg: 'bg-emerald-100', iconColor: 'text-emerald-600' },
    ],
  }[lang];

  return (
    <section id="token" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            {lang === 'en' ? 'Our Token' : 'Notre Token'}
          </span>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            {lang === 'en' ? 'The' : 'L\''} ELYNOVA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {lang === 'en' ? 'Ecosystem' : 'Écosystème'}
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'An architecture designed for durability and accessibility, putting mining in everyone\'s hands.'
              : 'Une architecture pensée pour la durabilité et l\'accessibilité, mettant le minage entre les mains de tous.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 card-shadow hover:border-blue-200 hover:shadow-blue-100 transition-all duration-300 cursor-default"
            >
              <div className={`w-14 h-14 rounded-2xl ${card.iconBg} flex items-center justify-center mb-6`}>
                <card.icon className={`w-7 h-7 ${card.iconColor}`} />
              </div>
              <h3 className="font-bold text-xl mb-3 text-slate-900">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
