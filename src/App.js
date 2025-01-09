import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Features from './components/Features';
import Packages from './components/Packages';
import Showcase from './components/Showcase';
import About from './components/About';
import { ShowcaseBanner, PopupBanner } from './components/ShowcaseBanner';

const App = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <Header />
      <Hero />
      <Features />
      <Packages />
      <Showcase />
      <About />
      <Footer />
      <ShowcaseBanner />
      <PopupBanner />
    </div>
  );
};

export default App;