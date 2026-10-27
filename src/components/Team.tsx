import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface TeamProps {
  lang: 'en' | 'fr';
}

const teamData = {
  en: {
    title: 'The Team',
    subtitle: 'The minds behind ElyNova — passionate builders shaping the future of mobile mining.',
    members: [
      {
        name: 'Alexandre Dupont',
        role: 'Lead Blockchain Engineer',
        bio: '10+ years in distributed systems. Former architect at major DeFi protocols. Passionate about accessible crypto.',
        specialties: ['Smart Contracts', 'Rust', 'Zero-Knowledge'],
        avatar: 'AD',
        gradient: 'from-primary to-cyan-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Sophie Martin',
        role: 'Fullstack Developer',
        bio: 'React & Rust enthusiast. Built mobile-first dApps serving 100K+ users. Believes in decentralization for all.',
        specialties: ['React', 'TypeScript', 'Mobile'],
        avatar: 'SM',
        gradient: 'from-accent to-violet-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Marc Chen',
        role: 'Crypto Economist',
        bio: 'Tokenomics specialist with experience in game-theory design. Ensuring fair distribution and sustainable incentives.',
        specialties: ['Tokenomics', 'Game Theory', 'DeFi'],
        avatar: 'MC',
        gradient: 'from-emerald-400 to-green-500',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Léa Moreau',
        role: 'Community Lead',
        bio: 'Building bridges between technology and people. Grew communities from 0 to 50K+ across multiple Web3 projects.',
        specialties: ['Community', 'Marketing', 'Growth'],
        avatar: 'LM',
        gradient: 'from-orange-400 to-amber-500',
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
        bio: '10+ ans en systèmes distribués. Ancien architecte dans de grands protocoles DeFi. Passionné par la crypto accessible.',
        specialties: ['Smart Contracts', 'Rust', 'Zero-Knowledge'],
        avatar: 'AD',
        gradient: 'from-primary to-cyan-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Sophie Martin',
        role: 'Développeuse Fullstack',
        bio: 'Amoureuse de React & Rust. A construit des dApps mobile-first servant 100K+ utilisateurs. Croit en la décentralisation pour tous.',
        specialties: ['React', 'TypeScript', 'Mobile'],
        avatar: 'SM',
        gradient: 'from-accent to-violet-400',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Marc Chen',
        role: 'Économiste Crypto',
        bio: 'Spécialiste tokenomics avec expérience en conception game-théorique. Garantir une distribution équitable et des incitations durables.',
        specialties: ['Tokenomics', 'Game Theory', 'DeFi'],
        avatar: 'MC',
        gradient: 'from-emerald-400 to-green-500',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
      {
        name: 'Léa Moreau',
        role: 'Community Lead',
        bio: 'Construire des ponts entre la technologie et les personnes. A grandi des communautés de 0 à 50K+ sur plusieurs projets Web3.',
        specialties: ['Communauté', 'Marketing', 'Growth'],
        avatar: 'LM',
        gradient: 'from-orange-400 to-amber-500',
        links: { github: '#', linkedin: '#', twitter: '#' },
      },
    ],
  },
};

export default function Team({ lang }: TeamProps) {
  const data = teamData[lang];

  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            <span className="text-gradient">{data.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{data.subtitle}</p>
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
              className="feature-card p-6 text-center group"
            >
              {/* Avatar */}
              <div className={`w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br ${member.gradient} flex items-center justify-center text-background font-display font-bold text-xl shadow-lg group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-shadow`}>
                {member.avatar}
              </div>

              {/* Info */}
              <h3 className="font-display font-bold text-lg text-foreground mb-1">{member.name}</h3>
              <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{member.bio}</p>

              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {member.specialties.map(s => (
                  <span key={s} className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all">
                  <Github className="w-4 h-4" />
                </a>
                <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={member.links.twitter} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all">
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
