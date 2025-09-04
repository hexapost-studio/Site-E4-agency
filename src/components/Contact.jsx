import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Suivez-<span className="text-[#FFDE59]">nous</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Retrouvez nos dernières créations et actualités sur Instagram.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-glass rounded-2xl p-8"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#FFDE59] mb-6">Notre canal officiel</h3>
                <a
                  href="https://www.instagram.com/e4_agency/?hl=fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#0D0C1E]/50 rounded-lg hover:bg-[#FFDE59]/10 transition-colors group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Instagram size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#FFDE59] text-xl">Instagram</h4>
                    <p className="text-gray-300 text-lg">@e4_agency</p>
                  </div>
                </a>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#FFDE59] mb-4">Prêt à briller ?</h3>
                <p className="text-gray-300 mb-6">
                  Rejoignez notre constellation d'entrepreneurs qui ont transformé 
                  leur présence en ligne grâce à notre approche unique du storytelling.
                </p>
                <img 
                  className="w-full rounded-lg" 
                  alt="Constellation d'entrepreneurs E4_agency"
                 src="https://images.unsplash.com/photo-1694089264136-644b9f501641" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;