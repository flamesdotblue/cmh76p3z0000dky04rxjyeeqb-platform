import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Showcase from './components/Showcase';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-inter">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
    </div>
  );
}
