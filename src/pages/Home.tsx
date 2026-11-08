import { Link } from 'react-router-dom';
import { Globe2, ArrowRight, Smartphone, Gift, Users, Layout, Brain, Shield } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

export default function Home({ lang }: Props) {
  const isEn = lang === 'en';

  const ct = isEn ? {
    tagline: 'BUILD. PARTICIPATE. GROW.',
    hero_title: 'The Future of Web3 Mining',
    hero_subtitle: 'A transparent community-driven blockchain ecosystem on Solana — built for accessibility and growth in global digital communities.',
    explore_eco: 'Explore the Ecosystem',
    discover_token: 'Discover ELY Token',
    pillars_title: 'Our Core Pillars',
    pillar_community: 'Community-First',
    pillar_community_desc: 'Built for real users. No guarantees of financial return — just accessible technology.',
    pillar_blockchain: 'Solana Blockchain',
    pillar_blockchain_desc: 'Powered by Solana — fast, low-cost transactions you can verify yourself.',
    pillar_ecosystem: 'Growing Ecosystem',
    pillar_ecosystem_desc: 'Mining platform, airdrops, referrals, and future integrations — all in one place.',

    // Old features restored
    features_tag: 'Key Advantages',
    features_title: 'Everything You Need to Participate',
    features: [
      { icon: Smartphone, title: 'Easy Mining', desc: 'Start participating with a single tap. No complex setup, no technical knowledge required.' },
      { icon: Gift, title: 'Regular Airdrops', desc: 'Earn extra tokens through exclusive airdrops and community events.' },
      { icon: Users, title: 'Referral Program', desc: 'Invite friends and earn bonus tokens for every successful referral.' },
      { icon: Layout, title: 'Easy Interface', desc: 'Clean, intuitive design that anyone can use from day one.' },
      { icon: Brain, title: 'Smart Ecosystem', desc: 'Optimized algorithms that maximize your participation efficiently.' },
      { icon: Shield, title: 'Secure Infrastructure', desc: 'Your participation is protected with industry-standard security measures.' },
    ],

    token_section: 'Token ELY',
    token_network: 'Network: Solana',
    token_total_supply: 'Total Supply: 350,000,000 ELY',
    token_symbol: 'Symbol: ELY',
    token_status: 'Status: Active Community Program',
    ecosystems_title: 'Ecosystem Products',
    mining_prod: 'ElyNova Mining Platform',
    mining_status: 'Available',
    mining_status_badge: 'bg-emerald-100 text-emerald-700',
    mining_desc: 'Community mining with daily cycles, missions, and referral bonuses.',
    community_prod: 'ElyNova Community',
    community_status: 'Active',
    community_status_badge: 'bg-blue-100 text-blue-700',
    community_desc: 'Information channels, governance initiatives, and global community growth.',
    token_prod: 'ELY Token',
    token_prod_status: 'On Solana',
    token_prod_status_badge: 'bg-violet-100 text-violet-700',
    token_prod_desc: 'Native digital asset with fixed supply of 350M ELY — verified on-chain.',
    roadmap_title: 'Roadmap Highlights',
    road_complete: 'Foundation & Launch',
    road_complete_items: ['Community platform launch', '500K+ community milestone', 'Official ELY token generation'],
    road_in_progress: 'Growth Phase',
    road_in_progress_items: ['Staking features in progress', 'Partnership development', 'Liquidity deployment'],
    road_planned: 'Expansion Phase',
    road_planned_items: ['CEX listings (announced)', 'Multi-chain exploration', 'Governance implementation'],
    cta_title: 'Ready to Start?',
    cta_subtitle: 'Join the ElyNova community today and participate in the future of Web3.',
    join_button: 'Open ElyNova',
    transparency_link: 'Check our Transparency page →',
    risk_note: '⚠️ Digital assets are volatile. Past performance does not guarantee future results. Read our Risk Disclosure.',
  } : {
    tagline: 'CONSTRUIRE. PARTICIPER. GRANDIR.',
    hero_title: 'L\'Avenir du Minage Web3',
    hero_subtitle: 'Un écosystème blockchain communautaire transparent sur Solana — conçu pour l\'accessibilité et la croissance dans les communautés numériques mondiales.',
    explore_eco: 'Explorer l\'écosystème',
    discover_token: 'Découvrir le Token ELY',
    pillars_title: 'Nos Piliers Fondamentaux',
    pillar_community: 'Communauté d\'Abord',
    pillar_community_desc: 'Construit pour les vrais utilisateurs. Aucune garantie de rendement financier — juste une technologie accessible.',
    pillar_blockchain: 'Blockchain Solana',
    pillar_blockchain_desc: 'Propulsé par Solana — des transactions rapides et peu coûteuses que vous pouvez vérifier vous-même.',
    pillar_ecosystem: 'Écosystème en Croissance',
    pillar_ecosystem_desc: 'Plateforme de minage, airdrops, parrainages et futures intégrations — tout en un seul endroit.',

    // Old features restored
    features_tag: 'Avantages Clés',
    features_title: 'Tout ce dont vous avez besoin',
    features: [
      { icon: Smartphone, title: 'Minage Facile', desc: 'Commencez à participer d\'une simple pression. Pas de configuration complexe, aucune connaissance technique.' },
      { icon: Gift, title: 'Airdrops Réguliers', desc: 'Gagnez des tokens supplémentaires grâce aux airdrops exclusifs et événements.' },
      { icon: Users, title: 'Parrainage', desc: 'Invitez des amis et gagnez des tokens bonus pour chaque parrainage réussi.' },
      { icon: Layout, title: 'Interface Simple', desc: 'Un design clair et intuitif utilisable par tous dès le premier jour.' },
      { icon: Brain, title: 'Écosystème Intelligent', desc: 'Algorithmes optimisés pour maximiser votre participation efficacement.' },
      { icon: Shield, title: 'Infrastructure Sécurisée', desc: 'Votre participation est protégée par les mesures de sécurité les plus avancées.' },
    ],

    token_section: 'Token ELY',
    token_network: 'Réseau : Solana',
    token_total_supply: 'Offre totale : 350 000 000 ELY',
    token_symbol: 'Symbole : ELY',
    token_status: 'Statut : Programme Communautaire Actif',
    ecosystems_title: 'Produits de l\'Écosystème',
    mining_prod: 'Plateforme de Minage ElyNova',
    mining_status: 'Disponible',
    mining_status_badge: 'bg-emerald-100 text-emerald-700',
    mining_desc: 'Minage communautaire avec cycles quotidiens, missions et bonus de parrainage.',
    community_prod: 'Communauté ElyNova',
    community_status: 'Actif',
    community_status_badge: 'bg-blue-100 text-blue-700',
    community_desc: 'Canaux d\'information, initiatives de gouvernance et développement communautaire mondial.',
    token_prod: 'Token ELY',
    token_prod_status: 'Sur Solana',
    token_prod_status_badge: 'bg-violet-100 text-violet-700',
    token_prod_desc: 'Actif numérique natif avec offre fixe de 350M ELY — vérifiable on-chain.',
    roadmap_title: 'Jalons de la Feuille de Route',
    road_complete: 'Fondation & Lancement',
    road_complete_items: ['Lancement de la plateforme communautaire', 'Jalon 500K+ communauté', 'Génération officielle du token ELY'],
    road_in_progress: 'Phase de Croissance',
    road_in_progress_items: ['Fonctionnalités staking en cours', 'Développement partenariats', 'Déploiement liquidité'],
    road_planned: 'Phase d\'Expansion',
    road_planned_items: ['Listings CEX (annoncés)', 'Exploration multi-chaîne', 'Implémentation gouvernance'],
    cta_title: 'Prêt à Commencer ?',
    cta_subtitle: 'Rejoignez la communauté ElyNova aujourd\'hui et participez à l\'avenir du Web3.',
    join_button: 'Ouvrir ElyNova',
    transparency_link: 'Voir notre page Transparence →',
    risk_note: '⚠️ Les actifs numériques sont volatils. Les performances passées ne garantissent pas les résultats futurs. Lisez notre Avertissement sur les risques.',
  };

  const RoadmapItem = ({ title, status, items }: any) => (
    <div className="p-6 rounded-2xl bg-white border border-[#E5EAF2] hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${status === 'Complete' ? 'bg-emerald-100 text-emerald-700' : status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
          {status === 'Complete' ? '✓ Completed' : status === 'In Progress' ? '◌ In Progress' : '○ Planned'}
        </span>
        <h3 className="font-bold text-[#172033]">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item: string) => (
          <li key={item} className="flex items-center gap-2 text-sm text-[#475467]">
            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${status === 'Complete' ? 'bg-emerald-500' : status === 'In Progress' ? 'bg-blue-500' : 'bg-slate-300'}`} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-[#EFF4FF]/30 to-[#FFF0F8]/20">
        <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(23,70,210,0.08) 0%, transparent 50%)' }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#EFF4FF] text-[#1746D2] rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#1746D2] rounded-full animate-pulse" />
              {isEn ? '500K Users Welcome' : 'Bienvenue aux 500K utilisateurs'}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-[#172033] leading-[1.1] mb-6">
              <span className="text-[#1746D2] block text-2xl uppercase tracking-widest mb-4">{ct.tagline}</span>
              {isEn ? <>Mine <span className="gradient-text">ELY</span>, The Future is <span className="gradient-text">Today</span></> : <>Minez <span className="gradient-text">ELY</span>, L'Avenir est <span className="gradient-text">Maintenant</span></>}
            </h1>

            <p className="text-lg text-[#475467] max-w-xl mb-8 leading-relaxed">{ct.hero_subtitle}</p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/ecosystem" className="btn-primary">{ct.explore_eco} <ArrowRight size={18} /></Link>
              <Link to="/token" className="btn-secondary">{ct.discover_token}</Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img src="/assets/token_1767780195906-1jc-AAZZ.png" alt="ElyNova Token" className="w-72 h-72 md:w-96 md:h-96 object-contain" style={{ animation: 'float 6s ease-in-out infinite' }} />
          </div>
        </div>

        <style>{`@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }`}</style>
      </section>

      {/* Pillars */}
      <section className="py-24 bg-white border-b border-[#E5EAF2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#1746D2] uppercase tracking-wider mb-4 block">{ct.pillars_title}</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: ct.pillar_community, desc: ct.pillar_community_desc, color: '#1746D2' },
              { title: ct.pillar_blockchain, desc: ct.pillar_blockchain_desc, color: '#D12B9A' },
              { title: ct.pillar_ecosystem, desc: ct.pillar_ecosystem_desc, color: '#1746D2' },
            ].map((pill, i) => (
              <div key={i} className="card-white text-center p-8 border-t-4" style={{ borderTopColor: pill.color }}>
                <h3 className="font-bold text-xl text-[#172033] mb-3">{pill.title}</h3>
                <p className="text-[#475467]">{pill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTORED FEATURES SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-semibold text-[#1746D2] uppercase tracking-wider mb-4 block">{ct.features_tag}</span>
            <h2 className="text-4xl font-black text-[#172033] mb-6">{ct.features_title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ct.features.map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border border-[#E5EAF2] hover:border-[#1746D2]/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#EFF4FF] flex items-center justify-center mb-4 group-hover:bg-[#1746D2] transition-colors">
                  <feat.icon className="w-6 h-6 text-[#1746D2] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg text-[#172033] mb-2">{feat.title}</h3>
                <p className="text-[#475467] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Quick Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#1746D2]/10 rounded-full blur-3xl scale-150" />
              <img src="/assets/token_1767780195906-1jc-AAZZ.png" alt="ELY Token" className="relative w-64 h-64 object-contain mx-auto" />
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold text-[#D12B9A] uppercase tracking-wider mb-4 block">{ct.token_section}</span>
            <h2 className="text-4xl font-black text-[#172033] mb-6">{isEn ? 'The ELY Token' : 'Le Token ELY'}</h2>
            <div className="space-y-4 mb-8">
              {[
                [ct.token_network, <><strong>Solana</strong></>],
                [ct.token_total_supply, <><strong>350,000,000</strong></>],
                [ct.token_symbol, <><strong>EL Y</strong></>],
                [ct.token_status, <span className="text-emerald-600 font-medium">● {isEn ? 'Operational' : 'Opérationnel'}</span>],
              ].map(([label, val], i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-[#E5EAF2]">
                  <span className="text-[#475467]">{label}</span>
                  {val}
                </div>
              ))}
            </div>
            <Link to="/tokenomics" className="btn-primary inline-flex">
              {isEn ? 'View Full Tokenomics' : 'Voir la Tokenomics Complète'}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ecosystem Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#172033] mb-12 text-center">{ct.ecosystems_title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: ct.mining_prod, status: ct.mining_status, badge: ct.mining_status_badge, desc: ct.mining_desc },
              { title: ct.community_prod, status: ct.community_status, badge: ct.community_status_badge, desc: ct.community_desc },
              { title: ct.token_prod, status: ct.token_prod_status, badge: ct.token_prod_status_badge, desc: ct.token_prod_desc },
            ].map((prod, i) => (
              <div key={i} className="card-white p-8 relative overflow-hidden group">
                <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${prod.badge}`}>{prod.status}</span>
                <h3 className="font-bold text-xl text-[#172033] mb-4 mt-4">{prod.title}</h3>
                <p className="text-[#475467]">{prod.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#172033] mb-12 text-center">{ct.roadmap_title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <RoadmapItem title={ct.road_complete} status="Complete" items={ct.road_complete_items} />
            <RoadmapItem title={ct.road_in_progress} status="In Progress" items={ct.road_in_progress_items} />
            <RoadmapItem title={ct.road_planned} status="Planned" items={ct.road_planned_items} />
          </div>
          <div className="text-center mt-12">
            <Link to="/roadmap" className="text-[#1746D2] font-semibold hover:underline flex items-center justify-center gap-2">
              {isEn ? 'View Full Roadmap' : 'Voir la Feuille de Route Complète'} <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-[#1746D2] to-[#D12B9A] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-6">{ct.cta_title}</h2>
          <p className="text-xl opacity-90 mb-8">{ct.cta_subtitle}</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#" className="bg-white text-[#1746D2] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2">{ct.join_button} <ArrowRight size={20} /></a>
            <Link to="/transparency" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">{ct.transparency_link}</Link>
          </div>
          <p className="mt-8 text-sm opacity-75">{ct.risk_note}</p>
        </div>
      </section>
    </>
  );
}
