import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface Props { lang: 'en' | 'fr'; }

export default function TokenPage({ lang }: Props) {
  const t = lang === 'en' ? {
    title: 'Token ELY',
    subtitle: 'Learn about the native digital asset powering the ElyNova ecosystem.',
    symbol: 'EL Y',
    network: 'Solana',
    total_supply: '350,000,000 ELY',
    contract_addr: 'TBD (to be confirmed by project owner)',
    explorer_solscan: 'View on Solscan',
    utility_title: 'Utility',
    utility_current: 'Current Utility',
    utility_items: ['Transaction fee payment within ElyNova ecosystem', 'Governance voting rights (planned)', 'Staking rewards distribution (planned)'],
    utility_future: 'Future Use Cases',
    utility_future_items: ['DeFi integrations', 'NFT marketplace purchases', 'Cross-chain bridge participation', 'DAO treasury management'],
    link_title: 'Official Links',
    risk_disclosure: '⚠️ Digital assets carry significant risk. Their value may decrease or become worthless. Blockchain transactions are irreversible. This website does not provide financial advice. Please read our full Risk Disclosure before participating.',
  } : {
    title: 'Token ELY',
    subtitle: 'Découvrez l\'actif numérique natif qui alimente l\'écosystème ElyNova.',
    symbol: 'EL Y',
    network: 'Solana',
    total_supply: '350 000 000 ELY',
    contract_addr: 'À confirmer (à préciser par le propriétaire du projet)',
    explorer_solscan: 'Voir sur Solscan',
    utility_title: 'Utilité',
    utility_current: 'Utilité Actuelle',
    utility_items: ['Paiement des frais de transaction dans l\'écosystème ElyNova', 'Droits de vote en gouvernance (prévu)', 'Distribution des récompenses de staking (prévu)'],
    utility_future: 'Usages Futurs',
    utility_future_items: ['Intégrations DeFi', 'Achats sur la marketplace NFT', 'Participation aux ponts inter-chaînes', 'Gestion du trésor DAO'],
    link_title: 'Liens Officiels',
    risk_disclosure: '⚠️ Les actifs numériques comportent des risques importants. Leur valeur peut diminuer ou devenir nulle. Les transactions blockchain sont irréversibles. Ce site ne fournit pas de conseil financier. Veuillez lire notre Avertissement complet sur les risques avant de participer.',
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">{t.title}</h1>
        <p className="text-lg text-[#475467]">{t.subtitle}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Left — Token Info */}
        <div className="lg:col-span-2 space-y-8">
          <div className="card-white p-8">
            <h2 className="text-2xl font-bold text-[#172033] mb-6">{lang === 'en' ? 'Token Information' : 'Informations du Token'}</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                [lang === 'en' ? 'Symbol' : 'Symbole', <span className="text-3xl font-black text-[#1746D2]">{t.symbol}</span>],
                [lang === 'en' ? 'Network' : 'Réseau', <span className="text-xl font-bold text-[#172033]">{t.network}</span>],
                [lang === 'en' ? 'Total Supply' : 'Offre Totale', <span className="text-xl font-bold text-[#172033]">{t.total_supply}</span>],
                [lang === 'en' ? 'Contract Address' : 'Adresse du Contrat', <code className="text-xs bg-slate-100 px-2 py-1 rounded">{t.contract_addr}</code>],
              ].map(([label, val], i) => (
                <div key={i} className="pb-4 border-b border-[#E5EAF2]">
                  <p className="text-sm text-[#475467] mb-1">{label}</p>
                  {val}
                </div>
              ))}
            </div>

            <a href="https://solscan.io/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#1746D2] font-semibold hover:underline">
              {t.explorer_solscan} <ExternalLink size={16} />
            </a>
          </div>

          <div className="card-white p-8">
            <h2 className="text-2xl font-bold text-[#172033] mb-6">{t.utility_title}</h2>

            <div className="mb-6">
              <h3 className="font-semibold text-[#1746D2] mb-3">{t.utility_current}</h3>
              <ul className="space-y-2">
                {t.utility_items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#475467]">
                    <span className="w-2 h-2 rounded-full bg-[#1746D2] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#D12B9A] mb-3">{t.utility_future}</h3>
              <ul className="space-y-2">
                {t.utility_future_items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#475467]">
                    <span className="w-2 h-2 rounded-full bg-[#D12B9A] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right — Quick Card */}
        <div className="space-y-6">
          <div className="card-white p-8 text-center">
            <img src="/assets/token_1767780195906-1jc-AAZZ.png" alt="ELY Token" className="w-32 h-32 object-contain mx-auto mb-6" />
            <h3 className="font-bold text-2xl text-[#172033] mb-2">{t.symbol}</h3>
            <p className="text-[#475467] mb-4">{t.total_supply}</p>
            <Link to="/tokenomics" className="btn-primary w-full">
              {lang === 'en' ? 'View Tokenomics' : 'Voir la Tokenomics'}
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <p className="text-sm text-red-700 leading-relaxed">{t.risk_disclosure}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
