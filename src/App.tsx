import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TokenSection from './components/TokenSection';
import Features from './components/Features';
import Security from './components/Security';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import Vision from './components/Vision';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'fr'>('en');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLang = () => setLang(l => l === 'en' ? 'fr' : 'en');

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar scrolled={scrolled} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <TokenSection lang={lang} />
        <Features lang={lang} />
        <Security lang={lang} />
        <Tokenomics lang={lang} />
        <Roadmap lang={lang} />
        <Team lang={lang} />
        <Vision lang={lang} />
        <CTA lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
