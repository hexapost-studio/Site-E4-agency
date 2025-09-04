import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Calendar, User, Mail, Phone, MessageSquare, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    need: '',
    timeSlot: ''
  });

  const timeSlots = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store in localStorage
    const bookings = JSON.parse(localStorage.getItem('e4_bookings') || '[]');
    const newBooking = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString(),
      status: 'pending'
    };
    bookings.push(newBooking);
    localStorage.setItem('e4_bookings', JSON.stringify(bookings));

    toast({
      title: "🎉 Rendez-vous réservé !",
      description: "Nous vous contacterons bientôt pour confirmer votre créneau.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      need: '',
      timeSlot: ''
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating Moon Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#FFDE59] rounded-full animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-[#FFDE59] rounded-full animate-pulse-glow opacity-60"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-[#FFDE59] rounded-full animate-pulse-glow opacity-80"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center text-left"
        >
          {/* Left Column - Hero Content */}
          <div>
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src="https://horizons-cdn.hostinger.com/dcfac0e4-471a-44ad-bcc6-0d62e4473491/6759b00a2b6653c8cec9de56e8caf525.png" 
                alt="E4_agency - Agence de brand content" 
                className="h-24 w-auto animate-float"
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-5xl font-bold mb-4 glow-text"
            >
              Prêt à devenir le héros de votre <span className="text-[#FFDE59]">série</span> ?
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg"
            >
              Parlez-nous de votre activité. On revient vers vous 
              rapidement pour cadrer un premier épisode.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <button 
                onClick={() => scrollToSection('packs')}
                className="btn-primary px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-3 group"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Choisir un pack
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="btn-secondary px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-3 group"
              >
                <Calendar size={20} className="group-hover:scale-110 transition-transform" />
                Voir le process
              </button>
            </motion.div>
          </div>

          {/* Right Column - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-glass rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-[#FFDE59] mb-6 text-center">Réserver un appel gratuit</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#FFDE59] font-semibold mb-2 text-left">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#0D0C1E]/50 border border-[#FFDE59]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFDE59] focus:outline-none transition-colors"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-[#FFDE59] font-semibold mb-2 text-left">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#0D0C1E]/50 border border-[#FFDE59]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFDE59] focus:outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#FFDE59] font-semibold mb-2 text-left">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0D0C1E]/50 border border-[#FFDE59]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFDE59] focus:outline-none transition-colors"
                  placeholder="vous@exemple.com"
                />
              </div>

              <div>
                <label className="block text-[#FFDE59] font-semibold mb-2 text-left">
                  Votre besoin
                </label>
                <textarea
                  name="need"
                  value={formData.need}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full bg-[#0D0C1E]/50 border border-[#FFDE59]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFDE59] focus:outline-none transition-colors resize-none"
                  placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-3 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 group"
              >
                Réserver mon appel
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;