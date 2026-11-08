import { motion } from 'framer-motion';
import { Zap, Shield, ArrowDown, Globe2 } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

export default function Hero({ lang }: Props) {
  const logoPath = '/assets/token_1767780195906-1jc-AAZZ.png';

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-[#0f1d32] dark:via-[#0a1628] dark:to-[#0f1d32]" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl dark:bg-blue-900/20" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-100/50 rounded-full blur-3xl dark:bg-violet-900/20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6 dark:text-white">
              {lang === 'en' ? (
                <>The Future of<br /><span className="gradient-text">Crypto Mining</span><br />Is Here</>
              ) : (
                <>Le Futur du<br /><span className="gradient-text">Minage Crypto</span><br />Est Là</>
              )}
            </h1>

            <p className="text-lg text-slate-600 max-w-md mb-8 leading-relaxed dark:text-slate-300">
              {lang === 'en'
                ? 'Mine ELY tokens from your phone — no downloads, no battery drain, no hidden fees. Transparent on Solana, trusted by the community.'
                : 'Minez des tokens ELY depuis votre téléphone — sans téléchargement, sans consommation de batterie, sans frais cachés. Transparent sur Solana, fiable par la communauté.'}
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="https://t.me/ElyNova_bot?start=ref_6628765249" target="_blank" rel="noreferrer" className="btn-primary">
                <Zap className="w-5 h-5" />
                {lang === 'en' ? 'Start Mining Free' : 'Commencer Gratuitement'}
              </a>
              <a href="#features" className="btn-secondary">
                {lang === 'en' ? 'Learn More' : 'En Savoir Plus'}
              </a>
            </div>

            <div className="flex items-center gap-8">
              {[
                { icon: Zap, label: lang === 'en' ? 'Zero Battery' : '0% Batterie' },
                { icon: Shield, label: lang === 'en' ? 'Fully Verified' : 'Entièrement Vérifié' },
                { icon: Globe2, label: lang === 'en' ? 'On Solana' : 'Sur Solana' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
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
        <ArrowDown className="w-6 h-6 text-slate-400 dark:text-slate-500" />
      </motion.div>
    </section>
  );
}
