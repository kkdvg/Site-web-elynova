import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Users, ArrowRight, BookOpen, Link as LinkIcon, Coins, Wallet, Gift, Landmark, Rocket } from 'lucide-react';
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
              ? 'Everything you need to know about ELY and ElyNova. Simple, transparent, no hidden tricks.'
              : 'Tout ce que vous devez savoir sur ELY et ElyNova. Simple, transparent, sans surprise.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            <a href="#token-utility" className="btn-primary inline-flex items-center gap-2">
              {isEn ? 'What is ELY?' : "Qu'est-ce que ELY ?"}
              <ArrowRight size={18} />
            </a>
            <Link to="/tokenomics" className="border-2 border-[#1746D2] text-[#1746D2] px-6 py-3 rounded-xl font-bold hover:bg-[#EFF4FF] transition-colors inline-flex items-center gap-2">
              <LinkIcon size={18} />
              Tokenomics
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-16 px-6 border-b border-[#E5EAF2] bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label_en: 'Network', label_fr: 'Réseau', value: 'Solana' },
            { label_en: 'Total Supply', label_fr: 'Offre Totale', value: '350M ELY' },
            { label_en: 'Blockchain Explorer', label_fr: 'Explorateur', value: 'solscan.io' },
            { label_en: 'Status', label_fr: 'Statut', value: 'Live & Verifiable' },
          ].map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-4"
            >
              <h3 className="text-2xl font-black text-[#172033]">{h.value}</h3>
              <p className="text-xs text-[#475467] mt-1 uppercase tracking-wider">{isEn ? h.label_en : h.label_fr}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Main Content ── */}
      <div className="max-w-4xl mx-auto px-6 py-20 space-y-0">

        {/* ── 1. What is ElyNova ── */}
        <section id="introduction">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '01 — What is ElyNova' : '01 — Qu\'est-ce que ElyNova'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'A Community Built on Trust' : 'Une Communauté Bâtie sur la Confiance'}
            </h2>
            <div className="space-y-4 text-[#475467] leading-relaxed text-lg">
              <p>
                {isEn
                  ? 'ElyNova is a blockchain project built on Solana that lets anyone earn crypto directly from their phone — through Telegram. No complicated apps, no expensive fees, no middlemen.'
                  : 'ElyNova est un projet blockchain construit sur Solana qui permet à n\'importe qui de gagner de la crypto directement depuis son téléphone — via Telegram. Pas d\'applis compliquées, pas de frais élevés, pas d\'intermédiaires.'}
              </p>
              <p>
                {isEn
                  ? 'We believe that if you build something real, there is nothing to hide. That is why every single thing about ElyNova can be checked publicly on the blockchain.'
                  : 'Nous croyons que si vous construisez quelque chose de réel, il n\'y a rien à cacher. C\'est pourquoi chaque chose concernant ElyNova peut être vérifiée publiquement sur la blockchain.'}
              </p>
              <p className="font-bold text-[#172033] text-xl">
                {isEn ? 'No promises without proof. That is our word.' : 'Pas de promesses sans preuve. Telles sont nos paroles.'}
              </p>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* ── 2. What is ELY Token ── */}
        <section id="token-utility">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '02 — What is ELY' : '02 — Qu\'est-ce que ELY'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'The ELY Token: What It Is and What It Does' : 'Le Token ELY : Ce Qu\'il Est et Ce Qu\'Il Fait'}
            </h2>
            <p className="text-[#475467] text-lg leading-relaxed mb-8">
              {isEn
                ? 'ELY is the currency of the ElyNova ecosystem. It is earned through our Telegram mini app mining bot, and it has clear, growing uses inside and outside the platform.'
                : 'ELY est la monnaie de l\'écosystème ElyNova. Il se gagne via notre bot de minage Telegram mini-app, et il a des usages clairs et croissants à l\'intérieur comme à l\'extérieur de la plateforme.'}
            </p>

            {/* How to Earn */}
            <h3 className="text-xl font-black text-[#172033] mb-4">
              {isEn ? 'How You Can Earn ELY' : 'Comment Vous Gagnez de l\'ELY'}
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: Zap, color: '#1746D2', title_en: 'Daily Mining', title_fr: 'Minage Quotidien', desc_en: 'Run the Telegram bot daily and complete missions to earn ELY.', desc_fr: 'Utilisez le bot Telegram quotidiennement et accomplissez des missions pour gagner de l\'ELY.' },
                { icon: Gift, color: '#D12B9A', title_en: 'Referrals', title_fr: 'Parrainages', desc_en: 'Invite friends and earn bonus ELY when they start using the app.', desc_fr: 'Invitez des amis et gagnez des bonus ELY quand ils commencent à utiliser l\'app.' },
                { icon: Users, color: '#475467', title_en: 'Community Events', title_fr: 'Événements Communautaires', desc_en: 'Special missions, giveaways, and limited-time events with extra rewards.', desc_fr: 'Missions spéciales, récompenses et événements limités avec des bonus supplémentaires.' },
              ].map((item, i) => (
                <div key={i} className="card-white p-6 border-l-4 hover:shadow-lg transition-all" style={{ borderColor: item.color }}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3`} style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h4 className="font-bold text-[#172033] mb-1">{isEn ? item.title_en : item.title_fr}</h4>
                  <p className="text-sm text-[#475467]">{isEn ? item.desc_en : item.desc_fr}</p>
                </div>
              ))}
            </div>

            {/* What ELY Is Used For */}
            <h3 className="text-xl font-black text-[#172033] mb-4">
              {isEn ? 'What Can You Do With ELY?' : 'Que Peut-on Faire Avec ELY ?'}
            </h3>
            <div className="space-y-3 mb-10">
              {[
                {
                  icon: Wallet,
                  color: '#1746D2',
                  title_en: 'Withdraw to Your Own Wallet',
                  title_fr: 'Retirer vers Votre Portefeuille',
                  desc_en: 'From November 20, 2026, ELY can be withdrawn directly to your personal Solana wallet. Full control of your tokens.',
                  desc_fr: 'À partir du 20 novembre 2026, l\'ELY peut être retirée directement vers votre portefeuille Solana personnel. Plein contrôle de vos tokens.',
                },
                {
                  icon: Landmark,
                  color: '#D12B9A',
                  title_en: 'Trade on Exchanges (March 2027)',
                  title_fr: 'Échanger sur les Marchés (Mars 2027)',
                  desc_en: 'ELI will be listed on cryptocurrency exchanges. You will be able to trade, swap, or sell your ELY like any other token.',
                  desc_fr: 'ELY sera listée sur les échanges de cryptomonnaies. Vous pourrez échanger, swapper ou vendre votre ELY comme n\'importe quel autre token.',
                },
                {
                  icon: Coins,
                  color: '#475467',
                  title_en: 'Use Across the Ecosystem',
                  title_fr: 'Utiliser dans l\'Écosystème',
                  desc_en: 'Future uses include staking, governance voting in the DAO, NFT marketplace purchases, DeFi protocols, and more.',
                  desc_fr: 'Les futurs usages incluent le staking, le vote de gouvernance dans la DAO, les achats sur la marketplace NFT, les protocoles DeFi, et plus encore.',
                },
              ].map((item, i) => (
                <div key={i} className="card-white p-5 flex items-start gap-4 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${item.color}15` }}>
                    <item.icon size={22} style={{ color: item.color }} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#172033] text-base">{isEn ? item.title_en : item.title_fr}</h4>
                    <p className="text-sm text-[#475467] mt-1 leading-relaxed">{isEn ? item.desc_en : item.desc_fr}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Note */}
            <div className="bg-[#EFF4FF] border border-[#1746D2]/20 rounded-xl p-5">
              <p className="text-sm text-[#1746D2] leading-relaxed">
                {isEn
                  ? '💡 Key fact: There are 350 million ELY tokens total. You do not need to buy them — they are earned through participation. This means fair distribution from day one.'
                  : '💡 Faits clés : Il y a 350 millions de tokens ELY au total. Vous n\'avez pas besoin de les acheter — ils se gagnent par la participation. Cela signifie une distribution équitable dès le premier jour.'}
              </p>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* ── 3. Supply & Distribution ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '03 — Token Supply' : '03 — Offre en Tokens'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'Where Every ELY Goes' : 'Vers Où Chaque ELY Va'}
            </h2>
            <p className="text-[#475467] text-lg leading-relaxed mb-6">
              {isEn ? 'Transparent allocation breakdown — 100% verifiable on-chain.' : 'Répartition transparente — 100% vérifiable on-chain.'}
            </p>
            <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
              {[
                { pct: '70%', label: isEn ? 'Community' : 'Communauté', detail: isEn ? 'Mining rewards, airdrops, referral bonuses — goes directly to users' : 'Récompenses de minage, airdrops, bonus de parrainage — va directement aux utilisateurs' },
                { pct: '15%', label: isEn ? 'Liquidity & Listings' : 'Liquidité & Listings', detail: isEn ? 'Exchange listings and DEX liquidity pools — available for trading' : 'Listings échange et pools de liquidité DEX — disponible pour le trading' },
                { pct: '10%', label: isEn ? 'Team & Development' : 'Équipe & Développement', detail: isEn ? 'Locked 12 months, then vested over 24 months — aligned incentives' : 'Bloqué 12 mois, puis libéré sur 24 mois — intérêts alignés' },
                { pct: '5%', label: isEn ? 'Partnerships & Marketing' : 'Partenariats & Marketing', detail: isEn ? 'Growth initiatives and strategic partnerships' : 'Initiatives de croissance et partenariats stratégiques' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-16 text-center shrink-0">
                    <span className="text-2xl font-black text-[#1746D2]">{item.pct}</span>
                  </div>
                  <div className="flex-1 border-l-4 border-[#1746D2]/20 pl-4">
                    <h4 className="font-bold text-[#172033]">{item.label}</h4>
                    <p className="text-sm text-[#475467]">{item.detail}</p>
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-[#E5EAF2] text-sm text-[#475467]">
                {isEn ? 'Total supply: 350,000,000 ELY — fully verified on Solscan.' : 'Offre totale : 350 000 000 ELY — entièrement vérifié sur Solscan.'}
              </div>
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* ── 4. Technology ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '04 — Technology' : '04 — Technologie'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'Simple, Fast, Secure' : 'Simple, Rapide, Sécurisé'}
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: 'Solana Blockchain',
                  points_en: ['Takes seconds, not minutes', 'Costs less than $0.01 per transaction', 'Proven and battle-tested network'],
                  points_fr: ['Prend des secondes, pas des minutes', "Coûte moins de 0,01$ par transaction", 'Réseau éprouvé et rodé'],
                },
                {
                  title: 'Telegram Mini App',
                  points_en: ['No app download needed', 'Works inside Telegram instantly', 'Wallet link via secure connection'],
                  points_fr: ['Pas de téléchargement requis', 'Fonctionne instantanément dans Telegram', 'Lien portefeuille sécurisé'],
                },
                {
                  title: 'Full Transparency',
                  points_en: ['All transactions public on Solscan', 'Code and smart contracts open', 'Nothing hidden behind closed doors'],
                  points_fr: ['Toutes les transactions publiques sur Solscan', 'Code et contrats intelligents ouverts', 'Rien de caché dans l\'ombre'],
                },
              ].map((tech, i) => (
                <div key={i} className="bg-[#172033] text-white p-6 rounded-2xl">
                  <h3 className="font-bold text-base mb-4">{tech.title}</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {(isEn ? tech.points_en : tech.points_fr).map((f, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <span className="text-[#D12B9A] mt-0.5 shrink-0">✓</span>
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

        {/* ── 5. Roadmap ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '05 — Roadmap' : '05 — Feuille de Route'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'Our Clear Timeline' : 'Notre Calendrier Clair'}
            </h2>
            <div className="space-y-3">
              {[
                { status: 'completed', date: 'Sept 2026', title_en: 'Development Phase', title_fr: 'Phase de Développement', desc_en: 'Project conception, Telegram mini app built, smart contracts deployed on Solana.', desc_fr: 'Conception du projet, mini-app Telegram développée, contrats intelligents déployés sur Solana.' },
                { status: 'completed', date: 'Nov 8, 2026', title_en: 'Official Launch', title_fr: 'Lancement Officiel', desc_en: 'Website goes live. Community platform opens. Mining bot becomes active.', desc_fr: 'Site web mis en ligne. Plateforme communautaire ouverte. Bot de minage actif.' },
                { status: 'in_progress', date: 'Nov 20, 2026', title_en: 'First Withdrawals Live', title_fr: 'Premiers Retraits Actifs', desc_en: 'Users can withdraw mined ELY to their Solana wallets. Verification process complete.', desc_fr: 'Les utilisateurs peuvent retirer leur ELY miné vers leurs portefeuilles Solana. Vérification terminée.' },
                { status: 'planned', date: 'Mars 2027', title_en: 'CEX Exchange Listing', title_fr: 'Listing sur les Échanges', desc_en: 'ELI listed on major exchanges. Users can trade and cash out. Liquidity pools activated.', desc_fr: 'ELY listée sur les principaux échanges. Les utilisateurs peuvent trader et retirer. Pools de liquidité activés.' },
                { status: 'planned', date: '2027+', title_en: 'Ecosystem Expansion', title_fr: 'Expansion de l\'Écosystème', desc_en: 'NFT marketplace launch. DeFi integrations. DAO governance powered by ELY votes.', desc_fr: 'Lancement marketplace NFT. Intégrations DeFi. Gouvernance DAO pilotée par les votes ELY.' },
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
                        {m.status === 'completed' ? '✓ Done' : m.status === 'in_progress' ? '◌ In progress' : '○ Planned'}
                      </span>
                      <h4 className="font-bold text-[#172033]">{isEn ? m.title_en : m.title_fr}</h4>
                    </div>
                    <p className="text-sm text-[#475467] leading-relaxed">{isEn ? m.desc_en : m.desc_fr}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* ── 6. Our Promise ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '06 — Our Promise to You' : '06 — Notre Promesse envers Vous'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'Why You Can Trust ElyNova' : 'Pourquoi Vous Pouvez Faire Confiance à ElyNova'}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  color: '#1746D2',
                  title_en: 'Verifiable Everything',
                  title_fr: 'Tout est Vérifiable',
                  desc_en: 'Every transaction, every balance, every event is public. Check it yourself on Solscan anytime.',
                  desc_fr: 'Chaque transaction, chaque solde, chaque événement est public. Vérifiez vous-même sur Solscan à tout moment.',
                },
                {
                  icon: Users,
                  color: '#D12B9A',
                  title_en: 'You Come First',
                  title_fr: 'Vous Êtes la Priorité',
                  desc_en: '70% of all ELY goes to the community. We do not extract value from you — we create value together.',
                  desc_fr: '70% de tout l\'ELY va à la communauté. Nous ne prélevons pas de valeur chez vous — nous créons de la valeur ensemble.',
                },
                {
                  icon: Zap,
                  color: '#475467',
                  title_en: 'No Hidden Surprises',
                  title_fr: 'Pas de Surprises Cachées',
                  desc_en: 'Clear roadmap, honest timelines, realistic goals. No empty promises designed to hype you up.',
                  desc_fr: 'Feuille de route claire, calendriers honnêtes, objectifs réalistes. Pas de promesses vides conçues pour vous faire monter.'},
                {
                  icon: Coins,
                  color: '#1746D2',
                  title_en: 'Fair Access',
                  title_fr: 'Accès Équitable',
                  desc_en: 'No pre-sale for insiders, no VIP allocations. Everyone starts on equal footing. The first miner wins.',
                  desc_fr: 'Pas de pré-vente pour les initiés, pas d\'allocations VIP. Tout le monde part sur un pied d\'égalité. Le premier mineur gagne.',
                },
              ].map((item, i) => (
                <div key={i} className="card-white p-6 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <item.icon size={20} style={{ color: item.color }} />
                    </div>
                    <h3 className="font-bold text-[#172033]">{isEn ? item.title_en : item.title_fr}</h3>
                  </div>
                  <p className="text-sm text-[#475467] leading-relaxed">{isEn ? item.desc_en : item.desc_fr}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* ── 7. Future Vision ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '07 — The Future of ELY' : '07 — L\'Avenir d\'ELY'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'More Than a Token' : 'Plus Qu\'un Token'}
            </h2>
            <p className="text-[#475467] text-lg leading-relaxed mb-6">
              {isEn
                ? 'The vision for ELY goes far beyond simple mining. Here is what we are building toward:'
                : 'La vision pour ELY va bien au-delà du simple minage. Voici ce que nous construisons :'}
            </p>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title_en: 'ELI Governance (DAO)',
                  title_fr: 'Gouvernance ELY (DAO)',
                  desc_en: 'Every ELY holder gets a voice. Vote on project direction, feature priorities, and treasury spending. Your token equals your influence.',
                  desc_fr: 'Chaque détenteur d\'ELY a sa voix. Votez sur la direction du projet, les priorités des fonctionnalités et les dépenses du trésor. Votre token égale votre influence.',
                },
                {
                  step: '02',
                  title_en: 'ELI Staking Rewards',
                  title_fr: 'Récompenses de Staking ELY',
                  desc_en: 'Lock your ELY to earn passive income. Stakers help secure the network and are rewarded proportionally for their commitment.',
                  desc_fr: 'Bloquez votre ELY pour gagner un revenu passif. Les stakers aident à sécuriser le réseau et sont récompensés proportionnellement à leur engagement.',
                },
                {
                  step: '03',
                  title_en: 'ELI Marketplace',
                  title_fr: 'Marketplace ELY',
                  desc_en: 'A dedicated ElyNova NFT marketplace where ELY is the only accepted currency. Exclusive drops, creator tools, and community collections.',
                  desc_fr: 'Une marketplace NFT dédiée ElyNova où ELY est la seule devise acceptée. Drops exclusifs, outils créateurs et collections communautaires.',
                },
                {
                  step: '04',
                  title_en: 'ElyNova DeFi Suite',
                  title_fr: 'Suite DeFi ElyNova',
                  desc_en: 'Future lending and borrowing products, yield optimization strategies, and cross-chain bridges — all powered by ELY.',
                  desc_fr: 'Produits de prêt et d\'emprunt futurs, stratégies d\'optimisation de rendement et ponts inter-chaînes — le tout propulsé par ELY.',
                },
              ].map((item, i) => (
                <div key={i} className="card-white p-5 flex items-start gap-5 hover:shadow-md transition-all">
                  <span className="text-4xl font-black text-[#1746D2]/15 shrink-0">{item.step}</span>
                  <div>
                    <h4 className="font-bold text-[#172033] mb-1">{isEn ? item.title_en : item.title_fr}</h4>
                    <p className="text-sm text-[#475467] leading-relaxed">{isEn ? item.desc_en : item.desc_fr}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="border-t border-[#E5EAF2]" />

        {/* ── 8. Final Words ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold text-[#1746D2] uppercase tracking-widest mb-2 block">
              {isEn ? '08 — Final Words' : '08 — Dernières Paroles'}
            </span>
            <h2 className="text-3xl font-black text-[#172033] mb-6">
              {isEn ? 'We Are Building This Together' : 'Nous Construisons Cela Ensemble'}
            </h2>
            <div className="space-y-4 text-[#475467] text-lg leading-relaxed">
              <p>
                {isEn
                  ? 'There is nothing to prove because everything is already proven — on the blockchain. Every ELY you earn, every transaction made, every milestone reached is visible to everyone.'
                  : 'Il n\'y a rien à prouver parce que tout est déjà prouvé — sur la blockchain. Chaque ELY que vous gagnez, chaque transaction effectuée, chaque jalon atteint est visible par tous.'}
              </p>
              <p>
                {isEn
                  ? 'If you are tired of projects that talk big but deliver little, ElyNova is your chance to see what happens when a team prioritizes transparency over hype.'
                  : 'Si vous en avez marre des projets qui parlent gros mais livrent peu, ElyNova est votre chance de voir ce qui se passe quand une équipe priorise la transparence plutôt que le battage.'}
              </p>
              <p className="font-bold text-[#172033] text-xl">
                {isEn ? 'Your journey with ELY starts with a single click on Telegram. Nothing more.' : 'Votre parcours avec ELY commence par un seul clic sur Telegram. Rien de plus.'}
              </p>
            </div>
          </motion.div>
        </section>
      </div>

      {/* ── CTA Footer ── */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1746D2] to-[#D12B9A] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Rocket size={40} className="mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl font-black mb-6">
            {isEn ? 'Start Mining ELY Today' : 'Commencez à Miner de l\'ELY Aujourd\'hui'}
          </h2>
          <p className="text-lg opacity-85 mb-10 max-w-xl mx-auto">
            {isEn
              ? 'Open Telegram, find the ElyNova bot, connect your wallet, and start earning. Free to join. No deposits required.'
              : 'Ouvrez Telegram, trouvez le bot ElyNova, connectez votre portefeuille et commencez à gagner. Gratuit à rejoindre. Aucun dépôt requis.'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/ElyNova_bot?start=ref_6628765249"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-[#1746D2] px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-colors flex items-center gap-2 text-lg"
            >
              <Zap size={20} />
              {isEn ? 'Start Now — It\'s Free' : 'Commencer — C\'est Gratuit'}
            </a>
            <Link to="/contact" className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
              <ShieldCheck size={20} />
              {isEn ? 'Contact Us' : 'Contactez-nous'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
