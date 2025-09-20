import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, MessageCircle, Send, MapPin, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { cn, fadeInUp, fadeInScale, staggerContainer } from '../lib/utils';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactMethods = [
    {
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      title: "WhatsApp",
      description: "Respuesta inmediata",
      action: "Contactar ahora",
      gradient: "from-green-500 to-green-600",
      href: "https://wa.me/+573001005357",
      highlight: true
    },
    {
      icon: <Instagram className="w-7 h-7" />,
      title: "Instagram",
      description: "Síguenos",
      action: "Ver trabajos",
      gradient: "from-pink-500 to-purple-600",
      href: "https://www.instagram.com/vortize_mkt/?igsh=d3E0NjlheDh4eDF1&utm_source=qr#"
    },
    {
      icon: <Mail className="w-7 h-7" />,
      title: "Email",
      description: "Escríbenos",
      action: "Enviar correo",
      gradient: "from-blue-500 to-blue-600",
      href: "mailto:vortizemarketingss@gmail.com"
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Llamar",
      description: "Conversación directa",
      action: "Llamar ahora",
      gradient: "from-purple-500 to-purple-600",
      href: "tel:+573001005357"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-6xl mx-auto"
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
                    src="/assets/logosblanconegro/image.png" 
                    alt="Vortize BTL" 
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
              <div className="flex justify-center mb-12">
                <motion.a
                  href="https://wa.me/+573001005357"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white font-semibold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Hablemos por WhatsApp
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
            © 2025 Vortize BTL. Creando experiencias que trascienden.
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