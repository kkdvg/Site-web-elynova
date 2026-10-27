import { motion } from 'framer-motion';
import { Brain, Sparkles, Rocket } from 'lucide-react';

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

export default function Vision({ lang }: { lang: 'en' | 'fr' }) {
  const data = visionData[lang];

  return (
    <section id="vision" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
              {lang === 'en' ? 'What Drives Us' : 'Ce qui nous anime'}
            </span>
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8">
              {data.title}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              {data.desc}
            </p>
          </motion.div>

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
                whileHover={{ scale: 1.05 }}
                className="px-5 py-2.5 rounded-full border border-blue-200 text-sm font-medium text-blue-700 hover:bg-blue-50 transition-all cursor-default"
              >
                {kw}
              </motion.span>
            ))}
          </motion.div>

          <div className="flex justify-center gap-12 mt-16">
            {[Brain, Sparkles, Rocket].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <span className="text-xs font-medium text-slate-500">
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
