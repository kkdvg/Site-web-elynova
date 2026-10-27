import { motion } from 'framer-motion';
import { Smartphone, Gift, Users, Layout, Brain, Shield } from 'lucide-react';

interface FeaturesProps {
  lang: 'en' | 'fr';
}

const featuresData = {
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
};

export default function Features({ lang }: FeaturesProps) {
  const features = featuresData[lang];

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            <span className="text-gradient">{lang === 'en' ? 'Core Features' : 'Fonctionnalités'}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
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
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="feature-card p-6 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-5 group-hover:from-primary/40 group-hover:to-accent/40 transition-all duration-300">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
