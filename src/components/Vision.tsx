import { motion } from 'framer-motion';
import { Brain, Sparkles, Rocket } from 'lucide-react';

interface VisionProps {
  lang: 'en' | 'fr';
}

const visionData = {
  en: {
    title: 'Our Vision',
    desc: 'ELYNOVA builds an accessible, transparent, and innovative crypto ecosystem. We aim to give everyone the chance to participate in the digital economy.',
    keywords: ['Accessible', 'Transparent', 'Innovative', 'Community-Driven', 'Mobile-First', 'Decentralized'],
  },
  fr: {
    title: 'Notre Vision',
    desc: 'ELYNOVA construit un écosystème crypto accessible, transparent et innovant. Nous visons à donner à chacun la possibilité de participer à l\'économie numérique.',
    keywords: ['Accessible', 'Transparent', 'Innovant', 'Communautaire', 'Mobile-First', 'Décentralisé'],
  },
};

const iconMap = [Brain, Sparkles, Rocket];

export default function Vision({ lang }: VisionProps) {
  const data = visionData[lang];

  return (
    <section id="vision" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8">
              <span className="text-gradient">{data.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
              {data.desc}
            </p>
          </motion.div>

          {/* Keyword badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {data.keywords.map((kw, i) => (
              <motion.span
                key={kw}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.05, borderColor: 'rgba(6,182,212,0.4)' }}
                className="px-5 py-2.5 rounded-full border border-white/10 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all cursor-default"
              >
                {kw}
              </motion.span>
            ))}
          </motion.div>

          {/* Vision icons */}
          <div className="flex justify-center gap-8 mt-16">
            {[Brain, Sparkles, Rocket].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/50 border border-white/10 flex items-center justify-center group-hover:border-primary/30 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">
                  {data.keywords[i * 2] || data.keywords[i]}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
