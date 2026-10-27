import { motion } from 'framer-motion';
import { Download, ArrowRight, Zap } from 'lucide-react';

interface CTAProps {
  lang: 'en' | 'fr';
}

const ctaData = {
  en: {
    title: "Ready to Mine the Future?",
    desc: "Join the ELYNOVA pioneers today. The opportunity is limited to the first 500,000 users.",
    button: "Install ElyNova",
    note: "Available on iOS & Android",
  },
  fr: {
    title: "Prêt à Miner l'Avenir ?",
    desc: "Rejoins les pionniers d'ELYNOVA dès aujourd'hui. L'opportunité est limitée aux 500 000 premiers utilisateurs.",
    button: "Installer ElyNova",
    note: "Disponible sur iOS & Android",
  },
};

export default function CTA({ lang }: CTAProps) {
  const data = ctaData[lang];

  return (
    <section id="cta" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            {lang === 'en' ? 'Limited Access' : 'Accès Limité'}
          </div>

          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-7xl tracking-tight mb-6">
            {data.title.split(' ').map((word, i) => (
              <span key={i} className={i === data.title.split(' ').length - 1 ? 'text-gradient' : ''}>
                {word}{' '}
              </span>
            ))}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            {data.desc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(6,182,212,0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-background font-bold rounded-2xl overflow-hidden transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-3">
                <Download className="w-5 h-5" />
                {data.button}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#hero"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-5 border border-white/10 text-foreground font-medium rounded-2xl hover:bg-white/5 transition-all"
            >
              {lang === 'en' ? 'Learn More' : 'En savoir plus'}
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{data.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
