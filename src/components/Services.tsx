import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { 
  Building, 
  Users, 
  MapPin, 
  Activity, 
  Camera, 
  Settings,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  ChefHat,
  Palette
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn, fadeInUp, staggerContainer } from '../lib/utils';

const Services: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: true
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Eventos Corporativos",
      subtitle: "Conferencias & Seminarios",
      description: "Gestionamos toda la logística y producción técnica, asegurando que tu mensaje se transmita con claridad e impacto.",
      gradient: "from-vortize-purple-500 to-vortize-purple-700",
      borderColor: "border-vortize-purple-500/20",
      features: ["Conferencias", "Seminarios", "Lanzamientos", "Team Building"],
      image: "/assets/photos/1. Diseño de eventos corporativos.png"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Building",
      subtitle: "Bienestar & Colaboración",
      description: "Diseñamos experiencias que fomentan la colaboración, la motivación y el bienestar de tus equipos.",
      gradient: "from-vortize-turquoise-400 to-vortize-turquoise-600",
      borderColor: "border-vortize-turquoise-400/20",
      features: ["Dinámicas", "Retiros", "Workshops", "Integración"],
      image: "/assets/photos/3. Actividades de bienestar y team building.png"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Activaciones BTL",
      subtitle: "PDV & Guerrilla Marketing",
      description: "Llevamos tu marca directamente a tu público con experiencias interactivas y acciones llamativas.",
      gradient: "from-vortize-navy-500 to-vortize-navy-700",
      borderColor: "border-vortize-navy-500/20",
      features: ["PDV", "Guerrilla", "Sampling", "Experiencias"],
      image: "/assets/photos/2. Conferencias, seminarios y eventos corporativos.png"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Activaciones Deportivas",
      subtitle: "Caminatas & Competencias",
      description: "Expertos en organización de eventos deportivos desde la planeación hasta la ejecución.",
      gradient: "from-vortize-purple-400 to-vortize-turquoise-500",
      borderColor: "border-vortize-purple-400/20",
      features: ["Caminatas", "Ciclismo", "Competencias", "Wellness"],
      image: "/assets/photos/5. Activaciones deportivas.png"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Video & Fotografía",
      subtitle: "Contenido que Trasciende",
      description: "Generamos contenido fotográfico y de video que comunica de forma única y perdura en el tiempo.",
      gradient: "from-vortize-turquoise-500 to-vortize-navy-600",
      borderColor: "border-vortize-turquoise-500/20",
      features: ["Fotografía", "Video", "Streaming", "Edición"],
      image: "/assets/photos/9. Servicios complementarios – Video y fotografía.png"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Servicios Complementarios",
      subtitle: "Personal & Logística",
      description: "Personal especializado, diseño de piezas y logística completa para eventos sin contratiempos.",
      gradient: "from-vortize-navy-600 to-vortize-purple-600",
      borderColor: "border-vortize-navy-600/20",
      features: ["Personal", "Logística", "Diseño", "Producción"],
      image: "/assets/photos/6. Servicios complementarios – Personal especializado.png"
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Catering",
      subtitle: "Experiencias Gastronómicas",
      description: "Servicios gastronómicos especializados que complementan perfectamente tus eventos, desde coffee breaks hasta banquetes completos, creando experiencias memorables.",
      gradient: "from-orange-500 to-red-600",
      borderColor: "border-orange-500/20",
      features: ["Coffee Breaks", "Banquetes", "Cocktails", "Menús Temáticos"],
      image: "/assets/photos/cathering.png"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Diseños de Piezas 2D y 3D",
      subtitle: "Creatividad Visual",
      description: "Desarrollamos piezas gráficas y elementos tridimensionales únicos que dan vida a tu marca y generan impacto visual en cada evento.",
      gradient: "from-cyan-500 to-blue-600",
      borderColor: "border-cyan-500/20",
      features: ["Diseño Gráfico", "Modelado 3D", "Branding", "Elementos Visuales"],
      image: "/assets/photos/diseños_3d_2d.png"
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="services" className="py-24 vortize-section-variant2 relative overflow-hidden">
      {/* Vortize signature background system */}
      <div className="absolute inset-0">
        {/* Main floating orbs */}
        <div className="vortize-orb vortize-orb-primary" style={{ top: '10%', left: '15%', animationDelay: '1s' }}></div>
        <div className="vortize-orb vortize-orb-secondary" style={{ bottom: '15%', right: '20%', animationDelay: '4s' }}></div>
        <div className="vortize-orb vortize-orb-small" style={{ top: '50%', right: '10%', animationDelay: '7s' }}></div>
        <div className="vortize-orb vortize-orb-small" style={{ bottom: '60%', left: '60%', animationDelay: '10s' }}></div>
        
        {/* Memory trails */}
        <div className="vortize-memory-trail" style={{ top: '30%', left: '40%', animationDelay: '2s' }}></div>
        <div className="vortize-memory-trail" style={{ top: '80%', left: '10%', animationDelay: '5s' }}></div>
        
        {/* Vortize patterns */}
        <div className="absolute inset-0 vortize-pattern-organic"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="text-vortize-turquoise-400 font-semibold text-sm uppercase tracking-wider">
              Portafolio de Servicios
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
          >
            Nuestros{' '}
            <span className="gradient-text">Servicios</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Ofrecemos un portafolio completo para cubrir todas tus necesidades de eventos y marketing experiencial
          </motion.p>
        </motion.div>

        {/* Services Carousel */}
        <motion.div 
          className="relative mb-20"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                  <motion.div
                    className={cn(
                      "vortize-card p-0 h-full group relative overflow-hidden vortize-interactive",
                      service.borderColor
                    )}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Image Section */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-vortize-navy-900/20 to-vortize-navy-900/80"></div>
                      
                      {/* Icon positioned over image */}
                      <div className={cn(
                        "absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg",
                        service.gradient,
                        "group-hover:scale-110 transition-all duration-300"
                      )}>
                        <div className="text-white">
                          {React.cloneElement(service.icon, { className: "w-6 h-6" })}
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-500",
                        service.gradient
                      )}></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-vortize-turquoise-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      <h4 className="text-lg font-semibold text-vortize-purple-400 mb-4">
                        {service.subtitle}
                      </h4>
                      
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/5 text-xs font-medium text-gray-300 rounded-full border border-white/10"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.button 
                        className="flex items-center gap-2 text-vortize-turquoise-400 font-semibold group-hover:text-white transition-all duration-300"
                        whileHover={{ x: 4 }}
                      >
                        Conocer más
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </motion.button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-vortize-turquoise-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-vortize-purple-500 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 glass-dark rounded-full p-4 shadow-dark hover:shadow-dark-lg transition-all duration-300 z-10 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-vortize-turquoise-400" />
          </motion.button>
          
          <motion.button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 glass-dark rounded-full p-4 shadow-dark hover:shadow-dark-lg transition-all duration-300 z-10 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-vortize-turquoise-400" />
          </motion.button>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center"
        >
          <div className="vortize-card rounded-3xl p-8 md:p-16 relative overflow-hidden vortize-experience-element">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-vortize-purple-500/10 via-transparent to-vortize-turquoise-400/10"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-vortize-purple-500 to-vortize-turquoise-400 rounded-full flex items-center justify-center animate-glow">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                ¿Listo para crear algo{' '}
                <span className="gradient-text">increíble?</span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Transformemos tu próximo evento en una experiencia inolvidable que marque la diferencia
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button 
                  className="btn-primary text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Sparkles className="w-5 h-5" />
                  Comenzar Proyecto
                </motion.button>
                
                <motion.button 
                  className="btn-secondary font-semibold py-4 px-8 rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Portfolio
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;