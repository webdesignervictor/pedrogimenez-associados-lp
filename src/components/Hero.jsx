import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Instagram, ShieldAlert, MessageCircle } from 'lucide-react';

const Hero = () => {
  const waLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20Dr.%20Pedro.%20Preciso%20de%20ajuda%20para%20recuperar%20minha%20conta.";

  // 3D Hover Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--color-brand-navy),#082F3A,#051E26)] text-white min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        {/* Background video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen"
        >
          <source src="/videos/video-hero-optimized.mp4" type="video/mp4" />
        </video>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-dark to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Column (Copy) */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-medium text-sm mb-6">
            <ShieldAlert className="w-4 h-4" />
            <span>Advocacia Especializada contra Fraudes Digitais</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-tight mb-6">
            Sua conta foi bloqueada e <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200 animate-shimmer">ninguém resolve?</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto md:mx-0 font-light">
            Atuamos juridicamente na <strong className="font-semibold text-white">recuperação rápida de contas bloqueadas</strong>. Forçamos as plataformas na justiça a devolverem seu acesso e buscarem indenizações por danos de imagem.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-cta text-white font-bold text-lg py-4 px-8 rounded-xl btn-3d-premium"
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
        <div 
          className="w-full md:w-2/5 flex justify-center perspective-1000"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ 
              rotateX, 
              rotateY,
              transformStyle: "preserve-3d" 
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full max-w-sm"
          >
            {/* Main Phone visual */}
            <div 
              style={{ transform: "translateZ(20px)" }}
              className="glass-dark rounded-[2.5rem] p-4 border-2 border-slate-700/50 relative z-10 shadow-2xl"
            >
              <div className="bg-brand-dark rounded-[2rem] h-[500px] w-full overflow-hidden relative border border-slate-800">
                <img 
                  src="/img-card-hero-pedrogimenez.png" 
                  alt="Interface de Recuperação de Conta" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              style={{ translateZ: "80px" }}
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
              style={{ translateZ: "110px" }}
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
