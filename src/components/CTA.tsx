import { motion } from 'framer-motion';
import { Download, ArrowRight, Zap } from 'lucide-react';

const ctaData = {
  en: {
    title: 'Ready to Mine the Future?',
    desc: 'Join the ELYNOVA pioneers today. The opportunity is limited to the first 500,000 users.',
    button: 'Install ElyNova',
    note: 'Available on iOS & Android',
  },
  fr: {
    title: "Prêt à Miner l'Avenir ?",
    desc: "Rejoins les pionniers d'ELYNOVA dès aujourd'hui. L'opportunité est limitée aux 500 000 premiers utilisateurs.",
    button: 'Installer ElyNova',
    note: 'Disponible sur iOS & Android',
  },
};

export default function CTA({ lang }: { lang: 'en' | 'fr' }) {
  const data = ctaData[lang];

  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-300 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            {lang === 'en' ? 'Limited Access — 500K Users' : 'Accès limité à 500K utilisateurs'}
          </div>

          <h2 className="font-bold text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-tight">
            {data.title}
          </h2>

          <p className="text-lg md:text-xl text-blue-100 leading-relaxed mb-10 max-w-xl mx-auto">
            {data.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-xl"
            >
              <Download className="w-5 h-5" />
              {data.button}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-blue-200">{data.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
