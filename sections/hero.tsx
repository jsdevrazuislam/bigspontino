import { useTranslation } from '@/context/language-context';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';


const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t }= useTranslation()

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[10s] ease-out"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-wider">
              {t('hero_section.culinary')}
              <span className="block text-primary font-normal">{t('hero_section.excellence')}</span>
            </h2>
            <p className="text-xl md:text-2xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              {t('hero_section.description')}
            </p>
            <button className="bg-primary cursor-pointer rounded-md text-black px-12 py-4 text-lg font-medium tracking-wide hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl">
              {t('hero_section.explore_menu')}
            </button>
          </div>
        </div>
      </div>

      <Link href='/#our_story' className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </Link>
    </section>
  );
};

export default HeroSection;