import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const TOKEN_SYMBOLS = ['ELY', 'EL Y'] as const;
type TokenSymbol = typeof TOKEN_SYMBOLS[number];

export default function TokenomicsPage({ lang }: Props) {
  const data = lang === 'en' ? SEGMENTS_EN : SEGMENTS_FR;
  const isEn = lang === 'en';

  const allocations = [
    {
      title_en: 'Community — 70%',
      title_fr: 'Communauté — 70%',
      qty: '245,000,000 ELY',
      qty_fr: '245 000 000 ELY',
      dest_en: 'Reserved for community programs including mining, airdrops, and other approved initiatives. Detailed distribution between programs to be published when approved.',
      dest_fr: 'Réservé aux programmes communautaires incluant le minage, les airdrops et autres initiatives approuvées. Répartition détaillée à publier après approbation.',
    },
    {
      title_en: 'Liquidity — 15%',
      title_fr: 'Liquidité — 15%',
      qty: '52,500,000 ELY',
      qty_fr: '52 500 000 ELY',
      dest_en: 'Reserve for liquidity strategy. Tokens reserved do not necessarily equal deployed liquidity. Status of deployed liquidity will be published separately.',
      dest_fr: 'Réserve destinée à la stratégie de liquidité. Les tokens réservés ne sont pas nécessairement ceux déployés. Le statut sera publié séparément.',
    },
    {
      title_en: 'Team — 10%',
      title_fr: 'Équipe — 10%',
      qty: '35,000,000 ELY',
      qty_fr: '35 000 000 ELY',
      dest_en: 'Team allocation locked for 12 months, then released progressively. Vesting schedule to be confirmed and published on-chain once approved.',
      dest_fr: 'Allocation de l\'équipe bloquée pendant 12 mois puis débloquée progressivement. Calendrier à confirmer et publier on-chain après approbation.',
    },
    {
      title_en: 'Partnerships, Development & Marketing — 5%',
      title_fr: 'Partenariats, Développement & Marketing — 5%',
      qty: '17,500,000 ELY',
      qty_fr: '17 500 000 ELY',
      dest_en: 'For partnerships, technological development, communication and marketing expenses. Actual expenditures will be published when verifiable.',
      dest_fr: 'Pour les partenariats, le développement technologique, la communication et le marketing. Les dépenses réelles seront publiées lorsque vérifiables.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#EFF4FF]/40 to-[#FFF0F8]/20">

      {/* ── Hero Header ── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFF4FF] text-[#1746D2] rounded-full text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 bg-[#1746D2] rounded-full animate-pulse" />
            {isEn ? 'Official Tokenomics' : 'Tokenomics Officielle'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-[#172033] mb-6 tracking-tight"
          >
            {isEn ? (
              <>The <span className="gradient-text">ELY</span> Token</>
            ) : (
              <>Le Token <span className="gradient-text">ELY</span></>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#475467] max-w-2xl mx-auto leading-relaxed"
          >
            {isEn
              ? 'Transparent allocation model verified on-chain. Total supply: 350,000,000 ELY.'
              : 'Modèle d\'allocation transparent vérifiable on-chain. Offre totale : 350 000 000 ELY.'}
          </motion.p>

          {/* Token visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#1746D2]/10 rounded-full blur-3xl scale-150" />
              <img
                src="/assets/token_1767780195906-1jc-AAZZ.png"
                alt="ELY Token"
                className="relative w-48 h-48 md:w-64 md:h-64 object-contain"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Key Stats Bar ── */}
      <section className="py-10 px-6 border-y border-[#E5EAF2] bg-white/80 backdrop-blur-sm sticky top-20 z-30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: isEn ? 'Symbol' : 'Symbole', value: 'ELY' },
            { label: isEn ? 'Network' : 'Réseau', value: 'Solana' },
            { label: isEn ? 'Total Supply' : 'Offre Totale', value: '350M ELY' },
            { label: isEn ? 'Status' : 'Statut', value: isEn ? 'Active' : 'Actif' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-xs uppercase tracking-wider text-[#475467] mb-1">{stat.label}</p>
              <p className="text-lg md:text-xl font-black text-[#172033]">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Chart + Legend ── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square max-w-md mx-auto lg:mx-0"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius="65%"
                  outerRadius="90%"
                  paddingAngle={3}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((_, i) => (
                    <Cell key={i} fill={data[i].color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    border: '1px solid #E5EAF2',
                    boxShadow: '0 10px 40px -10px rgba(0,0,0,0.12)',
                    fontSize: '14px',
                  }}
                  formatter={(value: number, name: string) => [`${value}%`, name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Legend Cards */}
          <div className="space-y-4">
            {data.map((seg, i) => (
              <motion.div
                key={seg.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex items-center justify-between p-5 rounded-2xl bg-white border border-[#E5EAF2] hover:border-[#1746D2]/30 hover:shadow-lg transition-all group cursor-default"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-4 h-4 rounded-full shrink-0 ring-2 ring-white shadow-sm"
                    style={{ backgroundColor: seg.color }}
                  />
                  <div>
                    <span className="font-bold text-[#172033] block">{seg.name}</span>
                    <span className="text-xs text-[#475467]">{seg.count} ELY</span>
                  </div>
                </div>
                <span
                  className="text-2xl font-black tabular-nums"
                  style={{ color: seg.color }}
                >
                  {seg.value}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Allocation Details ── */}
      <section className="py-20 px-6 bg-white/60">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#172033] mb-10 text-center">
            {isEn ? 'Allocation Breakdown' : 'Répartition des Allocations'}
          </h2>

          <div className="space-y-5">
            {allocations.map((alloc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-white p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shrink-0 shadow-lg"
                    style={{ backgroundColor: data[i].color }}
                  >
                    {data[i].value}%
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-bold text-xl text-[#172033]">
                        {isEn ? alloc.title_en : alloc.title_fr}
                      </h3>
                      <span className="text-sm font-mono font-bold text-[#1746D2] bg-[#EFF4FF] px-3 py-1 rounded-lg">
                        {isEn ? alloc.qty : alloc.qty_fr}
                      </span>
                    </div>
                    <p className="text-[#475467] leading-relaxed">
                      {isEn ? alloc.dest_en : alloc.dest_fr}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Consistency Rules ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#1746D2]/5 to-[#D12B9A]/5 rounded-3xl p-10 border border-[#E5EAF2]">
            <h3 className="font-bold text-xl text-[#172033] mb-6 flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#1746D2] flex items-center justify-center">
                <CheckCircle2 size={20} className="text-white" />
              </span>
              {isEn ? 'Consistency Rules' : 'Règles de Cohérence'}
            </h3>
            <ul className="space-y-3 text-[#475467]">
              {[
                isEn
                  ? 'All allocations sum to exactly 100% and 350,000,000 ELY.'
                  : 'Toutes les allocations s\'additionnent à exactement 100% et 350 000 000 ELY.',
                isEn
                  ? 'Quantities are calculated from total supply and approved percentages.'
                  : 'Les quantités sont calculées à partir de l\'offre totale et des pourcentages approuvés.',
                isEn
                  ? 'Any changes must be dated, explained, and reflected across the site and whitepaper.'
                  : 'Tout changement doit être daté, expliqué et répercuté sur le site et le whitepaper.',
                isEn
                  ? 'We distinguish clearly between allocation, circulation, distributed tokens, and locked tokens.'
                  : 'Nous distinguons clairement entre allocation, circulation, tokens distribués et tokens verrouillés.',
                isEn
                  ? 'Last updated: 2026-11-08 (version 1.0)'
                  : 'Dernière mise à jour : 2026-11-08 (version 1.0)',
              ].map((rule, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#1746D2] mt-1 shrink-0">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1746D2] to-[#D12B9A] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6">
            {isEn ? 'Explore the Full Token Page' : 'Explorer la Page Token Complète'}
          </h2>
          <p className="text-lg opacity-85 mb-10">
            {isEn
              ? 'View detailed token information, contract details, and utility features on the Token page.'
              : 'Consultez les informations détaillées du token, les détails du contrat et les fonctionnalités utilitaires sur la page Token.'}
          </p>
          <Link to="/token" className="inline-flex items-center gap-2 bg-white text-[#1746D2] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors">
            {isEn ? 'Go to Token Page' : 'Aller vers la Page Token'}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <style>{`@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }`}</style>
    </div>
  );
}
