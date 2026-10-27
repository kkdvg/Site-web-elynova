import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface Props {
  lang: 'en' | 'fr';
}

const team = {
  en: [
    { name: 'Alexandre Dupont', role: 'Lead Blockchain Engineer', bio: '10+ years in distributed systems. Former architect at major DeFi protocols.', initials: 'AD', gradient: 'from-blue-500 to-cyan-400' },
    { name: 'Sophie Martin', role: 'Fullstack Developer', bio: 'React & Rust enthusiast. Built mobile-first dApps serving 100K+ users.', initials: 'SM', gradient: 'from-violet-500 to-purple-400' },
    { name: 'Marc Chen', role: 'Crypto Economist', bio: 'Tokenomics specialist with deep expertise in game theory design.', initials: 'MC', gradient: 'from-emerald-500 to-teal-400' },
    { name: 'Léa Moreau', role: 'Community Lead', bio: 'Growing Web3 communities from 0 to 50K+ across multiple projects.', initials: 'LM', gradient: 'from-orange-500 to-amber-400' },
  ],
  fr: [
    { name: 'Alexandre Dupont', role: 'Lead Blockchain Engineer', bio: '10+ ans en systèmes distribués. Ancien architecte dans de grands protocoles DeFi.', initials: 'AD', gradient: 'from-blue-500 to-cyan-400' },
    { name: 'Sophie Martin', role: 'Développeuse Fullstack', bio: 'Amoureuse de React & Rust. A construit des dApps mobile-first servant 100K+ utilisateurs.', initials: 'SM', gradient: 'from-violet-500 to-purple-400' },
    { name: 'Marc Chen', role: 'Économiste Crypto', bio: 'Spécialiste tokenomics avec une expertise approfondie en conception game-théorique.', initials: 'MC', gradient: 'from-emerald-500 to-teal-400' },
    { name: 'Léa Moreau', role: 'Community Lead', bio: 'Croissance de communautés Web3 de 0 à 50K+ à travers plusieurs projets.', initials: 'LM', gradient: 'from-orange-500 to-amber-400' },
  ],
};

export default function Team({ lang }: Props) {
  const members = team[lang];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">{lang === 'en' ? 'Team' : 'Équipe'}</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{lang === 'en' ? 'The Minds Behind ElyNova' : 'Les Esprits Derrière ElyNova'}</h2>
          <p className="text-lg text-slate-600">{lang === 'en' ? 'Passionate builders shaping the future of mobile mining.' : 'Des bâtisseurs passionnés qui façonnent l\'avenir du minage mobile.'}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {members.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all text-center group">
              <div className={`w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br ${m.gradient} flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                {m.initials}
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-1">{m.name}</h3>
              <p className="text-blue-600 text-sm font-medium mb-3">{m.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{m.bio}</p>
              <div className="flex justify-center gap-2">
                {[Github, Linkedin, Twitter].map((Icon, idx) => (
                  <a key={idx} href="#" className="p-2 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
