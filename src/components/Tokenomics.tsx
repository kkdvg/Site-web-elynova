import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface TokenomicsProps {
  lang: 'en' | 'fr';
}

const tokenData = {
  en: {
    title: 'Tokenomics',
    subtitle: 'A fair distribution serving the community.',
    totalSupply: 'Total Supply',
    validation: 'Validation',
    validationDesc: 'Each segment of the circle corresponds exactly to the allocated percentage for complete transparency.',
    segments: [
      { name: 'Community Rewards', value: 40, color: '#06b6d4' },
      { name: 'Development', value: 25, color: '#8b5cf6' },
      { name: 'Liquidity', value: 15, color: '#34d399' },
      { name: 'Team & Advisors', value: 10, color: '#f59e0b' },
      { name: 'Marketing', value: 10, color: '#ef4444' },
    ],
  },
  fr: {
    title: 'Tokenomics',
    subtitle: 'Une distribution équitable au service de la communauté.',
    totalSupply: 'Offre Totale',
    validation: 'Validation',
    validationDesc: 'Chaque part du cercle correspond exactement au pourcentage alloué pour assurer une transparence totale.',
    segments: [
      { name: 'Récompenses Communauté', value: 40, color: '#06b6d4' },
      { name: 'Développement', value: 25, color: '#8b5cf6' },
      { name: 'Liquidité', value: 15, color: '#34d399' },
      { name: 'Équipe & Conseillers', value: 10, color: '#f59e0b' },
      { name: 'Marketing', value: 10, color: '#ef4444' },
    ],
  },
};

export default function Tokenomics({ lang }: TokenomicsProps) {
  const data = tokenData[lang];

  return (
    <section id="tokenomics" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            <span className="text-gradient">{data.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{data.subtitle}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-6xl mx-auto">
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 aspect-square max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.segments}
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="90%"
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                  animationBegin={0}
                  animationDuration={1200}
                >
                  {data.segments.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(15, 23, 42, 0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                  }}
                  labelStyle={{ color: '#94a3b8' }}
                  itemStyle={{ color: '#f8fafc' }}
                  formatter={(value: number, name: string) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Legend & info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="grid gap-4">
              {data.segments.map((seg, i) => (
                <motion.div
                  key={seg.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center justify-between p-5 rounded-2xl bg-secondary/20 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full shadow-lg" style={{ backgroundColor: seg.color, boxShadow: `0 0 12px ${seg.color}` }} />
                    <span className="font-medium text-foreground/90">{seg.name}</span>
                  </div>
                  <span className="font-display font-bold text-xl text-gradient">{seg.value}%</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/5">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">{data.validation}:</strong> {data.validationDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
