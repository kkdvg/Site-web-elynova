import { motion } from 'framer-motion';
import { Smartphone, Gift, Users, Layout, Brain, Shield } from 'lucide-react';

export default function Features({ lang }: { lang: 'en' | 'fr' }) {
  const features = {
    en: [
      { icon: Smartphone, title: 'Simple Mobile Mining', desc: 'Activate your mining with one click and earn ELY tokens automatically.' },
      { icon: Gift, title: 'Regular Airdrops', desc: 'Participate in token distributions to reward your loyalty.' },
      { icon: Users, title: 'Referral System', desc: 'Invite your friends and increase your earning potential with bonuses.' },
      { icon: Layout, title: 'Intuitive Interface', desc: 'Lightweight, smooth, and easy-to-use app suited for everyone.' },
      { icon: Brain, title: 'Active Community', desc: 'Join an engaged community with exclusive rewards.' },
      { icon: Shield, title: 'Advanced Technology', desc: 'Secure infrastructure optimized for the best experience.' },
    ],
    fr: [
      { icon: Smartphone, title: 'Minage Mobile Simple', desc: 'Active ton minage en un seul clic et gagne des tokens ELY automatiquement.' },
      { icon: Gift, title: 'Airdrops Réguliers', desc: 'Participe à des distributions de tokens pour récompenser ta fidélité.' },
      { icon: Users, title: 'Système de Parrainage', desc: 'Invite tes amis et augmente ton potentiel de gains avec des bonus.' },
      { icon: Layout, title: 'Interface Intuitive', desc: 'Application légère, fluide et facile à utiliser, adaptée à tous.' },
      { icon: Brain, title: 'Communauté Active', desc: 'Rejoins une communauté engagée avec des récompenses exclusives.' },
      { icon: Shield, title: 'Technologie Avancée', desc: 'Infrastructure sécurisée et optimisée pour la meilleure expérience.' },
    ],
  }[lang];

  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            {lang === 'en' ? 'What We Offer' : 'Ce que nous offrons'}
          </span>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              {lang === 'en' ? 'Core Features' : 'Fonctionnalités'}
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {lang === 'en'
              ? 'An intuitive, lightweight, and high-performance application for everyone.'
              : 'Une application intuitive, légère et performante pour tous.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 card-shadow hover:border-blue-200 hover:shadow-blue-100 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-slate-900">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
