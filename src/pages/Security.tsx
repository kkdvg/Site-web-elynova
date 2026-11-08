import { ShieldCheck, AlertTriangle, Lock } from 'lucide-react';

interface Props { lang: 'en' | 'fr'; }

export default function SecurityPage({ lang }: Props) {
  const isEn = lang === 'en';
  const t = isEn ? {
    title: 'Security',
    subtitle: 'We take security seriously. Here are the measures we have in place and how you can stay safe.',
    section1: {
      title: 'Our Security Measures',
      items: [
        { icon: Lock, title: 'HTTPS Everywhere', desc: 'All pages are served over HTTPS with modern TLS configuration.' },
        { icon: ShieldCheck, title: 'No Private Keys on Site', desc: 'We never display private keys, seed phrases, or API secrets on any public page.' },
        { icon: AlertTriangle, title: 'Input Validation', desc: 'All user inputs are validated client-side and server-side to prevent injection attacks.' },
        { icon: ShieldCheck, title: 'Admin Access Control', desc: 'Administrative functions use role-based access control with strong authentication.' },
      ],
    },
    section2: {
      title: 'Report a Vulnerability',
      desc: 'If you discover a security issue, please report it responsibly before publishing.',
      contact: 'Email: security@elynova.com (placeholder — replace with real address)',
      expected: 'Expected response within 48 hours for critical issues.',
    },
    section3: {
      title: 'Audits & Certifications',
      status: 'No third-party audits completed yet.',
      note: 'We will publish audit reports as soon as they become available. No "audited" or "certified" badges are displayed without verifiable evidence.',
    },
    notice: '⚠️ This information was last reviewed on 2026-11-08. Security practices evolve continuously.',
  } : {
    title: 'Sécurité',
    subtitle: 'Nous prenons la sécurité au sérieux. Voici les mesures que nous avons mises en place et comment vous pouvez rester protégé.',
    section1: {
      title: 'Nos Mesures de Sécurité',
      items: [
        { icon: Lock, title: 'HTTPS sur toutes les pages', desc: 'Toutes les pages sont servies via HTTPS avec une configuration TLS moderne.' },
        { icon: ShieldCheck, title: 'Pas de clés privées sur le site', desc: 'Nous n\'affichons jamais de clés privées, phrases secrètes ou secrets API sur aucune page publique.' },
        { icon: AlertTriangle, title: 'Validation des entrées', desc: 'Toutes les entrées utilisateur sont validées côté client et serveur pour prévenir les attaques par injection.' },
        { icon: ShieldCheck, title: 'Contrôle d\'accès administrateur', desc: 'Les fonctions administratives utilisent un contrôle d\'accès basé sur les rôles avec authentification forte.' },
      ],
    },
    section2: {
      title: 'Signaler une Vulnérabilité',
      desc: 'Si vous découvrez un problème de sécurité, veuillez le signaler de manière responsable avant publication.',
      contact: 'Email : security@elynova.com (exemple — à remplacer par l\'adresse réelle)',
      expected: 'Réponse attendue sous 48h pour les problèmes critiques.',
    },
    section3: {
      title: 'Audits & Certifications',
      status: 'Aucun audit tiers réalisé à ce jour.',
      note: 'Nous publierons les rapports d\'audit dès qu\'ils seront disponibles. Aucun badge "audité" ou "certifié" n\'est affiché sans preuve vérifiable.',
    },
    notice: '⚠️ Ces informations ont été révisées pour la dernière fois le 2026-11-08. Les pratiques de sécurité évoluent continuellement.',
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">{t.title}</h1>
        <p className="text-lg text-[#475467]">{t.subtitle}</p>
      </div>

      {/* Measures */}
      <div className="card-white p-8 mb-8">
        <h2 className="text-xl font-bold text-[#172033] mb-6">{t.section1.title}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {t.section1.items.map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EFF4FF] flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-[#1746D2]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#172033] mb-1">{item.title}</h3>
                <p className="text-sm text-[#475467]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Report */}
      <div className="card-white p-8 mb-8">
        <h2 className="text-xl font-bold text-[#172033] mb-4">{t.section2.title}</h2>
        <p className="text-[#475467] mb-4">{t.section2.desc}</p>
        <p className="text-sm text-[#475467]"><strong>{isEn ? 'Contact:' : 'Contact :'}</strong> {t.section2.contact}</p>
        <p className="text-sm text-[#475467] mt-2">{t.section2.expected}</p>
      </div>

      {/* Audits */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
        <h2 className="text-xl font-bold text-[#172033] mb-4">{t.section3.title}</h2>
        <p className="text-red-700 font-semibold mb-2">{t.section3.status}</p>
        <p className="text-sm text-red-600">{t.section3.note}</p>
      </div>

      <div className="text-center">
        <p className="text-xs text-slate-400">{t.notice}</p>
      </div>
    </div>
  );
}
