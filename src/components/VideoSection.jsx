import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20 bg-brand-navy relative overflow-hidden" id="video">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-brand-gold/5 blur-3xl rounded-full z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight"
          >
            Entenda como <span className="text-brand-gold">resolvemos o seu problema</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-300 font-medium"
          >
            Assista ao vídeo abaixo e veja o passo a passo de como nossa equipe atua para recuperar contas invadidas.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto relative group cursor-pointer"
        >
          {/* Outer glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 via-brand-cta/20 to-brand-gold/20 rounded-3xl blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          
          <div className="relative aspect-video bg-brand-dark rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            {/* VSL: Vídeo não listado do YouTube */}
            {/* O "ID_DO_VIDEO" é o código que fica no final da URL do YouTube (ex: watch?v=ABCDEFG) */}
            <iframe 
              className="absolute top-0 left-0 w-full h-full" 
              src="https://www.youtube.com/embed/COLOQUE_AQUI_O_ID_DO_VIDEO?rel=0&modestbranding=1" 
              title="Apresentação Pedro Gimenez & Associados" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center flex flex-col items-center"
        >
          <a 
            href="https://wa.me/5517991481101?text=Ol%C3%A1%20Dr%20Pedro%2C%20preciso%20de%20ajuda%20para%20recuperar%20minha%20conta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand-cta text-white font-bold text-lg py-4 px-10 rounded-xl btn-premium-shimmer shadow-premium w-full sm:w-auto"
          >
            Falar com Especialista Agora
          </a>
          <p className="mt-4 text-slate-400 text-sm flex items-center gap-2 font-medium">
             <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
             Análise inicial 100% gratuita
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
