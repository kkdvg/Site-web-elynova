import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props { lang: 'en' | 'fr'; }

export default function MiningPage({ lang }: Props) {
  const isEn = lang === 'en';
  const t = isEn ? {
    title: 'Mining',
    subtitle: 'Learn how ElyNova mining works — daily cycles, missions, referrals, and withdrawals.',
    status_note: '⚠️ Only operational features are listed below. Unavailable features are clearly marked.',
    steps_title: 'How to Start Mining',
    step1_title: 'Download the App',
    step1_desc: 'Get the ElyNova app from our official Telegram channel or website. Install on your Android or iOS device.',
    step2_title: 'Create Your Account',
    step2_desc: 'Sign up with a valid email or phone number. Complete basic identity verification if required.',
    step3_title: 'Activate Mining',
    step3_desc: 'Start a mining session. Mining runs in background cycles — each cycle lasts 24 hours.',
    step4_title: 'Complete Missions & Earn',
    step4_desc: 'Daily missions reward bonus tokens. Invite friends through the referral program for additional rewards.',
    withdrawal_title: 'Withdrawal Process',
    withdrawal_steps: ['Reach minimum withdrawal threshold', 'Link your Solana wallet address', 'Submit withdrawal request via the app'],
    withdrawal_info: 'Approved withdrawals are processed on-chain within 24-48 hours.',
    balance_note: '⚠️ The balance shown in the app represents pending rewards, not necessarily confirmed tokens on-chain. Only withdrawn tokens appear on Solscan.',
    fees_title: 'Fees & Limits',
    fees_items: [isEn ? 'No fees charged by ElyNova (third-party network fees may apply)' : 'Aucun frais facturé par ElyNova (les frais réseau peuvent s\'appliquer)', isEn ? 'Minimum withdrawal amount: TBD (to be announced)' : 'Montant minimum de retrait : À définir (prochainement annoncé)', isEn ? 'Daily mining limit: Based on active participation and mission completion' : 'Limite quotidienne : Basée sur la participation et l\'achèvement des missions'],
    faq_link: 'Have questions? Check our FAQ →',
  } : {
    title: 'Minage',
    subtitle: 'Découvrez comment fonctionne le minage ElyNova — cycles quotidiens, missions, parrainages et retraits.',
    status_note: '⚠️ Seules les fonctionnalités opérationnelles sont listées ci-dessous.',
    steps_title: 'Comment Commencer à Miner',
    step1_title: 'Télécharger l\'Application',
    step1_desc: 'Récupérez l\'app ElyNova depuis notre canal Telegram officiel ou site web. Installez sur votre appareil Android ou iOS.',
    step2_title: 'Créer Votre Compte',
    step2_desc: 'Inscrivez-vous avec un email ou numéro valide. Complétez la vérification d\'identité si requise.',
    step3_title: 'Activer le Minage',
    step3_desc: 'Lancez une session de minage. Le minage fonctionne en cycles de fond — chaque cycle dure 24 heures.',
    step4_title: 'Compléter les Missions et Gagner',
    step4_desc: 'Les missions quotidiennes rapportent des tokens bonus. Invitez des amis via le programme de parrainage pour des récompenses supplémentaires.',
    withdrawal_title: 'Processus de Retrait',
    withdrawal_steps: ['Atteindre le seuil minimum de retrait', 'Lier votre adresse portefeuille Solana', 'Soumettre une demande de retrait via l\'application'],
    withdrawal_info: 'Les retraits approuvés sont traités on-chain sous 24-48 heures.',
    balance_note: '⚠️ Le solde affiché dans l\'application représente des récompenses en attente, pas nécessairement des tokens confirmés on-chain. Seuls les tokens retirés apparaissent sur Solscan.',
    fees_title: 'Frais & Limites',
    fees_items: [isEn ? 'No fees charged by ElyNova (third-party network fees may apply)' : 'Aucun frais facturé par ElyNova (les frais réseau peuvent s\'appliquer)', isEn ? 'Minimum withdrawal amount: TBD (to be announced)' : 'Montant minimum de retrait : À définir (prochainement annoncé)', isEn ? 'Daily mining limit: Based on active participation and mission completion' : 'Limite quotidienne : Basée sur la participation et l\'achèvement des missions'],
    faq_link: 'Des questions ? Consultez notre FAQ →',
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">{t.title}</h1>
        <p className="text-lg text-[#475467]">{t.subtitle}</p>
        <p className="text-sm text-amber-600 mt-4">{t.status_note}</p>
      </div>

      {/* Steps */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[#172033] mb-8 text-center">{t.steps_title}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { title: t.step1_title, desc: t.step1_desc, num: '01' },
            { title: t.step2_title, desc: t.step2_desc, num: '02' },
            { title: t.step3_title, desc: t.step3_desc, num: '03' },
            { title: t.step4_title, desc: t.step4_desc, num: '04' },
          ].map((step) => (
            <div key={step.num} className="card-white p-6 relative overflow-hidden">
              <span className="absolute -top-2 -right-2 text-8xl font-black text-[#EFF4FF] select-none">{step.num}</span>
              <h3 className="font-bold text-[#172033] mb-3 relative z-10">{step.title}</h3>
              <p className="text-sm text-[#475467] relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Withdrawals */}
        <div className="card-white p-8">
          <h2 className="text-2xl font-bold text-[#172033] mb-6">{t.withdrawal_title}</h2>
          <ol className="space-y-4 mb-6">
            {t.withdrawal_steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#1746D2] text-white flex items-center justify-center font-bold shrink-0">{i + 1}</span>
                <span className="text-[#475467] pt-1.5">{step}</span>
              </li>
            ))}
          </ol>
          <p className="text-sm text-[#475467]">{t.withdrawal_info}</p>
          <p className="mt-4 text-sm text-red-600 font-medium">{t.balance_note}</p>
        </div>

        {/* Fees */}
        <div className="card-white p-8">
          <h2 className="text-2xl font-bold text-[#172033] mb-6">{t.fees_title}</h2>
          <ul className="space-y-3">
            {t.fees_items.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-[#475467]">
                <span className="text-[#1746D2] mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to="/faq" className="btn-primary inline-flex">
          {t.faq_link}
        </Link>
      </div>
    </div>
  );
}
