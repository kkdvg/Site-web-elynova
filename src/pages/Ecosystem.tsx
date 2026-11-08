import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Users, Coins, Sparkles } from 'lucide-react';

interface Props { lang: 'en' | 'fr'; }

export default function EcosystemPage({ lang }: Props) {
  const t = lang === 'en' ? {
    title: 'Ecosystem',
    subtitle: 'Explore the pillars that power the ElyNova platform — each product has a clear status indicating whether it is available, in development, or planned.',
  } : {
    title: 'Écosystème',
    subtitle: 'Explorez les piliers qui alimentent la plateforme ElyNova — chaque produit affiche un statut clair indiquant s\'il est disponible, en développement ou prévu.',
  };

  const products = [
    { icon: Smartphone, title_en: 'ElyNova Mining App', title_fr: 'App de Minage ElyNova', status: 'Available', status_badge: 'bg-emerald-100 text-emerald-700', desc_en: 'Mobile community mining application. Daily cycles, missions, referral bonuses, and withdrawals to Solana wallets — currently active and operational.', desc_fr: 'Application de minage communautaire mobile. Cycles quotidiens, missions, bonus de parrainage et retraits vers portefeuilles Solana — actuellement actif et opérationnel.' },
    { icon: Users, title_en: 'ElyNova Community', title_fr: 'Communauté ElyNova', status: 'Active', status_badge: 'bg-blue-100 text-blue-700', desc_en: 'Information channels, governance initiatives, and global community growth.', desc_fr: 'Canaux d\'information, initiatives de gouvernance et développement communautaire mondial.' },
    { icon: Coins, title_en: 'ELY Token', title_fr: 'Token ELY', status: 'On Solana', status_badge: 'bg-violet-100 text-violet-700', desc_en: 'Native digital asset with fixed total supply of 350M ELY. Fully verifiable on-chain via Solscan.', desc_fr: 'Actif numérique natif avec offre totale fixe de 350M ELY. Entièrement vérifiable on-chain via Solscan.' },
    { icon: Sparkles, title_en: 'Future Integrations', title_fr: 'Intégrations Futures', status: 'In Development', status_badge: 'bg-amber-100 text-amber-700', desc_en: 'Advanced DeFi integrations, staking mechanisms, and ecosystem expansions currently being developed. Not yet available.', desc_fr: 'Intégrations DeFi avancées, mécanismes de staking et expansions de l\'écosystème actuellement en développement. Pas encore disponible.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">{t.title}</h1>
        <p className="text-lg text-[#475467]">{t.subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {products.map((prod, i) => (
          <div key={i} className="card-white p-8 relative overflow-hidden group hover:border-[#1746D2]/30 hover:shadow-xl transition-all">
            <span className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold ${prod.status_badge}`}>{prod.status}</span>
            <div className="w-14 h-14 rounded-2xl bg-[#1746D2]/10 flex items-center justify-center mb-6 group-hover:bg-[#1746D2] transition-colors">
              <prod.icon className="w-7 h-7 text-[#1746D2] group-hover:text-white transition-colors" />
            </div>
            <h3 className="font-bold text-2xl text-[#172033] mb-4">{lang === 'en' ? prod.title_en : prod.title_fr}</h3>
            <p className="text-[#475467] mb-6">{lang === 'en' ? prod.desc_en : prod.desc_fr}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/transparency" className="btn-primary inline-flex">
          {lang === 'en' ? 'View Transparency Data' : 'Voir les Données de Transparence'} <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
