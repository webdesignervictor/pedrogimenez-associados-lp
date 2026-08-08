import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import PainPoints from './components/PainPoints';
import Timeline from './components/Timeline';
import LegalEducation from './components/LegalEducation';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { trackLeadCapture } from './utils/tracking';

function App() {
  useEffect(() => {
    // Intercepta todos os cliques em botões do WhatsApp para disparar a conversão no CAPI e GTM
    const handleCTAClick = (e) => {
      const link = e.target.closest('a');
      if (link && link.href.includes('wa.me')) {
        trackLeadCapture({
          event_name: 'Lead',
          source: 'whatsapp_button',
          url_clicked: link.href
        });
      }
    };

    document.addEventListener('click', handleCTAClick);
    return () => document.removeEventListener('click', handleCTAClick);
  }, []);

  return (
    <div className="min-h-screen font-sans text-brand-light selection:bg-brand-gold/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <VideoSection />
        <SocialProof />
        <PainPoints />
        <Timeline />
        <LegalEducation />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
