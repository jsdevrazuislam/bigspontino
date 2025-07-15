"use client"
import React from 'react';
import Header from '@/sections/header';
import HeroSection from '@/sections/hero';
import MenuSection from '@/sections/menu-section';
import AboutSection from '@/sections/about';
import Footer from '@/sections/footer';

function LandingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <Footer />
    </div>
  );
}

export default LandingPage;