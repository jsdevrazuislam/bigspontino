import React, { useRef, useEffect, useState } from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/context/language-context';

const AboutSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Award, number: '15+', label: t('our_story_section.awards_won') },
    { icon: Users, number: '10K+', label: t('our_story_section.happy_guests') },
    { icon: Clock, number: '25+', label: t('our_story_section.years_experience') },
    { icon: Heart, number: '100%', label: t('our_story_section.satisfaction') }
  ];

  return (
    <section id='our_story' ref={sectionRef} className="py-20 bg-black">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}>
            <h2 className="text-h2-size md:text-display-lg-size font-light text-white mb-8 tracking-wider">
              {t('our_story_section.title_part1')} <span className="text-primary">{t('our_story_section.title_part2')}</span>
            </h2>
            <p className="text-h4-size text-gray-300 mb-8">
              {t('our_story_section.paragraph1')}
            </p>
            <p className="text-h5-size text-gray-400 mb-12">
             {t('our_story_section.paragraph2')}
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className={`text-center transform transition-all duration-1000 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-h3-size font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-body-sm-size">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="relative">
              <Image
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Chef preparing food"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
                width={800}
                height={384}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-h4-size mb-2">{t('our_story_section.chef_name')}</h3>
                <p className="text-primary tracking-wide">{t('our_story_section.chef_title')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;