import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CircleAlert, CircleCheck, CircleX, ChevronLeft, ChevronRight } from 'lucide-react';
import compromisedPhone from '../assets/compromised-phone.png';
import securityBg from '../assets/security-bg.png';

const PainPoints = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.85)); // 0.85 because of min-w-[85vw]
      setActiveIndex(Math.min(index, points.length - 1));
    }
  };

  const points = [
    {
      title: "Golpes contra amigos",
      text: "Estão vendendo produtos falsos ou pedindo PIX para sua família e amigos em seu nome."
    },
    {
      title: "Perda de anos de trabalho",
      text: "Sua conta é para negócios e você perdeu todos os seus clientes, seguidores e portfólio."
    },
    {
      title: "Suporte inútil da plataforma",
      text: "O reconhecimento facial não funciona, os emails automáticos não ajudam e não há atendimento humano."
    },
    {
      title: "Angústia e ansiedade",
      text: "Você se sente impotente vendo sua imagem sendo destruída sem poder fazer absolutamente nada."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-brand-navy" id="problemas">
      {/* Background Asset */}
      <div className="absolute inset-0 z-0 opacity-20 transform scale-110">
        <img src={securityBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-linear-to-b from-brand-navy via-transparent to-brand-navy opacity-80 z-1"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Isso está <span className="text-red-500 relative inline-block">
                  acontecendo com você
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-500/30 blur-[1px]"></span>
                </span> agora?
              </h2>

              {/* Visual moved from right column */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative aspect-4/5 md:aspect-auto md:h-[500px] w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10 mb-10"
              >
                <img 
                  src={compromisedPhone} 
                  alt="Account Compromised" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent opacity-60"></div>
                
                {/* Floating Alert Card */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-t-4 border-red-500"
                >
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                         <CircleX className="w-6 h-6 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-red-600 font-bold text-lg">Conta Comprometida</h3>
                        <p className="text-slate-500 text-xs">Atividade suspeita detectada</p>
                      </div>
                   </div>
                   <p className="text-slate-600 text-sm mb-4">Seu acesso original foi bloqueado. Alguém está usando sua identidade.</p>
                   <div className="w-full bg-slate-100 text-slate-400 font-bold py-3 rounded-lg text-sm text-center">
                      Recuperar Acesso Pelo Suporte
                   </div>
                   <p className="text-[10px] text-red-500 mt-2 font-medium text-center">Aviso: Tempo médio de resposta &gt; 40 dias.</p>
                </motion.div>
              </motion.div>

              <p className="text-lg text-slate-300 mb-8 max-w-lg">
                Se você se identifica com qualquer uma destas situações, você está sendo vítima de uma falha de segurança que é responsabilidade direta da rede social.
              </p>
            </motion.div>

            <div className="relative group">
              <div 
                ref={scrollRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory flex-nowrap md:flex-col md:overflow-visible pb-6 md:pb-0 gap-4 scrollbar-hide"
              >
                {points.map((point, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                     className="flex gap-4 items-start p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all hover:border-red-500/50 hover:bg-white/10 snap-center min-w-[85vw] md:min-w-0 md:w-full shadow-xl"
                  >
                    <div className="mt-1">
                      <CircleX className="w-6 h-6 text-red-500 flex-shrink-0" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{point.title}</h3>
                      <p className="text-slate-300 text-sm">{point.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Swipe Indicators */}
              <div className="flex flex-col items-center gap-4 mt-4 md:hidden">
                <div className="flex gap-2">
                  {points.map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-8 bg-red-500' : 'w-2 bg-white/20'}`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-white/40 text-xs font-medium uppercase tracking-widest animate-pulse">
                  <ChevronLeft className="w-4 h-4" />
                  <span>Deslize</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.5 }}
               className="mt-10"
            >
               <div className="p-8 rounded-3xl relative overflow-hidden bg-brand-dark/40 border-2 border-brand-gold/20 backdrop-blur-md shadow-[0_0_50px_rgba(6,182,212,0.1)] group hover:border-brand-gold/40 transition-all duration-500">
                 {/* Decorative background glow */}
                 <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl group-hover:bg-brand-gold/20 transition-colors"></div>
                 <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-cta/10 rounded-full blur-3xl group-hover:bg-brand-cta/20 transition-colors"></div>
                 
                 <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
                   <div className="flex items-start gap-5">
                     <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0 border border-brand-gold/20 shadow-inner">
                        <CircleCheck className="w-7 h-7 text-brand-gold" aria-hidden="true" />
                     </div>
                     <div>
                       <h4 className="text-white font-extrabold text-2xl mb-2 flex items-center gap-2">
                          Existe Solução
                       </h4>
                       <p className="text-slate-300 text-base max-w-md leading-relaxed">
                         A lei obriga as plataformas a devolverem seu acesso e indenizarem seus prejuízos por falha na prestação do serviço.
                       </p>
                     </div>
                   </div>
                   
                   <div className="w-full md:w-auto shrink-0">
                     <a 
                       href="https://wa.me/5511999999999" 
                       className="inline-flex items-center justify-center gap-3 bg-brand-cta text-white font-bold text-lg py-4 px-10 rounded-xl btn-premium-shimmer shadow-premium w-full md:w-auto text-center"
                     >
                       Avaliar meu caso gratuitamente
                     </a>
                     <div className="flex items-center justify-center gap-2 mt-3 text-brand-gold text-[10px] font-bold uppercase tracking-widest opacity-70">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                        Consultoria Jurídica Especializada
                     </div>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>

          {/* The right column is now empty as the visual element was moved to the left column. */}
          <div className="w-full lg:w-1/2">
            {/* This column is intentionally left empty as per user's request to move the visual element.
                The layout will adjust naturally. */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
