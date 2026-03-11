import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react';

const PainPoints = () => {
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
    <section className="py-24 bg-white" id="problemas">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 tracking-tight">
                Isso está <span className="text-red-600">acontecendo com você</span> agora?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">
                Se você se identifica com qualquer uma destas situações, você está sendo vítima de uma falha de segurança que é responsabilidade direta da rede social.
              </p>
            </motion.div>

            <div className="flex overflow-x-auto snap-x snap-mandatory flex-nowrap md:flex-col md:overflow-visible pb-6 md:pb-0 gap-4 custom-scrollbar">
              {points.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 items-start p-4 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:border-red-200 hover:bg-red-50/50 snap-center min-w-[85vw] md:min-w-0 md:w-full"
                >
                  <div className="mt-1">
                    <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-1">{point.title}</h3>
                    <p className="text-slate-600 text-sm">{point.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.5 }}
               className="mt-10"
            >
              <div className="p-6 bg-brand-navy rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
                       <CheckCircle2 className="w-5 h-5 text-brand-gold" />
                       Existe Solução
                    </h4>
                    <p className="text-slate-300 text-sm">A lei obriga as plataformas a devolverem seu acesso e indenizarem seus prejuízos.</p>
                  </div>
                  <a href="https://wa.me/5511999999999" className="whitespace-nowrap bg-brand-gold hover:bg-yellow-500 text-brand-navy font-bold py-3 px-6 rounded-lg transition-colors w-full sm:w-auto text-center">
                    Avaliar meu caso
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual representation of the problem */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 h-[600px] w-full max-w-md mx-auto"
            >
              {/* Fake Instagram Header */}
              <div className="h-16 bg-white border-b border-slate-200 flex items-center px-4 justify-between">
                <div className="font-bold text-lg">SeuPerfil_Oficial</div>
                <AlertCircle className="text-red-500" />
              </div>
              
              {/* Fake Fake Post */}
              <div className="p-4 bg-white mb-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  <div>
                    <div className="font-bold text-sm">SeuPerfil_Oficial</div>
                    <div className="text-xs text-slate-500">Há 5 minutos</div>
                  </div>
                </div>
                <div className="h-64 bg-slate-900 rounded-xl mb-3 flex items-center justify-center p-6 text-center">
                  <div className="text-white font-bold text-2xl">
                    OPORTUNIDADE ÚNICA <br/>
                    <span className="text-green-400">PIX EM DOBRO</span>
                  </div>
                </div>
                <div className="text-sm">
                  <span className="font-bold">SeuPerfil_Oficial</span> Galera, oportunidade de investimento, me chamem no DM! 🤑💸
                </div>
              </div>
              
              {/* Overlay warning */}
              <div className="absolute inset-0 bg-red-900/40 backdrop-blur-sm flex items-center justify-center p-6">
                <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-sm w-full text-center border-t-4 border-red-500">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-red-600 font-bold text-xl mb-2">Conta Comprometida</h3>
                  <p className="text-slate-600 text-sm mb-6">Esta atividade foi reportada e o acesso original foi bloqueado. Alguém está usando sua identidade.</p>
                  
                  <div className="w-full bg-slate-100 text-slate-400 font-bold py-3 rounded-lg text-sm">
                    Recuperar Acesso Pelo Suporte
                  </div>
                  <p className="text-xs text-red-500 mt-2 font-medium">Aviso: Tempo médio de resposta &gt; 40 dias.</p>
                </div>
              </div>
            </motion.div>

            {/* Decorator elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-slate-200 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;
