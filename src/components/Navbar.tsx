import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <motion.nav 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-500",
        scrolled 
          ? "glass-dark shadow-dark backdrop-blur-xl" 
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/assets/logos/vortize-logo-white.png" 
              alt="Vortize" 
              className="h-10 w-auto filter drop-shadow-lg"
              style={{ 
                backgroundColor: 'transparent',
                mixBlendMode: 'screen'
              }}
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-white font-medium text-sm transition-all duration-300 rounded-lg hover:bg-white/5 group"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-vortize-purple-500 to-vortize-turquoise-400 group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"
                  />
                </motion.a>
              ))}
              
              {/* CTA Button */}
              <motion.a
                href="https://wa.me/+573000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-6 btn-primary text-white px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4" />
                Hablemos
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-vortize-turquoise-400 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    exit={{ rotate: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 180 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <div className="glass-dark backdrop-blur-xl border-t border-white/10">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
                
                {/* Mobile CTA */}
                <motion.a
                  href="https://wa.me/+573000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 mx-4 btn-primary text-white text-center py-3 rounded-xl font-semibold"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Conversemos
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;