import { motion } from 'framer-motion';
import { Zap, Download, Users, Shield } from 'lucide-react';

export default function Hero({ lang }: { lang: 'en' | 'fr' }) {
  const logoPath = '/assets/token_1767780195906-1jc-AAZZ.png';

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              {lang === 'en' ? 'Limited Access — 500K Users' : 'Accès limité à 500K utilisateurs'}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              {lang === 'en' ? (
                <>
                  Mine <span className="text-blue-600">ELY</span>,
                  <br />
                  The Future is{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Mobile
                  </span>
                </>
              ) : (
                <>
                  Mine <span className="text-blue-600">ELY</span>,
                  <br />
                  L'Avenir est{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Mobile
                  </span>
                </>
              )}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0">
              {lang === 'en'
                ? 'ELYNOVA lets you mine directly from your smartphone without battery drain. Earn ELY tokens and join an exclusive community.'
                : 'ELYNOVA vous permet de miner directement depuis votre smartphone sans consommation de batterie. Gagnez des tokens ELY et rejoignez une communauté exclusive.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.a
                href="#cta"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg"
              >
                <Download className="w-5 h-5" />
                {lang === 'en' ? 'Start Mining Now' : 'Commencer maintenant'}
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-2xl hover:border-blue-300 hover:bg-blue-50 transition-all"
              >
                {lang === 'en' ? 'Learn More' : 'En savoir plus'}
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              {[
                { icon: Zap, label: lang === 'en' ? 'No Battery' : 'Pas de batterie', color: 'text-blue-600' },
                { icon: Shield, label: lang === 'en' ? 'Free' : 'Gratuit', color: 'text-green-600' },
                { icon: Users, label: lang === 'en' ? 'Secure' : 'Sécurisé', color: 'text-violet-600' },
              ].map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <Icon className={`w-5 h-5 ${color}`} />
                  <span className="text-sm text-slate-600">{label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — phone mockup with logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 md:w-80">
              {/* Glow behind logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-[80px] opacity-30 scale-125" />

              {/* Phone frame */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-full aspect-[9/19] rounded-[2.5rem] bg-white border-2 border-slate-200 shadow-2xl overflow-hidden"
              >
                {/* Screen */}
                <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-b from-slate-50 to-blue-50 overflow-hidden">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 py-3 text-xs text-slate-500">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 border border-slate-400 rounded-sm" />
                    </div>
                  </div>
                  {/* App content */}
                  <div className="px-4 py-6 space-y-6">
                    {/* Logo */}
                    <div className="flex flex-col items-center gap-3">
                      <img
                        src={logoPath}
                        alt="ElyNova"
                        className="w-20 h-20 object-contain"
                      />
                      <span className="font-bold text-xl text-slate-900">ElyNova</span>
                    </div>
                    {/* Mining circle */}
                    <div className="flex justify-center">
                      <div className="w-32 h-32 rounded-full border-4 border-blue-200 flex items-center justify-center relative bg-white">
                        <div className="absolute inset-2 rounded-full border-4 border-t-blue-500 border-r-cyan-400 animate-spin" style={{ animationDuration: '3s' }} />
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">0.0042</div>
                          <div className="text-xs text-slate-500">ELY / min</div>
                        </div>
                      </div>
                    </div>
                    {/* Stats cards */}
                    <div className="space-y-3">
                      {[
                        { label: lang === 'en' ? 'Active Mining' : 'Minage Actif', value: '● Active', color: 'text-green-600' },
                        { label: lang === 'en' ? 'Duration' : 'Durée', value: '14j 7h 32min', color: 'text-blue-600' },
                        { label: lang === 'en' ? 'Friends' : 'Amis', value: '+23', color: 'text-violet-600' },
                      ].map(card => (
                        <div key={card.label} className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                          <span className="text-xs text-slate-500">{card.label}</span>
                          <span className={`text-sm font-semibold ${card.color}`}>{card.value}</span>
                        </div>
                      ))}
                    </div>
                    {/* Mining button */}
                    <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl text-sm hover:bg-blue-700 transition-colors">
                      {lang === 'en' ? 'Start Mining' : 'Commencer le minage'}
                    </button>
                  </div>
                </div>
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-slate-900 rounded-full z-10" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
