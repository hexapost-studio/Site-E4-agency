import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Signature from '@/components/Signature';
import Process from '@/components/Process';
import WhyUs from '@/components/WhyUs';
import Packs from '@/components/Packs';
import About from '@/components/About';
import BookCall from '@/components/BookCall';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0C1E] constellation-bg">
      <Helmet>
        <title>E4_agency - Laissez-nous les immerger dans votre aventure</title>
        <meta name="description" content="Agence spécialisée dans le brand content et community management. Nous transformons les indépendants en leur propre média à travers des vidéos verticales courtes et captivantes." />
        <meta property="og:title" content="E4_agency - Laissez-nous les immerger dans votre aventure" />
        <meta property="og:description" content="Agence spécialisée dans le brand content et community management. Nous transformons les indépendants en leur propre média à travers des vidéos verticales courtes et captivantes." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Helmet>
      
      <Header />
      <Hero />
      <Signature />
      <Process />
      <WhyUs />
      <Packs />
      <About />
      {/* BookCall component moved into Hero for a combined section */}
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;