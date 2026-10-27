import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const teamData = {
  en: {
    title: 'The Team',
    subtitle: 'The minds behind ElyNova — passionate builders shaping the future of mobile mining.',
    members: [
      {
        name: 'Alexandre Dupont',
        role: 'Lead Blockchain Engineer',
        bio: '10+ years in distributed systems. Former architect at major DeFi protocols.',
        specialties: ['Smart Contracts', 'Rust', 'ZK Proofs'],
        avatar: 'AD',
        gradient: 'from-blue-500 to-cyan-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Sophie Martin',
        role: 'Fullstack Developer',
        bio: 'React & Rust enthusiast. Built mobile-first dApps serving 100K+ users.',
        specialties: ['React', 'TypeScript', 'Mobile'],
        avatar: 'SM',
        gradient: 'from-violet-500 to-purple-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Marc Chen',
        role: 'Crypto Economist',
        bio: 'Tokenomics specialist with experience in game-theory design.',
        specialties: ['Tokenomics', 'Game Theory', 'DeFi'],
        avatar: 'MC',
        gradient: 'from-emerald-500 to-teal-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Léa Moreau',
        role: 'Community Lead',
        bio: 'Building bridges between technology and people across Web3.',
        specialties: ['Community', 'Marketing', 'Growth'],
        avatar: 'LM',
        gradient: 'from-orange-500 to-amber-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
    ],
  },
  fr: {
    title: 'L\'Équipe',
    subtitle: 'Les esprits derrière ElyNova — des bâtisseurs passionnés qui façonnent l\'avenir du minage mobile.',
    members: [
      {
        name: 'Alexandre Dupont',
        role: 'Lead Blockchain Engineer',
        bio: '10+ ans en systèmes distribués. Ancien architecte dans de grands protocoles DeFi.',
        specialties: ['Smart Contracts', 'Rust', 'ZK Proofs'],
        avatar: 'AD',
        gradient: 'from-blue-500 to-cyan-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Sophie Martin',
        role: 'Développeuse Fullstack',
        bio: 'Amoureuse de React & Rust. A construit des dApps mobile-first servant 100K+ utilisateurs.',
        specialties: ['React', 'TypeScript', 'Mobile'],
        avatar: 'SM',
        gradient: 'from-violet-500 to-purple-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Marc Chen',
        role: 'Économiste Crypto',
        bio: 'Spécialiste tokenomics avec expérience en conception game-théorique.',
        specialties: ['Tokenomics', 'Game Theory', 'DeFi'],
        avatar: 'MC',
        gradient: 'from-emerald-500 to-teal-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Léa Moreau',
        role: 'Community Lead',
        bio: 'Construire des ponts entre la technologie et les personnes à travers le Web3.',
        specialties: ['Communauté', 'Marketing', 'Growth'],
        avatar: 'LM',
        gradient: 'from-orange-500 to-amber-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
    ],
  },
};

export default function Team({ lang }: { lang: 'en' | 'fr' }) {
  const data = teamData[lang];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">
            {lang === 'en' ? 'Behind the Protocol' : 'Derrière le protocole'}
          </span>
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6">
            {data.title}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">{data.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {data.members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 card-shadow hover:border-blue-200 hover:shadow-blue-100 transition-all duration-300 text-center"
            >
              <div className={`w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                {member.avatar}
              </div>

              <h3 className="font-bold text-lg text-slate-900 mb-1">{member.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{member.bio}</p>

              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {member.specialties.map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-slate-100 text-slate-600 font-medium">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-center gap-3">
                <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={member.links.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-slate-400 hover:text-sky-500 hover:bg-sky-50 transition-all">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
