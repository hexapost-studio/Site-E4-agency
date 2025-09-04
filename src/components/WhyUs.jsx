
import React from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const WhyUs = () => {
  const comparison = [
    {
      feature: "Type de contenu",
      traditional: "Publicités froides et impersonnelles",
      e4agency: "Brand content authentique et storytelling"
    },
    {
      feature: "Durée de vie",
      traditional: "Contenu éphémère, vite oublié",
      e4agency: "Contenu durable qui marque les esprits"
    },
    {
      feature: "Relation client",
      traditional: "Campagnes ponctuelles",
      e4agency: "Accompagnement régulier et fidélisation"
    },
    {
      feature: "Objectif",
      traditional: "Vendre à court terme",
      e4agency: "Transformer en média et ambassadeur"
    },
    {
      feature: "Approche",
      traditional: "Publicité classique",
      e4agency: "Community management et engagement"
    }
  ];

  return (
    <section id="why-us" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Pourquoi <span className="text-[#ffd700]">E4_agency</span> ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nous ne faisons pas de publicité classique. Notre différence réside dans notre approche 
            unique du brand content et du community management.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Agence classique</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#ffd700] mb-4">VS</h3>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#ffd700] mb-4">E4_agency</h3>
            </div>
          </div>

          <div className="space-y-6">
            {comparison.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6 items-center"
              >
                {/* Traditional Agency */}
                <div className="card-glass rounded-xl p-6 border-red-500/20">
                  <div className="flex items-start gap-3">
                    <X size={20} className="text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-300 mb-2">{item.feature}</h4>
                      <p className="text-gray-400 text-sm">{item.traditional}</p>
                    </div>
                  </div>
                </div>

                {/* VS */}
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center mx-auto">
                    <span className="text-[#0a1428] font-bold">VS</span>
                  </div>
                </div>

                {/* E4_agency */}
                <div className="card-glass rounded-xl p-6 border-[#ffd700]/20">
                  <div className="flex items-start gap-3">
                    <Check size={20} className="text-[#ffd700] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#ffd700] mb-2">{item.feature}</h4>
                      <p className="text-gray-300 text-sm">{item.e4agency}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Constellation Metaphor */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center card-glass rounded-2xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6 text-[#ffd700]">Notre vision</h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Vous êtes des <span className="text-[#ffd700] font-semibold">lunes</span> qui brillent dans l'obscurité. 
              E4_agency est aussi une lune. Ensemble, nous formons une <span className="text-[#ffd700] font-semibold">constellation</span> 
              où chaque lune éclaire son histoire unique et inspire les autres.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
