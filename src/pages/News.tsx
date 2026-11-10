import { Calendar, Tag } from 'lucide-react';

interface Props { lang: 'en' | 'fr'; }

const NEWS_EN = [
  { date: '2026-10-15', category: 'Announcement', title: 'ElyNova Official Website Launched', excerpt: 'We are proud to announce the launch of our official website, providing comprehensive information about the ElyNova ecosystem, tokenomics, and roadmap.' },
  { date: '2026-01-15', category: 'Development', title: 'Mining Platform Development', excerpt: 'Work continues on the ElyNova mining application with improved features and community feedback integration.' },
];

const NEWS_FR = [
  { date: '2026-10-15', category: 'Annonce', title: 'Lancement du Site Web Officiel ElyNova', excerpt: 'Nous sommes fiers d\'annoncer le lancement de notre site web officiel, offrant des informations complètes sur l\'écosystème ElyNova, la tokenomics et la feuille de route.' },
  { date: '2026-01-15', category: 'Développement', title: 'Développement de la Plateforme de Minage', excerpt: 'Les travaux se poursuivent sur l\'application de minage ElyNova avec des fonctionnalités améliorées et l\'intégration des retours communautaires.' },
];

export default function NewsPage({ lang }: Props) {
  const news = lang === 'en' ? NEWS_EN : NEWS_FR;
  const isEn = lang === 'en';

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-[#172033] mb-6">
          {isEn ? 'News & Updates' : 'Actualités & Mises à Jour'}
        </h1>
        <p className="text-lg text-[#475467]">
          {isEn ? 'Official announcements and project developments.' : 'Annonces officielles et avancées du projet.'}
        </p>
      </div>

      <div className="space-y-6">
        {news.map((article, i) => (
          <article key={i} className="card-white p-8 hover:border-[#1746D2]/30 transition-all cursor-pointer group">
            <div className="flex items-center gap-4 mb-4 text-sm text-[#475467]">
              <span className="flex items-center gap-1"><Calendar size={14} /> {article.date}</span>
              <span className="flex items-center gap-1"><Tag size={14} /> {article.category}</span>
              <span className="ml-auto text-[#1746D2] opacity-0 group-hover:opacity-100 transition-opacity">{isEn ? 'Read more →' : 'Lire la suite →'}</span>
            </div>
            <h2 className="text-xl font-bold text-[#172033] mb-3 group-hover:text-[#1746D2] transition-colors">{article.title}</h2>
            <p className="text-[#475467]">{article.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center text-sm text-slate-400">
        {isEn ? 'New articles will be published regularly. Follow our Telegram channel for real-time updates.' : 'De nouveaux articles seront publiés régulièrement. Suivez notre canal Telegram pour les mises à jour en temps réel.'}
      </div>
    </div>
  );
}
