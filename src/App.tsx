import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import EcosystemPage from './pages/Ecosystem';
import TokenPage from './pages/Token';
import TokenomicsPage from './pages/Tokenomics';
import MiningPage from './pages/Mining';
import RoadmapPage from './pages/Roadmap';
import TransparencyPage from './pages/Transparency';
import SecurityPage from './pages/Security';
import NewsPage from './pages/News';
import FAQPage from './pages/Faq';
import ContactPage from './pages/Contact';
import WhitepaperPage from './pages/Whitepaper';

export default function App() {
  const [lang, setLang] = useState<'en' | 'fr'>(() => {
    return (localStorage.getItem('lang') as 'en' | 'fr') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang(l => l === 'en' ? 'fr' : 'en');

  return (
    <Router>
      <div className="min-h-screen bg-white text-[#172033] flex flex-col">
        <Navbar lang={lang} toggleLang={toggleLang} />
        <ScrollToTop />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/ecosystem" element={<EcosystemPage lang={lang} />} />
            <Route path="/token" element={<TokenPage lang={lang} />} />
            <Route path="/tokenomics" element={<TokenomicsPage lang={lang} />} />
            <Route path="/mining" element={<MiningPage lang={lang} />} />
            <Route path="/roadmap" element={<RoadmapPage lang={lang} />} />
            <Route path="/transparency" element={<TransparencyPage lang={lang} />} />
            <Route path="/security" element={<SecurityPage lang={lang} />} />
            <Route path="/news" element={<NewsPage lang={lang} />} />
            <Route path="/faq" element={<FAQPage lang={lang} />} />
            <Route path="/contact" element={<ContactPage lang={lang} />} />
            <Route path="/whitepaper" element={<WhitepaperPage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
}
