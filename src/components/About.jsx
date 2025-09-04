
import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            À propos du <span className="text-[#ffd700]">fondateur</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Founder Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <img  
                className="w-80 h-80 rounded-full mx-auto lg:mx-0 object-cover moon-glow" 
                alt="Michael Ngan-Otsaghe, fondateur d'E4_agency"
               src="https://images.unsplash.com/photo-1603991414220-51b87b89a371" />
            </motion.div>

            {/* Founder Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-[#ffd700] mb-4">Michael Ngan-Otsaghe</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Fondateur passionné d'E4_agency, Michael a créé cette agence avec une vision claire : 
                  transformer chaque indépendant et entrepreneur en protagoniste de sa propre série.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center flex-shrink-0">
                    <Target size={24} className="text-[#0a1428]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#ffd700] mb-2">Vision</h4>
                    <p className="text-gray-300">
                      Créer un univers où chaque entrepreneur devient le héros de son histoire, 
                      captivant son audience à travers un storytelling authentique et percutant.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart size={24} className="text-[#0a1428]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#ffd700] mb-2">Mission</h4>
                    <p className="text-gray-300">
                      Accompagner les indépendants dans leur transformation digitale en créant 
                      du contenu qui résonne, engage et convertit leur audience en communauté fidèle.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Agency Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 card-glass rounded-2xl p-8 text-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#ffd700]">L'histoire d'E4_agency</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              E4_agency est né de la conviction que chaque entrepreneur a une histoire unique à raconter. 
              Dans un monde saturé de publicités froides, nous avons choisi de créer du contenu authentique 
              qui transforme nos clients en leur propre média. Comme des lunes dans une constellation, 
              chaque client brille de sa propre lumière tout en faisant partie d'un ensemble plus grand.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
