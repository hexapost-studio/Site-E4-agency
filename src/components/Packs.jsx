
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Packs = () => {
  const { toast } = useToast();

  const packs = [
    {
      name: "Pack Feed",
      subtitle: "Mini-campagne",
      price: "Sur devis",
      duration: "1 semaine",
      videos: "3 vidéos",
      description: "Parfait pour tester notre approche et créer un premier impact",
      features: [
        "3 vidéos verticales courtes",
        "Storytelling personnalisé",
        "Sous-titres dynamiques",
        "Animations percutantes",
        "Livraison en 1 semaine"
      ],
      popular: false,
      icon: Star
    },
    {
      name: "Pack Mensuel",
      subtitle: "Série complète",
      price: "Sur devis",
      duration: "1 mois",
      videos: "12 vidéos",
      description: "L'offre complète pour transformer votre présence en ligne",
      features: [
        "12 vidéos verticales courtes",
        "3 vidéos par semaine",
        "Storytelling approfondi",
        "Alternance réel/animation",
        "Community management inclus",
        "Suivi et optimisation"
      ],
      popular: true,
      icon: Zap
    }
  ];

  const handlePackSelection = (packName) => {
    toast({
      title: "🚧 Cette fonctionnalité n'est pas encore implémentée",
      description: "Mais ne vous inquiétez pas ! Vous pouvez la demander dans votre prochaine demande ! 🚀",
      duration: 5000,
    });
  };

  const scrollToBookCall = () => {
    const element = document.getElementById('book-call');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packs" className="section-padding bg-gradient-to-b from-[#0a1428]/50 to-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Nos <span className="text-[#ffd700]">packs</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choisissez la formule qui correspond à vos ambitions et laissez-nous 
            transformer votre histoire en contenu viral.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {packs.map((pack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative card-glass rounded-2xl p-8 ${
                pack.popular ? 'border-[#ffd700] border-2 scale-105' : ''
              } hover:scale-105 transition-all duration-300`}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#ffd700] text-[#0a1428] px-6 py-2 rounded-full font-bold text-sm">
                  POPULAIRE
                </div>
              )}

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-[#ffd700] rounded-full flex items-center justify-center mx-auto mb-4">
                  <pack.icon size={32} className="text-[#0a1428]" />
                </div>
                <h3 className="text-3xl font-bold text-[#ffd700] mb-2">{pack.name}</h3>
                <p className="text-gray-400 mb-4">{pack.subtitle}</p>
                <div className="text-4xl font-bold mb-2">{pack.price}</div>
                <div className="text-[#ffd700] font-semibold">
                  {pack.videos} • {pack.duration}
                </div>
              </div>

              <p className="text-gray-300 text-center mb-8">{pack.description}</p>

              <ul className="space-y-4 mb-8">
                {pack.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className="text-[#ffd700] flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <button 
                  onClick={() => handlePackSelection(pack.name)}
                  className="w-full btn-primary py-4 rounded-xl font-semibold"
                >
                  Choisir ce pack
                </button>
                <button 
                  onClick={scrollToBookCall}
                  className="w-full btn-secondary py-4 rounded-xl font-semibold"
                >
                  Discuter du projet
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            Tous nos packs incluent notre signature visuelle unique et notre expertise en storytelling
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Packs;
