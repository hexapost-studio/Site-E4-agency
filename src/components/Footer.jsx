import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0D0C1E] border-t border-[#FFDE59]/20 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://horizons-cdn.hostinger.com/dcfac0e4-471a-44ad-bcc6-0d62e4473491/6759b00a2b6653c8cec9de56e8caf525.png" 
                alt="E4_agency logo" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold glow-text">E4_agency</span>
            </div>
            <p className="text-[#FFDE59] font-semibold mb-4">
              « Laissez-nous les immerger dans votre aventure »
            </p>
            <p className="text-gray-400 max-w-md">
              Nous transformons les indépendants et entrepreneurs en protagonistes 
              de leur propre série à travers des vidéos verticales courtes et captivantes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FFDE59] font-semibold mb-4 block">Liens rapides</span>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('packs')}
                  className="text-gray-400 hover:text-[#FFDE59] transition-colors"
                >
                  Nos packs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('process')}
                  className="text-gray-400 hover:text-[#FFDE59] transition-colors"
                >
                  Notre process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-us')}
                  className="text-gray-400 hover:text-[#FFDE59] transition-colors"
                >
                  Pourquoi nous
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('book-call')}
                  className="text-gray-400 hover:text-[#FFDE59] transition-colors"
                >
                  Réserver un appel
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-[#FFDE59] font-semibold mb-4 block">Suivez-nous</span>
            <a
              href="https://www.instagram.com/e4_agency/?hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-[#FFDE59] transition-colors group"
            >
              <Instagram size={20} className="group-hover:scale-110 transition-transform" />
              @e4_agency
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-[#FFDE59]/20 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 E4_agency. Tous droits réservés. Fondé par Michael Ngan-Otsaghe.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;