import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, ShieldAlert, ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  const waLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dr.%20Pedro.%20Preciso%20de%20ajuda%20para%20recuperar%20minha%20conta.";

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--color-brand-navy),_#020617,_#000000)] text-white min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#020617] to-transparent"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-30 z-0"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column (Copy) */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-medium text-sm mb-6">
            <ShieldAlert className="w-4 h-4" />
            <span>Advocacia Especializada contra Fraudes Digitais</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-6">
            Sua conta foi invadida e <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">ninguém resolve?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 font-light">
            Atuamos juridicamente na <strong className="font-semibold text-white">recuperação rápida de contas hackeadas</strong>. Forçamos as plataformas na justiça a devolverem seu acesso e buscarem indenizações por danos de imagem.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-gold text-brand-navy font-bold text-lg py-4 px-8 rounded-xl btn-3d-premium"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Diagnóstico Gratuito
            </a>
            <span className="text-sm text-slate-400 font-medium flex items-center gap-1.5 mt-3 sm:mt-0">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Resposta no WhatsApp em 2 min
            </span>
          </div>
        </div>

        {/* Right Column (Visual) */}
        <div className="w-full md:w-2/5 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-sm"
          >
            {/* Main Phone visual */}
            <div className="glass-dark rounded-[2.5rem] p-4 border-2 border-slate-700/50 relative z-10 shadow-2xl">
              <div className="bg-brand-dark rounded-[2rem] h-[500px] w-full overflow-hidden relative border border-slate-800">
                {/* Simulated lock screen */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-b from-slate-900 to-brand-navy">
                  <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mb-6">
                    <ShieldAlert className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">Acesso Negado</h3>
                  <p className="text-slate-400 text-center text-sm mb-8">Essa conta não pertence mais a você. A senha foi alterada.</p>
                  
                  {/* Fake input field */}
                  <div className="w-full bg-slate-800 rounded-lg p-3 border border-slate-700 mb-4 opacity-50">
                    <div className="w-24 h-2 bg-slate-600 rounded"></div>
                  </div>
                  <div className="w-full bg-brand-gold/20 rounded-lg p-4 border border-brand-gold/30 text-center text-brand-gold font-medium">
                    Recuperar via Justiça
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 glass rounded-2xl p-4 flex items-center gap-3 shadow-xl z-20"
            >
              <div className="bg-gradient-to-br from-pink-500 to-orange-400 p-2 rounded-lg">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-800 font-bold text-sm leading-tight">Instagram</p>
                <p className="text-red-500 text-xs font-semibold">Hackeado</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-6 glass rounded-2xl p-4 flex items-center gap-3 shadow-xl z-20"
            >
              <div className="bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-lg">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-slate-800 font-bold text-sm leading-tight">WhatsApp</p>
                <p className="text-red-500 text-xs font-semibold">Clonado</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
