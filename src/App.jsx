import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Timeline from './components/Timeline';
import LegalEducation from './components/LegalEducation';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans selection:bg-brand-gold/30 selection:text-brand-navy">
      <Header />
      <main>
        <Hero />
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
