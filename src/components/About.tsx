import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award, Zap, Heart, Eye, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn, fadeInUp, fadeInScale, staggerContainer } from '../lib/utils';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const features = [
    {
      icon: <Lightbulb className="w-7 h-7" />,
      title: "Creatividad Auténtica",
      description: "Ideas frescas y originales adaptadas a la esencia de tu marca",
      color: "from-vortize-purple-500 to-vortize-purple-600"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Gestión Integral",
      description: "Ejecutamos cada detalle con precisión y profesionalismo garantizado",
      color: "from-vortize-turquoise-400 to-vortize-turquoise-500"
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Atención al Detalle",
      description: "Cuidamos desde la iluminación hasta la capacitación del personal",
      color: "from-vortize-navy-500 to-vortize-navy-600"
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Resultados Medibles",
      description: "Generamos impacto tangible en la reputación y conexión de tu marca",
      color: "from-vortize-purple-400 to-vortize-turquoise-400"
    }
  ];

  const values = [
    { icon: <Zap className="w-6 h-6" />, text: "Innovación" },
    { icon: <Heart className="w-6 h-6" />, text: "Pasión" },
    { icon: <Eye className="w-6 h-6" />, text: "Visión" },
    { icon: <TrendingUp className="w-6 h-6" />, text: "Crecimiento" }
  ];

  return (
    <section id="about" className="py-24 vortize-section-variant1 relative overflow-hidden">
      {/* Vortize signature background system */}
      <div className="absolute inset-0">
        {/* Main floating orbs */}
        <div className="vortize-orb vortize-orb-secondary" style={{ top: '20%', right: '8%', animationDelay: '2s' }}></div>
        <div className="vortize-orb vortize-orb-accent" style={{ bottom: '30%', left: '5%', animationDelay: '5s' }}></div>
        <div className="vortize-orb vortize-orb-small" style={{ top: '60%', left: '70%', animationDelay: '8s' }}></div>
        
        {/* Memory trails */}
        <div className="vortize-memory-trail" style={{ top: '40%', left: '20%', animationDelay: '1s' }}></div>
        <div className="vortize-memory-trail" style={{ top: '15%', left: '75%', animationDelay: '3s' }}></div>
        
        {/* Vortize patterns */}
        <div className="absolute inset-0 vortize-pattern-organic"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Hero text section */}
        <motion.div 
          className="text-center mb-20"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="text-vortize-turquoise-400 font-semibold text-sm uppercase tracking-wider">
              Quiénes Somos
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
          >
            En Vortize no solo{' '}
            <span className="block mt-2">
              planificamos eventos,
            </span>
            <span className="gradient-text block mt-2">
              creamos experiencias
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Somos un equipo de estrategas, creativos y productores apasionados por transformar 
            tus objetivos de marca en momentos memorables.
          </motion.p>
        </motion.div>

        {/* Features grid with organic layout */}
        <motion.div 
          className="mb-24"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInScale}
                className="group"
              >
                <div className={cn(
                  "vortize-card p-8 h-full text-center group-hover:scale-105 transition-all duration-500 vortize-interactive",
                  "relative overflow-hidden"
                )}>
                  {/* Animated background on hover */}
                  <div className={cn(
                    "absolute top-0 left-0 w-full h-1 bg-gradient-to-r transition-all duration-500",
                    feature.color,
                    "group-hover:h-full group-hover:opacity-10"
                  )}></div>
                  
                  <div className={cn(
                    "relative z-10 mb-6 mx-auto w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br",
                    feature.color,
                    "group-hover:scale-110 transition-transform duration-300"
                  )}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-vortize-turquoise-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced content section */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="vortize-card rounded-3xl p-8 md:p-16 relative overflow-hidden vortize-experience-element"
        >
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
            <div className="w-full h-full bg-gradient-to-l from-vortize-purple-500 to-transparent"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center relative z-10">
            {/* Content side */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <span className="text-vortize-purple-400 font-semibold text-sm uppercase tracking-wider">
                  Nuestro Enfoque
                </span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                Creatividad, ejecución impecable y{' '}
                <span className="gradient-text">conexión humana</span>
              </h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Entendemos que cada detalle cuenta y que un evento bien planeado es una poderosa 
                herramienta de comunicación y crecimiento. Nuestro equipo combina experiencia 
                técnica con creatividad innovadora.
              </p>
              
              {/* Values */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                    whileHover={{ y: -4 }}
                  >
                    <div className="text-vortize-turquoise-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <span className="text-sm text-gray-300 font-medium">{value.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Visual side */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Main visual element */}
                <div className="surface-elevated rounded-3xl p-8 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-vortize-purple-500/20 to-vortize-turquoise-400/20"></div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-vortize-purple-500 to-vortize-turquoise-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-glow">
                      <Target className="w-10 h-10 text-white" />
                    </div>
                    
                    <h4 className="text-2xl font-bold text-white mb-2">Tu Visión</h4>
                    <p className="text-vortize-turquoise-400 font-semibold">Nuestra Pasión</p>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-vortize-turquoise-400 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-2 h-2 bg-vortize-purple-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Supporting elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-vortize-purple-500/10 rounded-full animate-float-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-vortize-turquoise-400/10 rounded-full animate-float-delayed"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;