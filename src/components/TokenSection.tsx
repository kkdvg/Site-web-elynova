import { motion } from 'framer-motion';
import { Coins, TrendingUp, HeartHandshake } from 'lucide-react';

interface TokenSectionProps {
  lang: 'en' | 'fr';
}

const cardData = {
  en: [
    { icon: Coins, title: 'Fair Mining', desc: 'An algorithm optimized for smartphones, ensuring a decentralized distribution.', glow: 'from-primary/20 to-cyan/20' },
    { icon: TrendingUp, title: 'ELY Tokens', desc: 'The native cryptocurrency at the heart of all transactions and rewards.', glow: 'from-accent/20 to-violet/20' },
    { icon: HeartHandshake, title: 'Global Vision', desc: 'A worldwide network of pioneer users building the future of mobile DeFi.', glow: 'from-emerald/20 to-green/20' },
  ],
  fr: [
    { icon: Coins, title: 'Minage Équitable', desc: 'Un algorithme optimisé pour les smartphones, garantissant une distribution décentralisée.', glow: 'from-primary/20 to-cyan/20' },
    { icon: TrendingUp, title: 'Tokens ELY', desc: 'La crypto-monnaie native au cœur de toutes les transactions et récompenses.', glow: 'from-accent/20 to-violet/20' },
    { icon: HeartHandshake, title: 'Vision Globale', desc: 'Un réseau mondial d\'utilisateurs pionniers construisant l\'avenir de la DeFi mobile.', glow: 'from-emerald/20 to-green/20' },
  ],
};

export default function TokenSection({ lang }: TokenSectionProps) {
  const cards = cardData[lang];

  return (
    <section id="token" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            {lang === 'en' ? 'The' : 'L\''} ELYNOVA{' '}
            <span className="text-gradient">{lang === 'en' ? 'Ecosystem' : 'Écosystème'}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {lang === 'en'
              ? 'An architecture designed for durability and accessibility, putting mining in everyone\'s hands.'
              : 'Une architecture pensée pour la durabilité et l\'accessibilité, mettant le minage entre les mains de tous.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`feature-card p-8 group cursor-default`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.glow} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3 text-foreground">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
