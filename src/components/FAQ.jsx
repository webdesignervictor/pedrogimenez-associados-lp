import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Preciso pagar alguma coisa agora para avaliar meu caso?",
      a: "Não. A análise inicial do seu caso é 100% gratuita. Escutamos sua situação, avaliamos os prints e informamos se o seu caso tem viabilidade jurídica para recuperação e indenização."
    },
    {
      q: "Em quanto tempo recupero minha conta?",
      a: "O bloqueio administrativo costuma demorar e muitas vezes não funciona. Já na via judicial, ingressamos com um pedido Liminar. Quando o Juiz aprova (o que ocorre geralmente em dias), a Meta/Plataforma é obrigada a devolver a conta em prazos curtos como 24h ou 48h, sob pena de multa diária pesada."
    },
    {
      q: "Posso perder minha conta para sempre?",
      a: "Sim. Se os golpistas violarem as diretrizes (o que acontece muito em golpes de PIX), o Instagram pode excluir a conta permanentemente. Por isso, a ação rápida via judicial é a forma mais segura de contornar os robôs do suporte e garantir seu direito."
    },
    {
      q: "Eu não sou de SP, posso contratar vocês?",
      a: "Sim. Nossos atendimentos e atuações são 100% online. O sistema judicial hoje é eletrônico (processo digital).  Garantimos eficiência e agilidade para clientes de qualquer lugar do Brasil."
    },
    {
      q: "Vou receber Indenização por Danos Morais?",
      a: "As chances são altas. A invasão configura quebra de segurança do consumidor. Os tribunais brasileiros já pacificaram o entendimento de que a rede social, ao falhar na segurança, deve reparar os danos gerados pela angústia e prejuízo do usuário."
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
            Dúvidas Frequentes
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 font-medium"
          >
            Respostas transparentes sobre o processo de recuperação e seus direitos.
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
            href="https://wa.me/5511999999999" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-cta text-white font-bold text-lg py-4 px-10 rounded-xl btn-premium-shimmer shadow-premium group"
          >
            <MessageCircle className="w-5 h-5 text-white group-hover:animate-bounce" />
            Tirar Dúvida no WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
