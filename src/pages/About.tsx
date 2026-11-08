import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props { lang: 'en' | 'fr'; }

export default function About({ lang }: Props) {
  const t = lang === 'en' ? {
    tagline: 'About Us',
    title: 'Building the Future of Web3 in Emerging Markets',
    desc: 'ElyNova is a community-driven blockchain initiative designed to bring accessible crypto participation to millions of users across Africa, Asia, and Latin America. We prioritize transparency, accountability, and genuine community growth over hype.',
    value1_title: 'Transparency',
    value1_desc: 'We only present operational features and verified on-chain data. Nothing more, nothing less.',
    value2_title: 'Participation',
    value2_desc: 'Our community members are at the heart of every decision we make for the ecosystem.',
    value3_title: 'Responsibility',
    value3_desc: 'We clearly communicate risks and limitations — never promising returns or guarantees.',
    value4_title: 'Community Growth',
    value4_desc: 'Sustainable expansion focused on real utility and long-term value creation.',
    regions_title: 'Target Regions',
    region_africa: 'Africa',
    region_asia: 'Asia',
    region_latam: 'Latin America',
    regions_desc: 'Focusing on high-growth digital communities where mobile adoption is soaring and access to financial tools is expanding rapidly.',
    risk_notice: '⚠️ Digital assets are volatile. ElyNova does not guarantee any financial return. Please read our Risk Disclosure before participating.',
  } : {
    tagline: 'À propos de nous',
    title: 'Construire l\'Avenir du Web3 dans les Marchés Émergents',
    desc: 'ElyNova est une initiative blockchain communautaire conçue pour apporter une participation crypto accessible à des millions d\'utilisateurs en Afrique, en Asie et en Amérique latine. Nous privilégions la transparence, la responsabilité et une croissance communautaire réelle plutôt que le battage médiatique.',
    value1_title: 'Transparence',
    value1_desc: 'Nous ne présentons que les fonctionnalités opérationnelles et les données on-chain vérifiées. Ni plus, ni moins.',
    value2_title: 'Participation',
    value2_desc: 'Nos membres communautaires sont au cœur de chaque décision que nous prenons pour l\'écosystème.',
    value3_title: 'Responsabilité',
    value3_desc: 'Nous communiquons clairement sur les risques et limites — sans jamais promettre de rendements ou garanties.',
    value4_title: 'Croissance Communautaire',
    value4_desc: 'Expansion durable centrée sur une utilité réelle et la création de valeur à long terme.',
    regions_title: 'Marchés Cibles',
    region_africa: 'Afrique',
    region_asia: 'Asie',
    region_latam: 'Amérique latine',
    regions_desc: 'Focus sur les communautés numériques à fort dynamisme où l\'adoption mobile explose et l\'accès aux outils financiers s\'élargit rapidement.',
    risk_notice: '⚠️ Les actifs numériques sont volatils. ElyNova ne garantit aucun retour financier. Veuillez lire notre Avertissement sur les risques avant de participer.',
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="text-sm font-semibold text-[#1746D2] uppercase tracking-wider">{t.tagline}</span>
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mt-4 mb-8">{t.title}</h1>
        <p className="text-lg text-[#475467] leading-relaxed">{t.desc}</p>
      </div>

      {/* Values */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { title: t.value1_title, desc: t.value1_desc, color: '#1746D2' },
          { title: t.value2_title, desc: t.value2_desc, color: '#D12B9A' },
          { title: t.value3_title, desc: t.value3_desc, color: '#1746D2' },
          { title: t.value4_title, desc: t.value4_desc, color: '#D12B9A' },
        ].map((val) => (
          <div key={val.title} className="card-white p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold" style={{ backgroundColor: val.color }}>{val.title[0]}</div>
            <h3 className="font-bold text-[#172033] mb-2">{val.title}</h3>
            <p className="text-sm text-[#475467]">{val.desc}</p>
          </div>
        ))}
      </div>

      {/* Regions */}
      <div className="bg-[#EFF4FF]/50 rounded-3xl p-12 mb-16">
        <h2 className="text-3xl font-black text-[#172033] text-center mb-8">{t.regions_title}</h2>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {[t.region_africa, t.region_asia, t.region_latam].map((r) => (
            <div key={r} className="px-8 py-4 bg-white rounded-2xl border border-[#E5EAF2] font-bold text-[#1746D2] shadow-sm">{r}</div>
          ))}
        </div>
        <p className="text-[#475467] text-center max-w-2xl mx-auto">{t.regions_desc}</p>
      </div>

      {/* Risk Notice */}
      <div className="text-center">
        <p className="text-sm text-slate-500 bg-slate-50 inline-block px-6 py-4 rounded-xl">{t.risk_notice}</p>
      </div>
    </div>
  );
}
