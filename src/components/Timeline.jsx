import React from 'react';
import { motion } from 'framer-motion';
import { Search, Send, Scale, Unlock } from 'lucide-react';

const Timeline = () => {
  const steps = [
    {
      icon: Search,
      title: "Análise do Caso (100% Gratuita)",
      desc: "Você entra em contato pelo WhatsApp. Nossa equipe avalia a situação da sua conta e as provas disponíveis sem custo algum."
    },
    {
      icon: Send,
      title: "Notificação Extrajudicial",
      desc: "Tentamos uma resolução amigável enviando uma notificação formal e com prazo legal diretamente ao Meta/Plataforma."
    },
    {
      icon: Scale,
      title: "Ação Judicial de Urgência",
      desc: "Se a plataforma ignorar a notificação, entramos com um pedido de Liminar (Tutela de Urgência) e de Indenização por Danos Morais."
    },
    {
      icon: Unlock,
      title: "Conta Recuperada & Indenização",
      desc: "Você recebe seu acesso de volta por determinação judicial e a plataforma pode ser condenada a indenizar seus prejuízos."
    }
  ];

  return (
    <section className="py-24 bg-brand-light relative" id="como-funciona">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight"
          >
            Como vamos recuperar a <span className="text-brand-gold">sua conta</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 font-medium"
          >
            Esqueça o suporte automatizado que não leva a lugar nenhum. Atuamos com força legal para obrigar a devolução.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Line Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-brand-gold/10 via-brand-gold to-brand-gold/10 transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                
                {/* Step Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className={`p-8 bg-[#FAF8F5] rounded-2xl shadow-lg border border-slate-100 hover:border-brand-gold/30 transition-colors relative group
                    ${index % 2 === 0 ? 'md:rounded-tr-none md:rounded-br-2xl' : 'md:rounded-tl-none md:rounded-bl-2xl'}
                  `}>
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-transparent to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-br-2xl"></div>
                    <span className="text-sm font-bold text-brand-gold tracking-wider uppercase mb-2 block">Passo 0{index + 1}</span>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Step Connector Node */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full bg-brand-navy border-4 border-brand-light items-center justify-center shadow-xl z-10 transition-transform hover:scale-110">
                  <step.icon className="w-6 h-6 text-brand-gold" />
                </div>

                {/* Mobile visualization (Empty opposite side for spacing) */}
                <div className="hidden md:block w-1/2"></div>
                
                {/* Mobile Icon (since the node is hidden on mobile) */}
                <div className="md:hidden flex items-center justify-center self-start w-12 h-12 rounded-full bg-brand-navy text-brand-gold -mt-6 ml-4 relative z-10 shadow-lg border-2 border-brand-light">
                   <step.icon className="w-5 h-5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;
