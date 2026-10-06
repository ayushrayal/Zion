import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

import Home from './pages/Home';
import Therapy from './pages/Therapy';
import School from './pages/School';
import Team from './pages/Team';

import './styles/design-system.css';
import './styles/global.css';
import './styles/animations.css';
import './styles/gallery-grid.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="zion-app">
        <ScrollToTop />
        <a href="#main-content" className="sr-only">Skip to main content</a>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/school" element={<School />} />
          <Route path="/team" element={<Team />} />
          {/* Fallback to Home if unknown route */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
