import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, ArrowRight, BookOpen, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props { lang: 'en' | 'fr'; }

export default function WhitepaperPage({ lang }: Props) {
  const isEn = lang === 'en';

  return (
    <div className="min-h-screen bg-white">
      {/* ── Hero Header ── */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#EFF4FF] via-white to-[#FFF0F8]/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5EAF2] rounded-full text-sm font-semibold text-[#1746D2] mb-6 shadow-sm"
          >
            <BookOpen size={14} />
            {isEn ? 'Official Documentation' : 'Documentation Officielle'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#172033] mb-6 leading-tight"
          >
            {isEn ? (
              <>The ElyNova <span className="gradient-text">Whitepaper</span></>
            ) : (
              <>Le <span className="gradient-text">Whitepaper</span> ElyNova</>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-[#475467] max-w-2xl mx-auto leading-relaxed"
          >
            {isEn
              ? 'A transparent technical document for the ElyNova community. Build trust through clarity, verify everything yourself.'
              : 'Un document technique transparent pour la communauté ElyNova. Bâtir la confiance par la clarté, vérifiez tout vous-même.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <a href="#introduction" className="btn-primary inline-flex items-center gap-2">
              {isEn ? 'Read Now' : 'Lire Maintenant'}
              <ArrowRight size={18} />
            </a>
            <Link to="/tokenomics" className="border-2 border-[#1746D2] text-[#1746D2] px-6 py-3 rounded-xl font-bold hover:bg-[#EFF4FF] transition-colors inline-flex items-center gap-2">
              <LinkIcon size={18} />
              {isEn ? 'Tokenomics' : 'Tokenomics'}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="py-16 px-6 border-b border-[#E5EAF2]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Zap, label_en: 'Network', label_fr: 'Réseau', value: 'Solana', color: '#9945FF' },
            { icon: ShieldCheck, label_en: 'Total Supply', label_fr: 'Offre Totale', value: '350M ELY', color: '#1746D2' },
            { icon: Users, label_en: 'Governance', label_fr: 'Gouvernance', value: isEn ? 'Community' : 'Communautaire', color: '#D12B9A' },
            { icon: BookOpen, label_en: 'Version', label_fr: 'Version', value: '1.0 • Nov 2026', color: '#475467' },
          ].map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-4"
            >
              <h3 className="text-2xl font-black text-[#172033]">{h.value}</h3>
              <p className="text-xs text-[#475467] mt-1 uppercase tracking-wider">{isEn ? h.label_en : h.label_fr}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Main Content ── */}
      <div id="introduction" className="max-w-4xl mx-auto px-6 py-20 space-y-20">

        {/* 1. Introduction */}
        <section>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '01 — Introduction' : '01 — Introduction'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'What is ElyNova?' : 'Qu\'est-ce que ElyNova ?'}
            </h2>
            <div className="prose prose-lg text-[#475467] leading-relaxed space-y-4">
              <p>
                {isEn
                  ? 'ElyNova is a community-driven blockchain initiative built on the Solana network. Our mission is simple: make crypto participation accessible, transparent, and rewarding for everyone — no matter where they are in the world.'
                  : 'ElyNova est une initiative blockchain communautaire construite sur le réseau Solana. Notre mission est simple : rendre la participation crypto accessible, transparente et récompensante pour tous — peu importe où vous êtes dans le monde.'}
              </p>
              <p>
                {isEn
                  ? 'We believe that financial inclusion starts with transparency. That\'s why every aspect of the ElyNova ecosystem — from token supply to wallet addresses — can be independently verified on-chain. No promises without proof.'
                  : 'Nous croyons que l\'inclusion financière commence par la transparence. C\'est pourquoi chaque aspect de l\'écosystème ElyNova — de l\'offre de tokens aux adresses wallets — peut être vérifié indépendamment on-chain. Pas de promesses sans preuve.'}
              </p>
            </div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="border-t border-[#E5EAF2]" />

        {/* 2. The Problem */}
        <section>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '02 — The Problem' : '02 — Le Problème'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'Why We Built ElyNova' : 'Pourquoi Nous Avons Construit ElyNova'}
            </h2>
            <div className="space-y-4 text-[#475467] leading-relaxed">
              <p>
                {isEn
                  ? 'Most blockchain projects operate behind closed doors. They promise returns, showcase hype, and leave their communities in the dark about how things actually work. This erodes trust and creates confusion.'
                  : 'La plupart des projets blockchain opèrent en vase clos. Ils promettent des rendements, affichent du battage médiatique et laissent leurs communautés dans l\'obscurité quant au fonctionnement réel. Cela érode la confiance et crée de la confusion.'}
              </p>
              <p>
                {isEn
                  ? 'Participation barriers remain high: complex interfaces, expensive gas fees, intrusive KYC requirements, and opaque token distributions. Communities deserve better than empty roadmaps and unaudited code.'
                  : 'Les barrières à la participation restent élevées : interfaces complexes, frais de gaz élevés, exigences KYC intrusives et distributions de tokens opaques. Les communautés méritent mieux que des feuilles de route vides et du code non audité.'}
              </p>
              <p className="font-semibold text-[#172033]">
                {isEn
                  ? 'ElyNova was created to change that narrative — one transparent block at a time.'
                  : 'ElyNova a été créé pour changer ce récit — un bloc transparent à la fois.'}
              </p>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* 3. The Solution */}
        <section>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '03 — The Solution' : '03 — La Solution'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-8">
              {isEn ? 'Our Approach' : 'Notre Approche'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title_en: 'Telegram Mini App Mining',
                  title_fr: 'Minage via Mini-App Telegram',
                  desc_en: 'No downloads required. Earn ELY directly from your Telegram account with daily cycles, missions, and referral rewards.',
                  desc_fr: 'Pas de téléchargement requis. Gagnez des ELY directement depuis votre compte Telegram avec cycles quotidiens, missions et récompenses de parrainage.',
                  color: '#1746D2',
                },
                {
                  title_en: 'Full On-Chain Transparency',
                  title_fr: 'Transparence Entièrement On-Chain',
                  desc_en: 'Every transaction, every allocation, every distribution is verifiable on Solscan. What you see is what you get.',
                  desc_fr: 'Chaque transaction, chaque allocation, chaque distribution est vérifiable sur Solscan. Ce que vous voyez est ce que vous obtenez.',
                  color: '#D12B9A',
                },
                {
                  title_en: 'Zero-KYC Participation',
                  title_fr: 'Participation Sans KYC',
                  desc_en: 'No personal data collection, no identity verification required. Your wallet is your only identity.',
                  desc_fr: 'Pas de collecte de données personnelles, pas de vérification d\'identité requise. Votre portefeuille est votre seule identité.',
                  color: '#475467',
                },
                {
                  title_en: 'Community Governance',
                  title_fr: 'Gouvernance Communautaire',
                  desc_en: 'Future DAO structure ensures the community has a voice in major decisions affecting the ecosystem direction.',
                  desc_fr: 'La structure DAO future garantit que la communauté a sa voix dans les décisions majeures affectant la direction de l\'écosystème.',
                  color: '#1746D2',
                },
              ].map((item, i) => (
                <div key={i} className="card-white p-6 border-l-4 hover:shadow-lg transition-all" style={{ borderColor: item.color }}>
                  <h3 className="font-bold text-[#172033] mb-2">{isEn ? item.title_en : item.title_fr}</h3>
                  <p className="text-sm text-[#475467] leading-relaxed">{isEn ? item.desc_en : item.desc_fr}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* 4. Technology Stack */}
        <section>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '04 — Technology' : '04 — Technologie'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-8">
              {isEn ? 'Built on Solana' : 'Construit sur Solana'}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Solana Blockchain', features_en: ['High throughput (~65,000 TPS)', 'Low transaction costs (<$0.01)', 'Proof of History consensus'], features_fr: ['Fort débit (~65 000 TPS)', 'Frais de transaction bas (<0,01$)', 'Consensus Proof of History'] },
                { name: 'Smart Contracts', features_en: ['Rust-based programs', 'Auditable source code', 'Immutable deployment logic'], features_fr: ['Programmes Rust', 'Code source auditabilité', 'Logique d\'déploiement immuable'] },
                { name: 'Telegram Integration', features_en: ['WebApp compatibility', 'In-app wallet linking', 'Push notification system'], features_fr: ['Compatibilité WebApp', 'Lien portefeuille in-app', 'Système de notifications push'] },
              ].map((tech, i) => (
                <div key={i} className="bg-[#172033] text-white p-6 rounded-2xl">
                  <h3 className="font-bold text-lg mb-4">{tech.name}</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {(isEn ? tech.features_en : tech.features_fr).map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[#D12B9A] mt-0.5">•</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* 5. Tokenomics Summary */}
        <section>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '05 — Tokenomics Summary' : '05 — Résumé Tokenomics'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-8">
              {isEn ? 'How ELY is Distributed' : 'Comment ELY est Réparti'}
            </h2>
            <div className="bg-slate-50 rounded-2xl p-8">
              {[
                { pct: '70%', label: isEn ? 'Community Programs' : 'Programmes Communautaires', desc: isEn ? 'Mining rewards, airdrops, referral bonuses, and other community initiatives.' : 'Récompenses de minage, airdrops, bonus de parrainage et autres initiatives communautaires.' },
                { pct: '15%', label: isEn ? 'Liquidity Reserve' : 'Réserve de Liquidité', desc: isEn ? 'Reserved for exchange listings and DEX liquidity pools.' : 'Réservée pour les listings d\'échange et les pools de liquidité DEX.' },
                { pct: '10%', label: isEn ? 'Team & Development' : 'Équipe & Développement', desc: isEn ? 'Locked for 12 months, then vested progressively over 24 months.' : 'Bloqué pendant 12 mois, puis libéré progressivement sur 24 mois.' },
                { pct: '5%', label: isEn ? 'Partnerships & Marketing' : 'Partenariats & Marketing', desc: isEn ? 'Strategic partnerships, development costs, and communication expenses.' : 'Partenariats stratégiques, coûts de développement et dépenses de communication.' },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-4 ${i < 3 ? 'border-b border-[#E5EAF2] pb-4 last:border-b-0' : ''}`}>
                  <span className="text-3xl font-black text-[#1746D2] w-20 shrink-0">{item.pct}</span>
                  <div className="flex-1">
                    <h4 className="font-bold text-[#172033]">{item.label}</h4>
                    <p className="text-sm text-[#475467]">{item.desc}</p>
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-[#E5EAF2] text-sm text-[#475467]">
                {isEn ? 'Total supply: 350,000,000 ELY. All figures publicly verifiable on Solscan.' : 'Offre totale : 350 000 000 ELY. Toutes les informations publiquement vérifiables sur Solscan.'}
              </div>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* 6. Roadmap Highlights */}
        <section>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '06 — Roadmap' : '06 — Feuille de Route'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-8">
              {isEn ? 'Key Milestones' : 'Jalons Clés'}
            </h2>
            <div className="space-y-4">
              {[
                { status: 'completed', date: 'Q1-Q2 2026', title_en: 'Foundation & Launch', title_fr: 'Fondation & Lancement', desc_en: 'Platform launch, token generation, bug bounty program', desc_fr: 'Lancement plateforme, génération token, programme bug bounty' },
                { status: 'in_progress', date: 'Nov 20, 2026', title_en: 'First Withdrawals', title_fr: 'Premiers Retraits', desc_en: 'Initial withdrawal cycle to Solana wallets begins', desc_fr: 'Premier cycle de retraits vers portefeuilles Solana' },
                { status: 'planned', date: 'Mar 2027', title_en: 'CEX Listing', title_fr: 'Listing CEX', desc_en: 'Official exchange listing with liquidity deployment', desc_fr: 'Listing officiel échange avec déploiement liquidité' },
                { status: 'planned', date: '2027+', title_en: 'Ecosystem Expansion', title_fr: 'Expansion Écosystème', desc_en: 'NFT marketplace, DeFi integrations, DAO governance', desc_fr: 'Marketplace NFT, intégrations DeFi, gouvernance DAO' },
              ].map((m, i) => (
                <div key={i} className="flex items-start gap-4 card-white p-5 hover:border-[#1746D2]/30 transition-all">
                  <div className={`w-3 h-3 rounded-full mt-1.5 shrink-0 ${
                    m.status === 'completed' ? 'bg-emerald-500' :
                    m.status === 'in_progress' ? 'bg-blue-500 animate-pulse' : 'bg-slate-300'
                  }`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <span className="text-xs font-mono text-[#475467]">{m.date}</span>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        m.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        m.status === 'in_progress' ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {m.status === 'completed' ? '✓' : m.status === 'in_progress' ? '◌' : '○'}
                      </span>
                      <h4 className="font-bold text-[#172033]">{isEn ? m.title_en : m.title_fr}</h4>
                    </div>
                    <p className="text-sm text-[#475467]">{isEn ? m.desc_en : m.desc_fr}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* 7. Our Commitment */}
        <section>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '07 — Our Commitment' : '07 — Notre Engagement'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-8">
              {isEn ? 'Trust Through Transparency' : 'Confiance Par Transparence'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title_en: 'On-Chain Verification',
                  title_fr: 'Vérification On-Chain',
                  desc_en: 'Every claim we make can be verified on Solscan. No black boxes, no hidden mechanisms.',
                  desc_fr: 'Toute affirmation que nous faisons peut être vérifiée sur Solscan. Pas de boîtes noires, pas de mécanismes cachés.',
                },
                {
                  title_en: 'Clear Communication',
                  title_fr: 'Communication Claire',
                  desc_en: 'We communicate in plain language. No confusing jargon, no unrealistic promises.',
                  desc_fr: 'Nous communiquons dans un langage clair. Pas de jargon incompréhensible, pas de promesses irréalistes.',
                },
                {
                  title_en: 'Community First',
                  title_fr: 'Communauté d\'Abord',
                  desc_en: '70% of total supply goes directly to community programs. You are not an investor — you are part of the project.',
                  desc_fr: '70% de l\'offre totale va directement aux programmes communautaires. Vous n\'êtes pas un investisseur — vous faites partie du projet.',
                },
                {
                  title_en: 'Responsible Growth',
                  title_fr: 'Croissance Responsable',
                  desc_en: 'We grow sustainably. Every milestone is achievable, every timeline is realistic.',
                  desc_fr: 'Nous grandissons de manière durable. Chaque jalon est atteignable, chaque calendrier est réaliste.',
                },
              ].map((item, i) => (
                <div key={i} className="card-white p-6">
                  <h3 className="font-bold text-[#172033] mb-2">{isEn ? item.title_en : item.title_fr}</h3>
                  <p className="text-sm text-[#475467] leading-relaxed">{isEn ? item.desc_en : item.desc_fr}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* 8. Final Words */}
        <section>
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '08 — Final Words' : '08 — Dernières Paroles'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'Join Us on This Journey' : 'Rejoignez-Nous dans Cette Aventure'}
            </h2>
            <div className="prose prose-lg text-[#475467] leading-relaxed space-y-4">
              <p>
                {isEn
                  ? 'ElyNova is more than a token — it is a movement toward honest, accessible blockchain participation. We are building something real, something verifiable, something that puts the community first.'
                  : 'ElyNova est plus qu\'un token — c\'est un mouvement vers une participation blockchain honnête et accessible. Nous construisons quelque chose de réel, de vérifiable, qui place la communauté en priorité.'}
              </p>
              <p>
                {isEn
                  ? 'If you value transparency over hype, clarity over complexity, and community over speculation — you have found your home. Welcome to ElyNova.'
                  : 'Si vous valorisez la transparence plutôt que le battage, la clarté plutôt que la complexité, et la communauté plutôt que la spéculation — vous avez trouvé votre chez-vous. Bienvenue chez ElyNova.'}
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── CTA Footer ── */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1746D2] to-[#D12B9A] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-6">
            {isEn ? 'Ready to Participate?' : 'Prêt à Participer ?'}
          </h2>
          <p className="text-lg opacity-85 mb-10">
            {isEn
              ? 'Start mining ELY tokens right now through our Telegram mini app. No downloads, no complex setup.'
              : 'Commencez à miner des tokens ELY dès maintenant via notre mini-app Telegram. Pas de téléchargement, pas de configuration complexe.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/ElyNova_bot?start=ref_6628765249"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#1746D2] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              <Zap size={20} />
              {isEn ? 'Start Mining Now' : 'Commencer à Miner'}
            </a>
            <Link to="/contact" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
              {isEn ? 'Contact Support' : 'Contacter le Support'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
