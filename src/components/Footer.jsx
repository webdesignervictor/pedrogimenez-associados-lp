import React from 'react';
import { Shield, Clock, ShieldAlert } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 border-t-4 border-brand-gold">
      
      {/* Final Urgency CTA */}
      <div className="container mx-auto px-4 md:px-6 mb-20 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-brand-gold/10 blur-3xl rounded-full z-0"></div>
        
        <div className="relative z-10 glass-dark rounded-[2rem] p-8 md:p-16 border border-slate-700/50 text-center max-w-5xl mx-auto shadow-2xl">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-sm mb-8 mx-auto">
            <Clock className="w-4 h-4 animate-pulse" />
            <span>O Custo da Demora</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Cada dia sem agir é <br className="hidden md:block"/>mais um golpe no seu nome.
          </h2>
          <p className="text-xl text-slate-300 font-light mb-10 max-w-2xl mx-auto">
            A plataforma não tem pressa. Nós temos. Recupere sua conta, seu prestígio e garanta sua indenização judicial.
          </p>
          
          <a 
            href="https://wa.me/5511999999999?text=Quero%20recuperar%20minha%20conta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-gold hover:bg-yellow-500 text-brand-navy font-black text-xl py-5 px-10 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(212,168,67,0.3)] hover:shadow-[0_0_35px_rgba(212,168,67,0.6)] transform hover:-translate-y-2 w-full sm:w-auto"
          >
            Falar com a Equipe Pedro Gimenez →
          </a>
          <p className="mt-6 text-sm text-slate-400 flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 text-green-500" />
            Atendimento sigiloso e análise 100% gratuita.
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center">
                <Shield className="text-brand-navy w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold font-sans tracking-tight leading-none text-white">
                  PG&A
                </span>
                <span className="text-[0.65rem] uppercase tracking-widest font-medium text-brand-gold">
                  Pedro Gimenez & Associados
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 pe-4">
               Escritório de advocacia boutique especializado em Direito Digital e Defesa do Consumidor frente a grandes corporações de tecnologia.
            </p>
            <div className="text-slate-500 text-sm font-semibold">
               Atuação 100% Digital / Todo o Brasil
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              Acesso Rápido
            </h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#como-funciona" className="hover:text-brand-gold transition-colors">Processo de Recuperação</a></li>
              <li><a href="#direitos" className="hover:text-brand-gold transition-colors">Direitos do Usuário (CDC)</a></li>
              <li><a href="#faq" className="hover:text-brand-gold transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-2 h-2 bg-brand-gold rounded-full"></span>
              Contato Oficial
            </h4>
            <div className="space-y-4 text-slate-400">
              <p>Email: <a href="mailto:contato@pedrogimenez.adv.br" className="hover:text-brand-gold transition-colors">contato@pedrogimenez.adv.br</a></p>
              <p>WhatsApp: <span className="text-white font-medium">(11) 99999-9999</span></p>
              <div className="mt-6 pt-6 border-t border-slate-800">
                 <p className="text-sm font-mono text-slate-500">OAB/SP 123.456</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Pedro Gimenez & Associados. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
