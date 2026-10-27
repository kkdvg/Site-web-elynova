import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const tokenData = {
  en: {
    title: 'Tokenomics',
    subtitle: 'A fair distribution serving the community.',
    totalSupply: 'Total Supply',
    validation: 'Validation',
    validationDesc: 'Each segment of the circle corresponds exactly to the allocated percentage for complete transparency.',
    segments: [
      { name: 'Community Rewards', value: 40, color: '#2563eb' },
      { name: 'Development', value: 25, color: '#7c3aed' },
      { name: 'Liquidity', value: 15, color: '#059669' },
      { name: 'Team & Advisors', value: 10, color: '#d97706' },
      { name: 'Marketing', value: 10, color: '#dc2626' },
    ],
  },
  fr: {
    title: 'Tokenomics',
    subtitle: 'Une distribution équitable au service de la communauté.',
    totalSupply: 'Offre Totale',
    validation: 'Validation',
    validationDesc: 'Chaque part du cercle correspond exactement au pourcentage alloué pour assurer une transparence totale.',
    segments: [
      { name: 'Récompenses Communauté', value: 40, color: '#2563eb' },
      { name: 'Développement', value: 25, color: '#7c3aed' },
      { name: 'Liquidité', value: 15, color: '#059669' },
      { name: 'Équipe & Conseillers', value: 10, color: '#d97706' },
      { name: 'Marketing', value: 10, color: '#dc2626' },
    ],
  },
};

export default function Tokenomics({ lang }: { lang: 'en' | 'fr' }) {
  const data = tokenData[lang];

  return (
    <section id="tokenomics" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            {lang === 'en' ? 'Distribution' : 'Répartition'}
          </span>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">{data.subtitle}</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 aspect-square max-w-md mx-auto lg:mx-0"
          >
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
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)',
                  }}
                  labelStyle={{ color: '#64748b' }}
                  itemStyle={{ color: '#0f172a' }}
                  formatter={(value: number, name: string) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-4"
          >
            {data.segments.map((seg, i) => (
              <motion.div
                key={seg.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 8 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-100 transition-all card-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full shadow-sm" style={{ backgroundColor: seg.color }} />
                  <span className="font-medium text-slate-700">{seg.name}</span>
                </div>
                <span className="font-bold text-xl" style={{ color: seg.color }}>{seg.value}%</span>
              </motion.div>
            ))}

            <div className="pt-6 border-t border-slate-200 mt-6">
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong className="text-slate-900">{data.validation}:</strong> {data.validationDesc}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
