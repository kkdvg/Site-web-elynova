import { motion } from 'framer-motion';
import { Smartphone, Zap, Users, ShieldCheck, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroProps {
  lang: 'en' | 'fr';
}

const heroData = {
  en: {
    badge: 'Limited access — 500k users',
    title_prefix: 'Mine ELY,',
    title_suffix: 'The Future is Mobile',
    desc: 'ELYNOVA lets you mine directly from your smartphone without battery drain. Earn ELY tokens and join an exclusive community. Note: inactive accounts over one month will be permanently deleted.',
    cta: 'Start Mining Now',
    stat1: 'No Battery',
    stat2: 'Free',
    stat3: 'Secure',
    app_title: 'Active Mining',
    app_duration: 'Duration',
    app_friends: 'Friends',
  },
  fr: {
    badge: 'Accès limité à 500k utilisateurs',
    title_prefix: 'Mine ELY,',
    title_suffix: 'L\'Avenir est Mobile',
    desc: 'ELYNOVA vous permet de miner directement depuis votre smartphone sans consommation de batterie. Gagnez des tokens ELY et rejoignez une communauté exclusive. Note : les comptes inactifs pendant plus d\'un mois seront supprimés définitivement.',
    cta: 'Commencer maintenant',
    stat1: 'Pas de batterie',
    stat2: 'Gratuit',
    stat3: 'Sécurisé',
    app_title: 'Minage Actif',
    app_duration: 'Durée',
    app_friends: 'Amis',
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = heroData[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_70%)]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t.badge}
            </div>

            <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              <span className="text-foreground">{t.title_prefix}</span>
              <br />
              <span className="text-gradient">{t.title_suffix}</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              {t.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-accent text-background font-bold rounded-2xl overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3">
                  <Zap className="w-5 h-5" />
                  {t.cta}
                </span>
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/10 text-foreground font-medium rounded-2xl hover:bg-white/5 transition-all"
              >
                {lang === 'en' ? 'Learn More' : 'En savoir plus'}
              </motion.a>
            </div>

            {/* Stats row */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              {[
                { icon: Zap, label: t.stat1, color: 'text-primary' },
                { icon: ShieldCheck, label: t.stat2, color: 'text-emerald-glow' },
                { icon: Users, label: t.stat3, color: 'text-accent' },
              ].map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-2"
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-sm text-muted-foreground">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={visible ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 md:w-80">
              {/* Glow behind phone */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-[3rem] blur-[60px] scale-110" />

              {/* Phone frame */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full aspect-[9/19] rounded-[2.5rem] bg-gradient-to-b from-slate-800 to-slate-900 border border-white/10 shadow-2xl overflow-hidden"
              >
                {/* Screen */}
                <div className="absolute inset-3 rounded-[2rem] bg-background overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 py-3 text-xs text-muted-foreground">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 border border-current rounded-sm" />
                    </div>
                  </div>
                  {/* App content */}
                  <div className="px-4 py-6 space-y-6">
                    {/* Logo */}
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="font-display font-bold text-background text-lg">E</span>
                      </div>
                      <span className="font-display font-bold text-xl">ElyNova</span>
                    </div>
                    {/* Mining circle */}
                    <div className="flex justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-primary/30 flex items-center justify-center relative">
                        <div className="absolute inset-2 rounded-full border-4 border-t-primary border-r-accent/50 animate-spin" style={{ animationDuration: '3s' }} />
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary font-display">0.0042</div>
                          <div className="text-xs text-muted-foreground">ELY / min</div>
                        </div>
                      </div>
                    </div>
                    {/* Stats cards */}
                    <div className="space-y-3">
                      {[
                        { label: t.app_title, value: '● Active', color: 'text-emerald-glow' },
                        { label: t.app_duration, value: '14j 7h 32min', color: 'text-primary' },
                        { label: t.app_friends, value: '+23', color: 'text-accent' },
                      ].map(card => (
                        <div key={card.label} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-xs text-muted-foreground">{card.label}</span>
                          <span className={`text-sm font-semibold ${card.color}`}>{card.value}</span>
                        </div>
                      ))}
                    </div>
                    {/* Mining button */}
                    <button className="w-full py-3 bg-gradient-to-r from-primary to-accent text-background font-bold rounded-xl text-sm">
                      {t.cta}
                    </button>
                  </div>
                </div>
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10" />
              </motion.div>

              {/* Floating particles */}
              {[0, 1, 2, 3].map(i => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/60"
                  animate={{
                    x: [0, Math.random() * 40 - 20],
                    y: [0, Math.random() * 40 - 20],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                  style={{
                    top: `${20 + i * 20}%`,
                    left: i % 2 === 0 ? '-20px' : 'auto',
                    right: i % 2 === 1 ? '-20px' : 'auto',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
