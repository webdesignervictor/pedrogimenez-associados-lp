import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dr.%20Pedro.%20Preciso%20de%20ajuda%20para%20recuperar%20minha%20conta."; // Placeholder

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center">
            <Shield className="text-brand-navy w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold font-sans tracking-tight leading-none ${isScrolled ? 'text-white' : 'text-white'}`}>
              PG&A
            </span>
            <span className={`text-[0.65rem] uppercase tracking-widest font-medium ${isScrolled ? 'text-brand-gold' : 'text-brand-gold/90'}`}>
              Pedro Gimenez
            </span>
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-white/80">
            <a href="#como-funciona" className="hover:text-brand-gold transition-colors">Como Funciona</a>
            <a href="#direitos" className="hover:text-brand-gold transition-colors">Seus Direitos</a>
            <a href="#faq" className="hover:text-brand-gold transition-colors">Dúvidas Frequentes</a>
          </nav>
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-cta hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(22,163,74,0.3)] hover:shadow-[0_0_25px_rgba(22,163,74,0.5)] transform hover:-translate-y-0.5"
          >
            Falar com Especialista
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-navy border-t border-white/10 shadow-2xl">
          <div className="flex flex-col p-4 gap-4">
            <a href="#como-funciona" className="text-white/80 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Como Funciona</a>
            <a href="#direitos" className="text-white/80 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Seus Direitos</a>
            <a href="#faq" className="text-white/80 hover:text-white py-2" onClick={() => setIsMobileMenuOpen(false)}>Dúvidas Frequentes</a>
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-cta text-white font-bold py-3 px-6 rounded-lg text-center mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Falar com Especialista Agora
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
