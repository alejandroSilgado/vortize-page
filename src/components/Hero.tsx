import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Play, Zap } from 'lucide-react';
import { cn, fadeInUp, fadeInScale, staggerContainer } from '../lib/utils';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen relative overflow-hidden vortize-section-base">
      {/* Vortize Signature Background System */}
      <div className="absolute inset-0">
        {/* Main Vortize floating orbs */}
        <div className="vortize-orb vortize-orb-primary" style={{ top: '15%', left: '8%', animationDelay: '0s' }}></div>
        <div className="vortize-orb vortize-orb-secondary" style={{ top: '60%', right: '10%', animationDelay: '3s' }}></div>
        <div className="vortize-orb vortize-orb-accent" style={{ bottom: '25%', left: '15%', animationDelay: '6s' }}></div>
        <div className="vortize-orb vortize-orb-small" style={{ top: '30%', right: '25%', animationDelay: '9s' }}></div>
        <div className="vortize-orb vortize-orb-small" style={{ bottom: '45%', right: '45%', animationDelay: '12s' }}></div>
        
        {/* Memory trail elements - representing experiences created */}
        <div className="vortize-memory-trail" style={{ top: '20%', left: '30%', animationDelay: '0s' }}></div>
        <div className="vortize-memory-trail" style={{ top: '70%', left: '60%', animationDelay: '2s' }}></div>
        <div className="vortize-memory-trail" style={{ top: '45%', left: '80%', animationDelay: '4s' }}></div>
        
        {/* Vortize brand pattern overlay */}
        <div className="absolute inset-0 vortize-pattern-dots"></div>
        <div className="absolute inset-0 vortize-pattern-organic"></div>
        
        {/* Interactive connection lines - representing human connections */}
        <div className="absolute top-1/4 left-1/3 w-1 h-1 bg-vortize-turquoise-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-vortize-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/6 w-1 h-1 bg-vortize-turquoise-400 rounded-full animate-bounce opacity-30"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Enhanced Logo with Vortize identity */}
          <motion.div 
            variants={fadeInScale} 
            className="mb-16"
          >
            <div className="relative inline-block">
              <img 
                src="/assets/logos/vortize-logo-white.png" 
                alt="Vortize" 
                className="h-16 md:h-20 mx-auto filter drop-shadow-2xl"
                style={{ 
                  backgroundColor: 'transparent',
                  mixBlendMode: 'screen'
                }}
              />
              {/* Experience creation indicators */}
              <div className="absolute -top-3 -right-3">
                <div className="w-3 h-3 bg-vortize-turquoise-400 rounded-full animate-ping"></div>
              </div>
              <div className="absolute -bottom-1 -left-2">
                <Zap className="w-4 h-4 text-vortize-purple-400 animate-pulse" />
              </div>
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                <Sparkles className="w-5 h-5 text-vortize-turquoise-400 animate-bounce" />
              </div>
            </div>
          </motion.div>

          {/* Main heading - Emphasizing experience creation */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight tracking-tight"
          >
            <span className="block mb-2">Creamos</span>
            <span className="gradient-text block mb-4 vortize-experience-element">Experiencias</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl font-light opacity-90 mb-2">
              que{' '}
              <span className="text-vortize-turquoise-400 font-bold">Trascienden</span>
            </span>
          </motion.h1>

          {/* Enhanced description with BTL focus */}
          <motion.div
            variants={fadeInUp}
            className="mb-16"
          >
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-5xl mx-auto leading-relaxed font-light">
              No solo planificamos eventos. <span className="text-vortize-turquoise-400 font-semibold">Diseñamos momentos</span> que conectan, 
              <span className="text-vortize-purple-400 font-semibold"> emociones que perduran</span> y experiencias que transforman tu marca en recuerdos inolvidables.
            </p>
            
            {/* BTL-inspired interactive elements */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <motion.div 
                className="vortize-interactive flex items-center gap-2 px-4 py-2 vortize-card rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-vortize-purple-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Eventos Corporativos</span>
              </motion.div>
              <motion.div 
                className="vortize-interactive flex items-center gap-2 px-4 py-2 vortize-card rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-vortize-turquoise-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Marketing BTL</span>
              </motion.div>
              <motion.div 
                className="vortize-interactive flex items-center gap-2 px-4 py-2 vortize-card rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-2 h-2 bg-vortize-navy-400 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Activaciones</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced CTAs with BTL personality */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
          >
            <motion.button 
              className={cn("btn-primary text-white font-semibold py-5 px-10 rounded-2xl flex items-center gap-3 text-lg vortize-interactive")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              Crear una Experiencia
            </motion.button>
            
            <motion.button 
              className="btn-secondary font-semibold py-5 px-10 rounded-2xl flex items-center gap-3 text-lg vortize-interactive"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-5 h-5" />
              Ver Casos de Éxito
            </motion.button>
          </motion.div>


          {/* Scroll indicator */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center"
          >
            <div className="text-xs text-gray-500 mb-4 uppercase tracking-widest">Descubre más</div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="w-6 h-6 text-gray-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;