import { motion } from 'framer-motion';
import { Zap, Shield, ArrowDown } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

export default function Hero({ lang }: Props) {
  const logoPath = '/assets/token_1767780195906-1jc-AAZZ.png';

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
              {lang === 'en' ? 'Early Access' : 'Accès Précoces'}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
              {lang === 'en' ? (
                <>Mine <span className="text-blue-600">ELY</span>,<br />The Future<br />is <span className="gradient-text">Today</span></>
              ) : (
                <>Minez <span className="text-blue-600">ELY</span>,<br />L'Avenir<br />est <span className="gradient-text">Maintenant</span></>
              )}
            </h1>

            <p className="text-lg text-slate-600 max-w-md mb-8 leading-relaxed">
              {lang === 'en'
                ? 'A transparent community-driven blockchain ecosystem on Solana — built for accessibility and growth in global digital communities.'
                : 'Un écosystème blockchain communautaire transparent sur Solana — conçu pour l\'accessibilité et la croissance dans les communautés numériques mondiales.'}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://t.me/ElyNova_bot?start=ref_6628765249" target="_blank" rel="noreferrer" className="btn-primary">
                <Zap className="w-5 h-5" />
                {lang === 'en' ? 'Start Mining' : 'Commencer'}
              </a>
              <a href="#features" className="btn-secondary">
                {lang === 'en' ? 'How it Works' : 'Comment ça marche'}
              </a>
            </div>

            <div className="flex items-center gap-8">
              {[
                { icon: Zap, label: lang === 'en' ? 'No Battery' : 'Pas de batterie' },
                { icon: Shield, label: lang === 'en' ? 'Secure' : 'Sécurisé' },
                { icon: () => <span className="text-2xl">🆓</span>, label: lang === 'en' ? 'Free' : 'Gratuit' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-500">
                  <Icon className="w-4 h-4 text-blue-600" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Logo */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-3xl scale-150" />
              <motion.img src={logoPath} alt="ElyNova" className="relative w-72 h-72 md:w-96 md:h-96 object-contain"
                animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-slate-400" />
      </motion.div>
    </section>
  );
}
