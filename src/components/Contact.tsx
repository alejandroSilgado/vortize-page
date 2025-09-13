import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, Send, MapPin, Clock, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn, fadeInUp, fadeInScale, staggerContainer } from '../lib/utils';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactMethods = [
    {
      icon: <MessageCircle className="w-7 h-7" />,
      title: "WhatsApp",
      description: "Respuesta inmediata",
      action: "Contactar ahora",
      gradient: "from-green-500 to-green-600",
      href: "https://wa.me/+573004031332",
      highlight: true
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Teléfono",
      description: "Llamada directa",
      action: "Llamar",
      gradient: "from-vortize-purple-500 to-vortize-purple-700",
      href: "tel:+573004031332"
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email",
      description: "Propuestas detalladas",
      action: "Enviar correo",
      gradient: "from-vortize-turquoise-400 to-vortize-turquoise-600",
      href: "mailto:info@vortize.com"
    },
    {
      icon: <Instagram className="w-7 h-7" />,
      title: "Instagram",
      description: "Síguenos",
      action: "Ver trabajos",
      gradient: "from-pink-500 to-purple-600",
      href: "https://instagram.com/vortize"
    }
  ];

  const quickInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Ubicación",
      value: "Oficina 705, edificio Sigma, avenida carrera 19 # 95-20 oficina 708"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      label: "Horario",
      value: "Lun - Vie: 8AM - 6PM"
    }
  ];

  return (
    <section id="contact" className="py-24 vortize-section-variant3 text-white relative overflow-hidden">
      {/* Vortize signature background system */}
      <div className="absolute inset-0">
        {/* Main floating orbs */}
        <div className="vortize-orb vortize-orb-accent" style={{ top: '25%', right: '12%', animationDelay: '3s' }}></div>
        <div className="vortize-orb vortize-orb-primary" style={{ bottom: '20%', left: '8%', animationDelay: '6s' }}></div>
        <div className="vortize-orb vortize-orb-small" style={{ top: '70%', right: '60%', animationDelay: '9s' }}></div>
        <div className="vortize-orb vortize-orb-small" style={{ top: '10%', left: '40%', animationDelay: '12s' }}></div>
        
        {/* Memory trails representing connections made */}
        <div className="vortize-memory-trail" style={{ top: '35%', left: '15%', animationDelay: '1s' }}></div>
        <div className="vortize-memory-trail" style={{ top: '60%', left: '70%', animationDelay: '4s' }}></div>
        <div className="vortize-memory-trail" style={{ top: '85%', left: '30%', animationDelay: '7s' }}></div>
        
        {/* Vortize patterns */}
        <div className="absolute inset-0 vortize-pattern-organic"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="text-vortize-turquoise-400 font-semibold text-sm uppercase tracking-wider">
              Hablemos
            </span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight"
          >
            Estamos listos para hacer{' '}
            <span className="block mt-2">
              de tu próximo evento
            </span>
            <span className="gradient-text block mt-2">
              un éxito
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light"
          >
            ¡Hablemos! Contáctanos y comencemos a planificar una experiencia inolvidable
          </motion.p>
        </motion.div>

        {/* Quick info */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {quickInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={fadeInScale}
              className="flex items-center gap-3 text-gray-300"
            >
              <div className="text-vortize-turquoise-400">
                {info.icon}
              </div>
              <span className="text-sm font-medium">{info.label}:</span>
              <span className="text-sm">{info.value}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Methods */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeInScale}
              className="block group"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={cn(
                "vortize-card p-8 text-center h-full relative overflow-hidden vortize-interactive",
                method.highlight && "ring-2 ring-vortize-turquoise-400/20"
              )}>
                {/* Highlight badge */}
                {method.highlight && (
                  <div className="absolute top-4 right-4 bg-vortize-turquoise-400 text-dark-50 text-xs font-bold px-2 py-1 rounded-full">
                    Recomendado
                  </div>
                )}

                {/* Hover background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                  method.gradient
                )}></div>
                
                <div className={cn(
                  "relative z-10 mb-6 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br mx-auto",
                  method.gradient,
                  "group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                )}>
                  <div className="text-white">
                    {method.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-vortize-turquoise-400 transition-colors duration-300">
                  {method.title}
                </h3>
                
                <p className="text-gray-400 mb-6">{method.description}</p>
                
                <div className="text-vortize-turquoise-400 font-semibold group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  {method.action}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="text-center"
        >
          <div className="vortize-card rounded-3xl p-8 md:p-16 max-w-5xl mx-auto relative overflow-hidden vortize-experience-element">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-vortize-purple-500/5 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-vortize-turquoise-400/5 to-transparent"></div>
            
            <div className="relative z-10">
              {/* Logo */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <img 
                    src="/assets/logos/vortize-logo-white.png" 
                    alt="Vortize" 
                    className="h-16 mx-auto filter drop-shadow-2xl"
                    style={{ 
                      backgroundColor: 'transparent',
                      mixBlendMode: 'screen'
                    }}
                  />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-vortize-turquoise-400 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Transformemos ideas en{' '}
                <span className="gradient-text">experiencias únicas</span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Cada proyecto es una oportunidad de crear algo extraordinario. 
                Cuéntanos tu visión y la haremos realidad con la creatividad y profesionalismo que nos caracteriza.
              </p>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.a
                  href="https://wa.me/+573004031332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablemos por WhatsApp
                </motion.a>
                
                <motion.a
                  href="mailto:info@vortize.com"
                  className="btn-secondary font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5" />
                  Enviar Propuesta
                </motion.a>
              </div>

              {/* Social proof */}
              <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-vortize-turquoise-400 mb-1">24h</div>
                  <div className="text-xs text-gray-400">Tiempo de respuesta</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-vortize-purple-400 mb-1">100%</div>
                  <div className="text-xs text-gray-400">Compromiso</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">5★</div>
                  <div className="text-xs text-gray-400">Calificación</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-20 pt-8 border-t border-white/10"
          variants={fadeInUp}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          <p className="text-gray-400 mb-2">
            © 2024 Vortize. Creando experiencias que trascienden.
          </p>
          <div className="flex justify-center items-center gap-2 text-sm text-gray-500">
            <span>Hecho con</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-vortize-turquoise-400"
            >
              ❤️
            </motion.div>
            <span>en Colombia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;