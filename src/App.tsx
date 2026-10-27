import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
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
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar scrolled={scrolled} lang={lang} toggleLang={toggleLang} />
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Tokenomics lang={lang} />
        <Roadmap lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
