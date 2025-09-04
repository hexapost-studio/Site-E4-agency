
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageCircle, PenTool, Video, Mic } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: Calendar,
      title: "Rendez-vous",
      description: "Nous planifions un premier échange pour comprendre votre univers et vos objectifs."
    },
    {
      icon: MessageCircle,
      title: "Interview 1h",
      description: "Une session d'interview approfondie pour capturer l'essence de votre histoire."
    },
    {
      icon: PenTool,
      title: "Écriture & Scripts",
      description: "Nous créons des scripts captivants qui mettent en valeur votre personnalité unique."
    },
    {
      icon: Video,
      title: "Tournage",
      description: "Captation professionnelle avec notre équipe experte en storytelling visuel."
    },
    {
      icon: Mic,
      title: "Voix-off & Montage",
      description: "Post-production avec sous-titres dynamiques et animations percutantes."
    }
  ];

  return (
    <section id="process" className="section-padding bg-gradient-to-b from-transparent to-[#0a1428]/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Notre <span className="text-[#ffd700]">process</span> en 5 étapes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un processus rodé et efficace pour transformer votre histoire en contenu viral
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ffd700] via-[#ffd700] to-[#ffd700] opacity-30 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#ffd700] rounded-full flex items-center justify-center text-[#0a1428] font-bold text-sm z-10">
                  {index + 1}
                </div>

                <div className="card-glass rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 mt-4">
                  <div className="w-12 h-12 bg-[#ffd700] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <step.icon size={24} className="text-[#0a1428]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#ffd700]">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
