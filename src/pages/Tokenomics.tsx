import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CheckCircle2 } from 'lucide-react';

interface Props { lang: 'en' | 'fr'; }

const SEGMENTS_EN = [
  { name: 'Community', value: 70, color: '#1746D2', count: '245,000,000' },
  { name: 'Liquidity', value: 15, color: '#D12B9A', count: '52,500,000' },
  { name: 'Team', value: 10, color: '#475467', count: '35,000,000' },
  { name: 'Partnerships, Dev & Marketing', value: 5, color: '#94a3b8', count: '17,500,000' },
];

const SEGMENTS_FR = [
  { name: 'Communauté', value: 70, color: '#1746D2', count: '245 000 000' },
  { name: 'Liquidité', value: 15, color: '#D12B9A', count: '52 500 000' },
  { name: 'Équipe', value: 10, color: '#475467', count: '35 000 000' },
  { name: 'Partenariats, Dév & Marketing', value: 5, color: '#94a3b8', count: '17 500 000' },
];

export default function TokenomicsPage({ lang }: Props) {
  const data = lang === 'en' ? SEGMENTS_EN : SEGMENTS_FR;
  const isEn = lang === 'en';

  const allocations = [
    {
      title_en: 'Community — 70%',
      title_fr: 'Communauté — 70%',
      qty: '245,000,000 ELY',
      dest_en: 'Reserved for community programs including mining, airdrops, and other approved initiatives. Detailed distribution between programs to be published when approved.',
      dest_fr: 'Réservé aux programmes communautaires incluant le minage, les airdrops et autres initiatives approuvées. Répartition détaillée à publier après approbation.',
    },
    {
      title_en: 'Liquidity — 15%',
      title_fr: 'Liquidité — 15%',
      qty: '52,500,000 ELY',
      dest_en: 'Reserve for liquidity strategy. Tokens reserved do not necessarily equal deployed liquidity. Status of deployed liquidity will be published separately.',
      dest_fr: 'Réserve destinée à la stratégie de liquidité. Les tokens réservés ne sont pas nécessairement ceux déployés. Le statut sera publié séparément.',
    },
    {
      title_en: 'Team — 10%',
      title_fr: 'Équipe — 10%',
      qty: '35,000,000 ELY',
      dest_en: 'Team allocation locked for 12 months, then released progressively. Vesting schedule to be confirmed and published on-chain once approved.',
      dest_fr: 'Allocation de l\'équipe bloquée pendant 12 mois puis débloquée progressivement. Calendrier à confirmer et publier on-chain après approbation.',
    },
    {
      title_en: 'Partnerships, Development & Marketing — 5%',
      title_fr: 'Partenariats, Développement & Marketing — 5%',
      qty: '17,500,000 ELY',
      dest_en: 'For partnerships, technological development, communication and marketing expenses. Actual expenditures will be published when verifiable.',
      dest_fr: 'Pour les partenariats, le développement technologique, la communication et le marketing. Les dépenses réelles seront publiées lorsque vérifiables.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">
          {isEn ? 'Official Tokenomics' : 'Tokenomics Officielle'}
        </h1>
        <p className="text-lg text-[#475467]">
          {isEn
            ? 'Transparent allocation model verified on-chain. Total supply: 350,000,000 ELY.'
            : 'Modèle d\'allocation transparent vérifiable on-chain. Offre totale : 350 000 000 ELY.'}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        {/* Chart */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="aspect-square">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="65%"
                outerRadius="90%"
                paddingAngle={4}
                dataKey="value"
                stroke="none"
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={data[i].color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5EAF2', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.1)' }}
                formatter={(value: number, name: string) => [`{value}%`, name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Legend */}
        <div className="space-y-4">
          {data.map((seg, i) => (
            <motion.div
              key={seg.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-between p-4 rounded-xl bg-white border border-[#E5EAF2] hover:border-[#1746D2]/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: seg.color }} />
                <span className="font-medium text-[#172033]">{seg.name}</span>
              </div>
              <span className="font-bold text-xl" style={{ color: seg.color }}>{seg.value}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Allocation Details */}
      <div className="space-y-6 mb-16">
        <h2 className="text-2xl font-black text-[#172033] mb-8 text-center">
          {isEn ? 'Allocation Details' : 'Détails des Allocations'}
        </h2>
        {allocations.map((alloc, i) => (
          <div key={i} className="card-white p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shrink-0" style={{ backgroundColor: data[i].color }}>
                {data[i].value}%
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-xl text-[#172033]">{isEn ? alloc.title_en : alloc.title_fr}</h3>
                  <span className="text-sm font-mono text-[#475467] bg-slate-100 px-3 py-1 rounded-lg">{alloc.qty}</span>
                </div>
                <p className="text-[#475467]">{isEn ? alloc.dest_en : alloc.dest_fr}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Consistency Rules */}
      <div className="bg-[#EFF4FF]/50 rounded-2xl p-8">
        <h3 className="font-bold text-lg text-[#172033] mb-4 flex items-center gap-2">
          <CheckCircle2 className="text-[#1746D2]" />
          {isEn ? 'Consistency Rules' : 'Règles de Cohérence'}
        </h3>
        <ul className="space-y-2 text-[#475467]">
          <li className="flex items-start gap-2"><span className="text-[#1746D2]">•</span> {isEn ? 'All allocations sum to exactly 100% and 350,000,000 ELY.' : 'Toutes les allocations s\'additionnent à exactement 100% et 350 000 000 ELY.'}</li>
          <li className="flex items-start gap-2"><span className="text-[#1746D2]">•</span> {isEn ? 'Quantities are calculated from total supply and approved percentages.' : 'Les quantités sont calculées à partir de l\'offre totale et des pourcentages approuvés.'}</li>
          <li className="flex items-start gap-2"><span className="text-[#1746D2]">•</span> {isEn ? 'Any changes must be dated, explained, and reflected across the site and whitepaper.' : 'Tout changement doit être daté, expliqué et répercuté sur le site et le whitepaper.'}</li>
          <li className="flex items-start gap-2"><span className="text-[#1746D2]">•</span> {isEn ? 'We distinguish clearly between allocation, circulation, distributed tokens, and locked tokens.' : 'Nous distinguons clairement entre allocation, circulation, tokens distribués et tokens verrouillés.'}</li>
          <li className="flex items-start gap-2"><span className="text-[#1746D2]">•</span> {isEn ? 'Last updated: 2026-11-08 (version 1.0)' : 'Dernière mise à jour : 2026-11-08 (version 1.0)'}</li>
        </ul>
      </div>
    </div>
  );
}
