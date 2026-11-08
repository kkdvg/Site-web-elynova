import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Props { lang: 'en' | 'fr'; }

interface FAQItem {
  q: string;
  a: string;
}

const FAQ_DATA_EN: FAQItem[] = [
  { q: 'What is ElyNova?', a: 'ElyNova is a community-driven blockchain initiative built on Solana, focused on making crypto participation accessible through mining, community programs, and transparent tokenomics.' },
  { q: 'What is the ELY token?', a: 'ELY is the native digital asset of the ElyNova ecosystem, operating on the Solana blockchain with a fixed total supply of 350,000,000 ELY.' },
  { q: 'On which blockchain does ELY work?', a: 'ELY operates exclusively on the Solana blockchain, chosen for its speed, low transaction costs, and scalability.' },
  { q: 'How does mining work?', a: 'ElyNova mining runs through an application. Daily cycles accumulate rewards based on your activity, missions completed, and referrals. Withdrawals are processed to your linked Solana wallet.' },
  { q: 'How do I withdraw tokens?', a: 'Link your Solana wallet in the app settings, reach the minimum withdrawal threshold, and submit a withdrawal request. Processing typically takes 24-48 hours on-chain.' },
  { q: 'How can I verify a transaction?', a: 'Use Solscan.io — enter the transaction hash or wallet address to view all on-chain transactions. Any verified address will appear publicly.' },
  { q: 'How does the referral program work?', a: 'Share your unique referral code through the app. When someone signs up using your code, both you and the new member receive bonus tokens (subject to current program rules).' },
  { q: 'How can I contact support?', a: 'Join our official Telegram channel (@elynova_official), write to us on YouTube or send an email to jokalou51@gmail.com. We respond within 24-48 business hours.' },
];

const FAQ_DATA_FR: FAQItem[] = [
  { q: 'Qu\'est-ce qu\'ElyNova ?', a: 'ElyNova est une initiative blockchain communautaire construite sur Solana, visant à rendre la participation crypto accessible via le minage, les programmes communautaires et une tokenomics transparente.' },
  { q: 'Qu\'est-ce que le token ELY ?', a: 'ELY est l\'actif numérique natif de l\'écosystème ElyNova, fonctionnant sur la blockchain Solana avec une offre totale fixe de 350 000 000 ELY.' },
  { q: 'Sur quelle blockchain fonctionne le token ?', a: 'ELY opère exclusivement sur la blockchain Solana, choisie pour sa rapidité, ses frais de transaction bas et sa scalabilité.' },
  { q: 'Comment fonctionne le minage ?', a: 'Le minage ElyNova s\'effectue via une application. Des cycles quotidiens accumulent des récompenses basées sur votre activité, les missions accomplies et vos parrainages. Les retraits sont traités vers votre portefeuille Solana lié.' },
  { q: 'Comment retirer les tokens ?', a: 'LieZ votre portefeuille Solana dans les paramètres de l\'application, atteignez le seuil minimum de retrait et soumettez une demande. Le traitement prend généralement 24-48 heures on-chain.' },
  { q: 'Comment vérifier une transaction ?', a: 'Utilisez Solscan.io — saisissez le hash de transaction ou l\'adresse du portefeuille pour voir toutes les transactions on-chain. Toute adresse vérifiée apparaîtra publiquement.' },
  { q: 'Comment fonctionne le programme de parrainage ?', a: 'Partagez votre code de parrainage unique via l\'application. Quand quelqu\'un s\'inscrit avec votre code, vous et la nouvelle personne recevez des tokens bonus (sous réserve des règles actuelles du programme).' },
  { q: 'Comment contacter le support ?', a: 'Rejoignez notre canal Telegram officiel (@elynova_official), écrivez-nous sur YouTube ou envoyez un email à jokalou51@gmail.com. Nous répondons sous 24-48 heures ouvrables.' },
];

export default function FAQPage({ lang }: Props) {
  const faqs = lang === 'en' ? FAQ_DATA_EN : FAQ_DATA_FR;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">
          {lang === 'en' ? 'FAQ' : 'FAQ'}
        </h1>
        <p className="text-lg text-[#475467]">
          {lang === 'en' ? 'Frequently asked questions about ElyNova.' : 'Questions fréquemment posées sur ElyNova.'}
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="card-white overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <span className="font-semibold text-[#172033] pr-4">{faq.q}</span>
              {openIndex === i ? (
                <ChevronUp className="w-5 h-5 text-[#1746D2] shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-[#1746D2] shrink-0" />
              )}
            </button>
            {openIndex === i && (
              <div className="px-6 pb-6">
                <p className="text-[#475467] leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-[#475467]">
          {lang === 'en'
            ? 'Still have questions? '
            : 'Vous avez encore des questions ? '}
          <a href="/contact" className="text-[#1746D2] font-semibold hover:underline">
            {lang === 'en' ? 'Contact us →' : 'Contactez-nous →'}
          </a>
        </p>
      </div>
    </div>
  );
}
