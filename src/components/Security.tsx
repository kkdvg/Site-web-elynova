import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, Scale, CheckCircle2 } from 'lucide-react';

const securityData = {
  en: {
    title: 'Security & Transparency',
    subtitle: 'Your data security is our top priority.',
    items: ['No private key required', 'Minimal data collection', 'Anti-fraud protection', 'Responsible system'],
  },
  fr: {
    title: 'Sécurité & Transparence',
    subtitle: 'La sécurité de tes données est notre priorité absolue.',
    items: ['Pas de clé privée demandée', 'Données minimales', 'Protection anti-fraude', 'Système responsable'],
  },
};

const iconComponents = [Lock, Eye, Scale, CheckCircle2];

export default function Security({ lang }: { lang: 'en' | 'fr' }) {
  const data = securityData[lang];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-8"
          >
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
                {lang === 'en' ? 'Why Trust Us' : 'Pourquoi nous faire confiance'}
              </span>
              <h2 className="font-bold text-4xl md:text-5xl text-slate-900 mb-4">
                {data.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">{data.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.items.map((item, i) => {
                const IconComponent = iconComponents[i];
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all"
                  >
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="font-medium text-sm text-slate-700">{item}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-[80px] opacity-50" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-blue-200"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12 rounded-full border-2 border-dashed border-blue-300"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-20 rounded-full border-2 border-dashed border-blue-400"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-200">
                  <Lock className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
