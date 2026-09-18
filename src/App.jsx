import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

import './styles/design-system.css';
import './styles/global.css';
import './styles/animations.css';

export default function App() {
  return (
    <div className="zion-app">
      <a href="#main-content" className="sr-only">Skip to main content</a>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
