import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, Scale, CheckCircle2 } from 'lucide-react';

interface SecurityProps {
  lang: 'en' | 'fr';
}

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

export default function Security({ lang }: SecurityProps) {
  const data = securityData[lang];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-background via-secondary/5 to-background border-y border-white/5">
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
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
                <span className="text-gradient">{data.title}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{data.subtitle}</p>
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
                    className="flex items-center gap-3 bg-secondary/30 p-4 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-sm text-foreground/90">{item}</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[80px]" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-primary/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-12 rounded-full border-2 border-dashed border-accent/30"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-20 rounded-full border-2 border-dashed border-emerald-glow/30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-[0_0|40px_rgba(6,182,212,0.4)]">
                  <Lock className="w-10 h-10 text-background" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
