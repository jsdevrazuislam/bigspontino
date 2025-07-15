"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { useTranslation } from '@/context/language-context';
import BouncingLogo from '@/components/logo';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, setLanguage } = useTranslation();


  function handleCloseMenu(){
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }

    return () => {
      document.body.style.overflow = ''; 
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}>
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex cursor-pointer items-center space-x-2 text-primary hover:text-amber-300 transition-colors duration-300 group"
          >
            <Menu className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            <span className="text-lg font-light tracking-wider">Menu</span>
          </button>

          <div className="absolute left-[55%] md:left-1/2 transform -translate-x-1/2">
            <BouncingLogo />
          </div>

          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-2 text-primary mr-6">
              <button onClick={() => setLanguage('de')} className="hover:text-amber-300 cursor-pointer transition-colors duration-300">De</button>
              <span className="text-amber-600">|</span>
              <button onClick={() => setLanguage('en')} className="hover:text-amber-300 cursor-pointer transition-colors duration-300">En</button>
            </div>

            <div className="flex items-center space-x-2 xl:mr-6">
              <Instagram className="w-5 h-5 text-primary hover:text-amber-300 cursor-pointer transition-colors duration-300 hover:scale-110 transform" />
              <Facebook className="w-5 h-5 text-primary hover:text-amber-300 cursor-pointer transition-colors duration-300 hover:scale-110 transform" />
            </div>

            <button className="bg-primary hidden xl:block cursor-pointer rounded-md text-black px-6 py-2 font-medium tracking-wide hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
              {t('hero_section.book_a_table')}
            </button>
          </div>
        </div>
      </div>

      <div className={`fixed z-[100] min-h-screen overflow-hidden w-full inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-primary">
          <button
            onClick={handleCloseMenu}
            className="absolute cursor-pointer top-6 right-6 text-primary hover:text-amber-300"
          >
            <X className="w-8 h-8" />
          </button>

          <nav className="text-center space-y-4">
            <a onClick={handleCloseMenu} href="#menu" className="block text-h4-size tracking-wider hover:text-amber-300 transition-colors duration-300">{t('hero_section.menu')}</a>
            <a onClick={handleCloseMenu} href="#our_story" className="block text-h4-size tracking-wider hover:text-amber-300 transition-colors duration-300">{t('hero_section.our_story')}</a>
          </nav>

          <div className="flex items-center space-x-6 mt-6">
            <Instagram className="w-6 h-6 text-primary hover:text-amber-300 cursor-pointer transition-colors duration-300" />
            <Facebook className="w-6 h-6 text-primary hover:text-amber-300 cursor-pointer transition-colors duration-300" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;