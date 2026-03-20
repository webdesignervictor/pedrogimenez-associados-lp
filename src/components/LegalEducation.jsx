import React from 'react';
import { motion } from 'framer-motion';
import { Scale, BookOpen, FileCheck, ShieldCheck } from 'lucide-react';

const LegalEducation = () => {
  const laws = [
    {
      icon: BookOpen,
      title: "É uma relação de consumo",
      desc: "Você é usuário da plataforma e tem a proteção do Código de Defesa do Consumidor (CDC)."
    },
    {
      icon: ShieldCheck,
      title: "Falha de Segurança",
      desc: "Se a sua conta foi invadida e o hacker mudou seus dados mesmo você tendo proteção, a plataforma falhou em garantir a segurança dos seus dados."
    },
    {
      icon: Scale,
      title: "Direito a Indenização",
      desc: "Pela falha na prestação do serviço e os transtornos gerados pela invasão, você tem direito a buscar indenização por Danos Morais na Justiça."
    },
    {
      icon: FileCheck,
      title: "Jurisprudência Favorável",
      desc: "Juízes em todo o Brasil já estão condenando plataformas (Meta e outras) a devolverem contas de usuários em menos de 48h com aplicação de multas diárias pesadas."
    }
  ];

  return (
    <section className="py-24 bg-brand-navy relative text-white" id="direitos">
      {/* Background Decorators */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-dark to-brand-navy/0 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20">
                <Scale className="w-8 h-8 text-brand-gold" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
                Você sabia que a <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-cyan-200">plataforma tem a obrigação</span> de proteger sua conta?
              </h2>
              <p className="text-slate-300 text-lg mb-8 font-light">
                O suporte do Instagram/WhatsApp dirá que você precisa enviar um vídeo de selfie, e se não funcionar, dirão que não podem fazer nada. <strong>A Justiça diz o contrário e pune esse tipo de negligência.</strong>
              </p>
              
              <div className="bg-brand-dark/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
                <p className="text-brand-gold font-bold mb-2 text-xl block">"A responsabilidade é objetiva."</p>
                <p className="text-sm text-slate-400">
                   Significa que, uma vez provado o hackeamento, a plataforma responde pelos danos gerados, independentemente de culpa na verificação.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {laws.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-slate-800/40 border border-slate-700 p-8 rounded-3xl hover:bg-slate-800/80 transition-all hover:border-brand-gold/30 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 shadow-inner border border-slate-800">
                    <item.icon className="w-5 h-5 text-brand-gold" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="mt-12 text-center"
            >
               <a 
                 href="https://wa.me/5511999999999" 
                 className="inline-flex items-center justify-center gap-3 bg-brand-cta text-white font-bold text-lg py-4 px-10 rounded-xl btn-premium-shimmer shadow-premium"
               >
                 Entender Meus Direitos Agora
               </a>
               <p className="mt-4 text-slate-500 text-xs">Ficou com dúvidas? Consulte um especialista legal.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LegalEducation;
