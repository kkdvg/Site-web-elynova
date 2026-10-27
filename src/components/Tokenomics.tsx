import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface Props {
  lang: 'en' | 'fr';
}

const segments = [
  { name: 'Community Rewards', value: 40, color: '#2563eb' },
  { name: 'Development', value: 25, color: '#7c3aed' },
  { name: 'Liquidity', value: 15, color: '#059669' },
  { name: 'Team & Advisors', value: 10, color: '#d97706' },
  { name: 'Marketing', value: 10, color: '#dc2626' },
];

const frSegments = [
  { name: 'Récompenses Communauté', value: 40, color: '#2563eb' },
  { name: 'Développement', value: 25, color: '#7c3aed' },
  { name: 'Liquidité', value: 15, color: '#059669' },
  { name: 'Équipe & Conseillers', value: 10, color: '#d97706' },
  { name: 'Marketing', value: 10, color: '#dc2626' },
];

export default function Tokenomics({ lang }: Props) {
  const data = lang === 'fr' ? frSegments : segments;

  return (
    <section id="tokenomics" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">Tokenomics</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{lang === 'en' ? 'Fair Distribution' : 'Répartition Équitable'}</h2>
          <p className="text-lg text-slate-600">{lang === 'en' ? 'A transparent token model designed for community growth.' : 'Un modèle de token transparent conçu pour la croissance de la communauté.'}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-square">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" innerRadius="65%" outerRadius="90%" paddingAngle={4} dataKey="value" stroke="none">
                  {data.map((_, i) => <Cell key={i} fill={data[i].color} />)}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }} formatter={(v: number, n: string) => [`${v}%`, n]} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Legend */}
          <div className="space-y-4">
            {data.map((seg, i) => (
              <motion.div key={seg.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-100 hover:border-blue-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: seg.color }} />
                  <span className="font-medium text-slate-700">{seg.name}</span>
                </div>
                <span className="font-bold text-xl" style={{ color: seg.color }}>{seg.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
