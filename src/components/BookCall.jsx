import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const BookCall = () => {
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

  return (
    <section id="book-call" className="section-padding bg-gradient-to-b from-transparent to-[#0D0C1E]/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Réserver un appel <span className="text-[#FFDE59]">gratuit</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discutons de votre projet et découvrons ensemble comment transformer 
            votre histoire en contenu viral.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-glass rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#FFDE59] font-semibold mb-2">
                    <User size={20} className="inline mr-2" />
                    Prénom *
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
                  <label className="block text-[#FFDE59] font-semibold mb-2">
                    <User size={20} className="inline mr-2" />
                    Nom *
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[#FFDE59] font-semibold mb-2">
                    <Mail size={20} className="inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#0D0C1E]/50 border border-[#FFDE59]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFDE59] focus:outline-none transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[#FFDE59] font-semibold mb-2">
                    <Phone size={20} className="inline mr-2" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#0D0C1E]/50 border border-[#FFDE59]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFDE59] focus:outline-none transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#FFDE59] font-semibold mb-2">
                  <Clock size={20} className="inline mr-2" />
                  Créneau souhaité *
                </label>
                <select
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-[#0D0C1E]/50 border border-[#FFDE59]/30 rounded-lg px-4 py-3 text-white focus:border-[#FFDE59] focus:outline-none transition-colors"
                >
                  <option value="">Choisir un créneau</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[#FFDE59] font-semibold mb-2">
                  <MessageSquare size={20} className="inline mr-2" />
                  Votre besoin *
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
                className="w-full btn-primary py-4 rounded-xl font-semibold text-lg flex items-center justify-center gap-3 group"
              >
                <Calendar size={24} className="group-hover:scale-110 transition-transform" />
                Réserver mon appel gratuit
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                * Champs obligatoires. Nous vous contacterons dans les 24h pour confirmer votre rendez-vous.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookCall;