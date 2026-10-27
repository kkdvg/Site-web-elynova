import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

export default function CTA({ lang }: Props) {
  return (
    <section id="cta" className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-300 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">{lang === 'en' ? 'Ready to Mine?' : 'Prêt à Miner ?'}</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-xl mx-auto">{lang === 'en' ? 'Join 500,000 pioneers earning ELY tokens every day.' : 'Rejoignez 500 000 pionniers qui gagnent des tokens ELY chaque jour.'}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all hover:shadow-xl active:scale-95">
              <Download className="w-5 h-5" />
              {lang === 'en' ? 'Download ElyNova' : 'Télécharger ElyNova'}
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all">
              {lang === 'en' ? 'Learn More' : 'En savoir plus'}
            </a>
          </div>
          <p className="mt-6 text-sm text-blue-200">{lang === 'en' ? 'Available on iOS & Android' : 'Disponible sur iOS & Android'}</p>
        </motion.div>
      </div>
    </section>
  );
}
