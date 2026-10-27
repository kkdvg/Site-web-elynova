import { motion } from 'framer-motion';
import { Smartphone, Gift, Users, Layout, Brain, Shield } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

const data = {
  en: [
    { icon: Smartphone, title: 'Mobile Mining', desc: 'Start mining with a single tap. No complex setup, no technical knowledge required.' },
    { icon: Gift, title: 'Regular Airdrops', desc: 'Earn extra tokens through exclusive airdrops and community events.' },
    { icon: Users, title: 'Referral Program', desc: 'Invite friends and earn bonus tokens for every successful referral.' },
    { icon: Layout, title: 'Easy Interface', desc: 'Clean, intuitive design that anyone can use from day one.' },
    { icon: Brain, title: 'Smart Ecosystem', desc: 'AI-optimized mining algorithms that maximize your earnings efficiently.' },
    { icon: Shield, title: 'Bank-grade Security', desc: 'Your data and assets are protected with industry-leading security measures.' },
  ],
  fr: [
    { icon: Smartphone, title: 'Minage Mobile', desc: 'Commencez à miner d\'une simple pression. Pas de configuration complexe, aucune connaissance technique requise.' },
    { icon: Gift, title: 'Airdrops Réguliers', desc: 'Gagnez des tokens supplémentaires grâce aux airdrops exclusifs et aux événements communautaires.' },
    { icon: Users, title: 'Programme de Parrainage', desc: 'Invitez des amis et gagnez des tokens bonus pour chaque parrainage réussi.' },
    { icon: Layout, title: 'Interface Simple', desc: 'Un design clair et intuitif que tout le monde peut utiliser dès le premier jour.' },
    { icon: Brain, title: 'Écosystème Intelligent', desc: 'Algorithmes de minage optimisés par IA qui maximisent vos gains efficacement.' },
    { icon: Shield, title: 'Sécurité Bancaire', desc: 'Vos données et actifs sont protégés par les mesures de sécurité les plus avancées.' },
  ],
};

export default function Features({ lang }: Props) {
  const items = data[lang];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">{lang === 'en' ? 'Features' : 'Fonctionnalités'}</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{lang === 'en' ? 'Everything You Need to Mine' : 'Tout ce dont vous avez besoin pour miner'}</h2>
          <p className="text-lg text-slate-600">{lang === 'en' ? 'Powerful features designed for both beginners and crypto enthusiasts.' : 'Des fonctionnalités puissantes conçues pour les débutants comme les passionnés de crypto.'}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
