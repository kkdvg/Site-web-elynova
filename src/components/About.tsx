import { motion } from 'framer-motion';
import { Globe2, ShieldCheck, HeartHandshake, Target } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

export default function About({ lang }: Props) {
  const content = {
    en: {
      tag: 'About ElyNova',
      title: 'Building the Future of Web3 in Emerging Markets',
      desc: 'ElyNova is a community-driven blockchain initiative designed to bring accessible crypto participation to users worldwide.',
      cards: [
        { icon: Target, title: 'Our Vision & Mission', desc: 'To democratize access to digital assets and mobile mining, empowering individuals with user-friendly blockchain tools.' },
        { icon: HeartHandshake, title: 'Core Values', desc: 'Transparency, community participation, accountability, and sustainable growth without financial guarantees or hype.' },
        { icon: ShieldCheck, title: 'Strict Transparency', desc: 'We only present operational features and verified on-chain data. No unrealistic promises or unverified claims.' },
      ],
    },
    fr: {
      tag: 'À propos d’ElyNova',
      title: 'Construire l’Avenir du Web3 dans les Marchés Émergents',
      desc: 'ElyNova est une initiative blockchain communautaire conçue pour apporter une participation crypto accessible aux utilisateurs du monde entier.',
      cards: [
        { icon: Target, title: 'Vision & Mission', desc: 'Démocratiser l’accès aux actifs numériques et au minage mobile, en donnant aux individus des outils blockchain conviviaux.' },
        { icon: HeartHandshake, title: 'Valeurs Clés', desc: 'Transparence, participation communautaire, responsabilité et croissance durable sans promesses de rendement financier.' },
        { icon: ShieldCheck, title: 'Transparence Stricte', desc: 'Nous ne présentons que les fonctionnalités opérationnelles et les données on-chain vérifiées. Aucune promesse irréaliste.' },
      ],
    },
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-[#1746D2] uppercase tracking-wider mb-4 block">{t.tag}</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">{t.title}</h2>
          <p className="text-lg text-slate-600 leading-relaxed">{t.desc}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#EFF4FF]/50 border border-[#E5EAF2] hover:border-[#1746D2]/30 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#1746D2]/10 flex items-center justify-center mb-4 group-hover:bg-[#1746D2] transition-colors">
                <card.icon className="w-6 h-6 text-[#1746D2] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-[#172033] mb-2">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
