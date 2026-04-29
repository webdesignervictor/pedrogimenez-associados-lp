import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Preciso pagar para analisar meu caso?",
      a: "Não. A análise inicial é 100% gratuita. Avaliamos a viabilidade jurídica do seu caso antes de qualquer compromisso."
    },
    {
      q: "Em quanto tempo posso recuperar minha conta?",
      a: "Pela via judicial, buscamos uma liminar que obriga a plataforma a devolver o acesso em poucos dias (geralmente 24h a 48h após a decisão), sob pena de multa."
    },
    {
      q: "Posso perder minha conta definitivamente?",
      a: "Sim, se você não agir rápido. Os golpistas podem causar o banimento permanente por violação de termos. A via judicial é o caminho mais seguro para evitar isso."
    },
    {
      q: "Posso contratar mesmo não sendo de SP?",
      a: "Sim. Atuamos em todo o Brasil de forma 100% digital. O processo é eletrônico e as reuniões ocorrem por vídeo ou WhatsApp."
    },
    {
      q: "Tenho direito à indenização?",
      a: "Em muitos casos, sim. A falha na segurança da plataforma gera o dever de indenizar pelos danos morais e eventuais prejuízos financeiros (lucros cessantes)."
    },
    {
      q: "Meu caso realmente tem solução?",
      a: "A grande maioria dos casos de invasão e bloqueio indevido tem solução jurídica, desde que as provas sejam preservadas e a ação seja rápida."
    },
    {
      q: "E se a plataforma disser que não pode fazer nada?",
      a: "O suporte das redes sociais é limitado por robôs. A justiça tem o poder de obrigar os engenheiros da plataforma a restaurarem seu acesso manualmente."
    }
  ];

  return (
    <section className="py-24 bg-brand-light" id="faq">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight"
          >
            Dúvidas comuns sobre recuperação de contas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 font-medium"
          >
            Entenda como funciona o processo e quais são seus direitos.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'border-brand-gold bg-brand-light shadow-md' : 'border-slate-200 bg-[#FAF8F5] hover:border-slate-300'
              }`}
            >
              <button 
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center"
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              >
                <span className={`font-bold text-lg pr-8 ${openIndex === index ? 'text-brand-navy' : 'text-slate-700'}`}>
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180 text-brand-gold' : 'text-slate-400'
                  }`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Action Call */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-brand-navy mb-4">Ainda tem alguma dúvida?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Não tome decisões baseadas em dicas da internet. Fale diretamente com nossa equipe e entenda as reais opções jurídicas para o seu caso específico.
          </p>
          <a 
            href="https://wa.me/5517991481101?text=Ol%C3%A1%2C%20Dr.%20Pedro.%20Preciso%20de%20ajuda%20para%20recuperar%20minha%20conta." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-cta text-white font-bold text-lg py-4 px-10 rounded-xl btn-premium-shimmer shadow-premium group"
          >
            <MessageCircle className="w-5 h-5 text-white group-hover:animate-bounce" />
            Falar com especialista no WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
