import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0D0C1E]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://horizons-cdn.hostinger.com/dcfac0e4-471a-44ad-bcc6-0d62e4473491/6759b00a2b6653c8cec9de56e8caf525.png" 
              alt="E4_agency logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold glow-text">E4_agency</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('signature')} className="text-white hover:text-[#FFDE59] transition-colors">
              Notre signature
            </button>
            <button onClick={() => scrollToSection('process')} className="text-white hover:text-[#FFDE59] transition-colors">
              Process
            </button>
            <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-[#FFDE59] transition-colors">
              Pourquoi nous
            </button>
            <button onClick={() => scrollToSection('packs')} className="text-white hover:text-[#FFDE59] transition-colors">
              Nos packs
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#FFDE59] transition-colors">
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('book-call')}
              className="btn-primary px-6 py-2 rounded-full"
            >
              Réserver un appel
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-[#FFDE59]/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('signature')} className="text-white hover:text-[#FFDE59] transition-colors text-left">
                Notre signature
              </button>
              <button onClick={() => scrollToSection('process')} className="text-white hover:text-[#FFDE59] transition-colors text-left">
                Process
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-white hover:text-[#FFDE59] transition-colors text-left">
                Pourquoi nous
              </button>
              <button onClick={() => scrollToSection('packs')} className="text-white hover:text-[#FFDE59] transition-colors text-left">
                Nos packs
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-[#FFDE59] transition-colors text-left">
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('book-call')}
                className="btn-primary px-6 py-2 rounded-full text-center"
              >
                Réserver un appel
              </button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;