import { CheckCircle2, AlertTriangle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props { lang: 'en' | 'fr'; }

export default function TransparencyPage({ lang }: Props) {
  const isEn = lang === 'en';
  const t = isEn ? {
    title: 'Transparency',
    subtitle: 'Verify everything yourself. All blockchain data is publicly accessible.',
    last_updated: 'Last updated: 2026-11-08',
    alert: 'We only publish verifiable data. Anything not yet confirmed is clearly marked as "TBD".',
    sections: [
      {
        title: 'Token Information',
        items: [
          { label: 'Network', value: 'Solana', verified: true },
          { label: 'Token Symbol', value: 'EL Y', verified: true },
          { label: 'Total Supply', value: '350,000,000 ELY', verified: true },
          { label: 'Mint Address', value: 'TBD (pending owner confirmation)', verified: false },
          { label: 'Creation Date', value: 'TBD (pending announcement)', verified: false },
        ]
      },
      {
        title: 'Wallet Addresses (Public)',
        items: [
          { label: 'Treasury / Allocation Wallets', value: 'To be published upon approval', verified: false },
          { label: 'Liquidity Wallet', value: 'To be published when liquidity deployed', verified: false },
        ],
        note: 'Only wallets explicitly approved by the project owner will be displayed here. No private keys or sensitive information is ever shared.'
      },
      {
        title: 'Transactions & Proofs',
        items: [
          { label: 'Distribution Transactions', value: 'Verifiable on Solscan (pending first distribution)', verified: false },
          { label: 'Team Token Lock', value: '1-year lock confirmed, schedule TBD', verified: false },
          { label: 'Vesting Proof', value: 'On-chain vesting contract (to be deployed)', verified: false },
        ],
        note: 'All transactions can be independently verified on public block explorers. We do not claim any transactions occurred until they are publicly visible.'
      },
    ],
    links: { solscan: 'https://solscan.io/', explorer_hint: 'Use Solscan to verify the mint address and wallet activity.' },
    risk_notice: '⚠️ Some data is still being finalized. This page is updated progressively as information becomes available. Always verify directly on-chain.',
  } : {
    title: 'Transparence',
    subtitle: 'Vérifiez tout vous-même. Toutes les données blockchain sont publiquement accessibles.',
    last_updated: 'Dernière mise à jour : 2026-11-08',
    alert: 'Nous ne publions que des données vérifiables. Tout ce qui n\'est pas encore confirmé est marqué comme "À confirmer".',
    sections: [
      {
        title: 'Informations du Token',
        items: [
          { label: 'Réseau', value: 'Solana', verified: true },
          { label: 'Symbole', value: 'EL Y', verified: true },
          { label: 'Offre Totale', value: '350 000 000 ELY', verified: true },
          { label: 'Adresse Mint', value: 'À confirmer (attente validation propriétaire)', verified: false },
          { label: 'Date de Création', value: 'À confirmer (annonce future)', verified: false },
        ]
      },
      {
        title: 'Adresses Wallets (Publics)',
        items: [
          { label: 'Trésorerie / Wallets Allocation', value: 'Publiées après approbation', verified: false },
          { label: 'Wallet Liquidité', value: 'Publié lors du déploiement liquidité', verified: false },
        ],
        note: 'Seuls les portefeuilles explicitement approuvés par le propriétaire du projet seront affichés ici. Aucune clé privée ni donnée sensible n\'est jamais partagée.'
      },
      {
        title: 'Transactions & Preuves',
        items: [
          { label: 'Transactions de Distribution', value: 'Vérifiables sur Solscan (avant première distribution)', verified: false },
          { label: 'Lock Tokens Équipe', value: 'Lock 1 an confirmé, calendrier à définir', verified: false },
          { label: 'Preuve Vesting', value: 'Contrat de vesting on-chain (à déployer)', verified: false },
        ],
        note: 'Toutes les transactions peuvent être vérifiées indépendamment sur des explorateurs publics. Nous ne prétendons aucune transaction avant qu\'elle ne soit publiquement visible.'
      },
    ],
    links: { solscan: 'https://solscan.io/', explorer_hint: 'Utilisez Solscan pour vérifier l\'adresse mint et l\'activité des portefeuilles.' },
    risk_notice: '⚠️ Certaines données sont encore en cours de finalisation. Cette page est mise à jour progressivement. Vérifiez toujours directement on-chain.',
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">{t.title}</h1>
        <p className="text-lg text-[#475467]">{t.subtitle}</p>
        <p className="text-sm text-[#475467] mt-2">{t.last_updated}</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-3">
        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-sm text-amber-800">{t.alert}</p>
      </div>

      <div className="space-y-12 mb-16">
        {t.sections.map((section, si) => (
          <div key={si} className="card-white p-8">
            <h2 className="text-xl font-bold text-[#172033] mb-6">{section.title}</h2>
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-[#E5EAF2] last:border-0">
                  <span className="text-[#475467] text-sm">{item.label}</span>
                  <div className="flex items-center gap-3">
                    {item.value.includes('TBD') || item.value.includes('À') ? (
                      <span className="text-xs text-amber-600 font-medium bg-amber-50 px-3 py-1 rounded-full">{item.value}</span>
                    ) : (
                      <>
                        <span className="text-[#172033] font-mono text-sm">{item.value}</span>
                        {item.verified && <CheckCircle2 size={16} className="text-emerald-500" />}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {section.note && (
              <p className="text-xs text-[#475467] mt-4 italic">{section.note}</p>
            )}
          </div>
        ))}
      </div>

      <div className="card-white p-8 text-center">
        <h3 className="font-bold text-[#172033] mb-4">{isEn ? 'Explore on Blockchain' : 'Explorer sur la Blockchain'}</h3>
        <a href={t.links.solscan} target="_blank" rel="noreferrer" className="btn-primary inline-flex">
          {isEn ? 'Open Solscan' : 'Ouvrir Solscan'}
          <ExternalLink size={16} />
        </a>
        <p className="text-sm text-[#475467] mt-4">{t.links.explorer_hint}</p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-red-500">{t.risk_notice}</p>
      </div>
    </div>
  );
}
