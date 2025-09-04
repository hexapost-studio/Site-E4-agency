
import React from 'react';
import { motion } from 'framer-motion';
import { Film, Zap, Users } from 'lucide-react';

const Signature = () => {
  const features = [
    {
      icon: Film,
      title: "Alternance Réel ↔ Animation",
      description: "Nous mélangeons scènes réelles et séquences animées pour créer une expérience visuelle unique, comme une mini-série hybride."
    },
    {
      icon: Zap,
      title: "Sous-titres rythmés",
      description: "Des sous-titres dynamiques et des animations percutantes qui rythment votre histoire et captent l'attention."
    },
    {
      icon: Users,
      title: "Storytelling immersif",
      description: "Chaque vidéo raconte votre histoire de manière captivante, transformant vos clients en spectateurs engagés."
    }
  ];

  return (
    <section id="signature" className="section-padding">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Notre signature <span className="text-[#ffd700]">visuelle</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ce style hybride unique rend chaque histoire captivante et mémorable, 
            créant une expérience immersive pour votre audience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card-glass rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#ffd700] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={32} className="text-[#0a1428]" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#ffd700]">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Visual Example */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <img  
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl moon-glow" 
            alt="Exemple de vidéo avec alternance réel et animation"
           src="https://images.unsplash.com/photo-1535281047371-e7d8b0e96d7f" />
        </motion.div>
      </div>
    </section>
  );
};

export default Signature;
