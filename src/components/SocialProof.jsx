import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle, Verified } from 'lucide-react';

const SocialProof = () => {
  const reviews = [
    {
      initial: "R",
      name: "Rafael M.",
      status: "Conta Recuperada em 48h",
      review: "Estava desesperado porque minha conta da loja foi hackeada e estavam pedindo dinheiro pros meus clientes. A equipe foi impecável, entraram com a liminar e devolveram meu acesso super rápido."
    },
    {
      initial: "J",
      name: "Juliana T.",
      status: "WhatsApp Clonado",
      review: "Trabalho excelente. Explicaram tudo com muita clareza desde o primeiro contato no WhatsApp. Recomendo muito para quem não sabe o que fazer nessa situação terrível."
    },
    {
      initial: "M",
      name: "Marcos C.",
      status: "Indenização Recebida",
      review: "Além de recuperar a conta, me orientaram sobre o processo de danos morais, o que achei muito honesto da parte deles. Atendimento 100% transparente."
    }
  ];

  return (
    <section className="py-24 bg-brand-light relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-3/4 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="w-full md:w-5/12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy font-bold text-sm mb-6">
                <Verified className="w-4 h-4 text-blue-500" />
                <span>Casos Reais</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight leading-tight">
                Resultados que falam por <span className="text-brand-gold">nós</span>.
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md">
                Temos orgulho das nossas avaliações porque elas representam negócios salvos, angústias interrompidas e justiça sendo feita.
              </p>
              
              <div className="flex items-center gap-4 p-5 bg-[#FAF8F5] rounded-2xl border border-slate-200 shadow-sm max-w-sm">
                <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 text-slate-700" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-bold text-xl text-brand-navy leading-none">5.0</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">Classificação no Google</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-7/12 overflow-hidden relative" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
            <motion.div 
              className="flex gap-4 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            >
              {/* Double array for seamless loop */}
              {[...reviews, ...reviews].map((review, index) => (
                <div
                  key={index}
                  className="bg-[#FAF8F5] p-6 rounded-2xl shadow-sm border border-slate-100 w-[300px] shrink-0"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold font-bold text-lg shrink-0">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy leading-none mb-1">{review.name}</h4>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs font-semibold text-green-600">{review.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">"{review.review}"</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
