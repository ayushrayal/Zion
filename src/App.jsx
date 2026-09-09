import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustIntro from './components/TrustIntro/TrustIntro';
import About from './components/About/About';
import Founder from './components/Founder/Founder';
import Services from './components/Services/Services';
import Facilities from './components/Facilities/Facilities';
import Gallery from './components/Gallery/Gallery';
import Mission from './components/Mission/Mission';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* 01. NAVBAR */}
      <Navbar />

      <main>
        {/* 02. HERO */}
        <Hero />

        {/* 03. TRUST / INTRODUCTION
        <TrustIntro /> */}

        {/* 04. ABOUT ZION */}
        <About />

        {/* 05. FOUNDER / OUR STORY */}
        <Founder />

        {/* 06. SERVICES */}
        <Services />

        {/* 07. OUR ENVIRONMENT / FACILITIES */}
        <Facilities />

        {/* 08. GALLERY */}
        <Gallery />

        {/* 09. MISSION & IMPACT
        <Mission /> */}

        {/* 10. CONTACT / FINAL CTA */}
        <Contact />
      </main>

      {/* 11. FOOTER */}
      <Footer />
    </div>
  );
}
