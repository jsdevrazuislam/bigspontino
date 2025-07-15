"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Star, Clock, Leaf, Award } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/context/language-context';

const MenuSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string>('');
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

  const menuCategories = [
    {
      id: 'dolci',
      name: t('menu_page.categories.dolci.name'),
      description: t('menu_page.categories.dolci.description'),
      subMenus: [
        { id: 'seasonal', name: t('menu_page.categories.dolci.sub_menus.seasonal'), icon: Star },
        { id: 'classic', name: t('menu_page.categories.dolci.sub_menus.classic'), icon: Award },
        { id: 'vegan', name: t('menu_page.categories.dolci.sub_menus.vegan'), icon: Leaf }
      ]
    },
    {
      id: 'cocktail-month',
      name: t('menu_page.categories.cocktail_month.name'),
      description: t('menu_page.categories.cocktail_month.description'),
      subMenus: [
        { id: 'featured', name: t('menu_page.categories.cocktail_month.sub_menus.featured'), icon: Star },
        { id: 'previous', name: t('menu_page.categories.cocktail_month.sub_menus.previous'), icon: Clock }
      ]
    },
    {
      id: 'cocktails',
      name: t('menu_page.categories.cocktails.name'),
      description: t('menu_page.categories.cocktails.description'),
      subMenus: [
        { id: 'signature', name: t('menu_page.categories.cocktails.sub_menus.signature'), icon: Star },
        { id: 'classic', name: t('menu_page.categories.cocktails.sub_menus.classic'), icon: Award },
        { id: 'seasonal', name: t('menu_page.categories.cocktails.sub_menus.seasonal'), icon: Leaf }
      ]
    },
    {
      id: 'wines',
      name: t('menu_page.categories.wines.name'),
      description: t('menu_page.categories.wines.description'),
      subMenus: [
        { id: 'red', name: t('menu_page.categories.wines.sub_menus.red'), icon: Star },
        { id: 'white', name: t('menu_page.categories.wines.sub_menus.white'), icon: Award },
        { id: 'sparkling', name: t('menu_page.categories.wines.sub_menus.sparkling'), icon: Leaf }
      ]
    },
    {
      id: 'birre',
      name: t('menu_page.categories.birre.name'),
      description: t('menu_page.categories.birre.description'),
      subMenus: [
        { id: 'craft', name: t('menu_page.categories.birre.sub_menus.craft'), icon: Star },
        { id: 'local', name: t('menu_page.categories.birre.sub_menus.local'), icon: Award },
        { id: 'imported', name: t('menu_page.categories.birre.sub_menus.imported'), icon: Leaf }
      ]
    },
    {
      id: 'softs',
      name: t('menu_page.categories.softs.name'),
      description: t('menu_page.categories.softs.description'),
      subMenus: [
        { id: 'fresh', name: t('menu_page.categories.softs.sub_menus.fresh'), icon: Star },
        { id: 'specialty', name: t('menu_page.categories.softs.sub_menus.specialty'), icon: Award },
        { id: 'hot', name: t('menu_page.categories.softs.sub_menus.hot'), icon: Leaf }
      ]
    },
    {
      id: 'antipasti',
      name: t('menu_page.categories.antipasti.name'),
      description: t('menu_page.categories.antipasti.description'),
      subMenus: [
        { id: 'cheese', name: t('menu_page.categories.antipasti.sub_menus.cheese'), icon: Star },
        { id: 'charcuterie', name: t('menu_page.categories.antipasti.sub_menus.charcuterie'), icon: Award },
        { id: 'vegetarian', name: t('menu_page.categories.antipasti.sub_menus.vegetarian'), icon: Leaf }
      ]
    },
    {
      id: 'primi',
      name: t('menu_page.categories.primi.name'),
      description: t('menu_page.categories.primi.description'),
      subMenus: [
        { id: 'pasta', name: t('menu_page.categories.primi.sub_menus.pasta'), icon: Star },
        { id: 'risotto', name: t('menu_page.categories.primi.sub_menus.risotto'), icon: Award },
        { id: 'soup', name: t('menu_page.categories.primi.sub_menus.soup'), icon: Leaf }
      ]
    }
  ];

  const sampleMenuItems =  {
    'dolci-seasonal': [
      {
        name: t('menu_page.menu_items.dolci_seasonal_love_is_peachy.name'),
        description: t('menu_page.menu_items.dolci_seasonal_love_is_peachy.description'),
        price: '€10',
        dietary: 'VEG',
        image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: t('menu_page.menu_items.dolci_seasonal_rainbow_tiramisu.name'),
        description: t('menu_page.menu_items.dolci_seasonal_rainbow_tiramisu.description'),
        price: '€12',
        dietary: 'VEG',
        image: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ],
    'cocktails-signature': [
      {
        name: t('menu_page.menu_items.cocktails_signature_squadra_spritz.name'),
        description: t('menu_page.menu_items.cocktails_signature_squadra_spritz.description'),
        price: '€14',
        image: 'https://images.pexels.com/photos/8375036/pexels-photo-8375036.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        dietary: 'VEG',
      },
      {
        name: t('menu_page.menu_items.cocktails_signature_golden_hour.name'),
        description: t('menu_page.menu_items.cocktails_signature_golden_hour.description'),
        price: '€16',
        image: 'https://images.pexels.com/photos/2789328/pexels-photo-2789328.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        dietary: 'VEG',
      }
    ]
  };

  const handleCategoryClick = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null);
      setActiveSubMenu('');
    } else {
      setExpandedCategory(categoryId);
      const category = menuCategories.find(cat => cat.id === categoryId);
      if (category && category.subMenus.length > 0) {
        setActiveSubMenu(`${categoryId}-${category.subMenus[0].id}`);
      }
    }
  };

  const handleSubMenuClick = (categoryId: string, subMenuId: string) => {
    setActiveSubMenu(`${categoryId}-${subMenuId}`);
  };

  const getCurrentMenuItems = () => {
    return sampleMenuItems[activeSubMenu as keyof typeof sampleMenuItems] || [];
  };

  return (
    <section id='menu' ref={sectionRef} className="py-20 bg-zinc-900">
      <div className="container">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
          <h2 className="text-h2-size md:text-display-lg-size font-light text-white mb-6 tracking-wider">
            {t('our_story_section.title_part1')} <span className="text-primary">{t('our_story_section.title_part2')}</span>
          </h2>
          <p className="text-h5-size text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover our carefully crafted selection, prepared with passion and finest ingredients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-2">
            {menuCategories.map((category, index) => (
              <div
                key={category.id}
                className={`transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className={`w-full rounded-md cursor-pointer text-left transition-all duration-500 transform hover:scale-[1.02] ${expandedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-2xl'
                    : 'bg-gradient-to-r from-zinc-800 to-zinc-700 text-white hover:from-zinc-700 hover:to-zinc-600'
                    }`}
                >
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <div className="flex-1">
                      <h3 className="text-h5-size md:text-h4-size tracking-wider mb-2">
                        {category.name}
                      </h3>
                      <p className={`text-body-sm-size ${expandedCategory === category.id ? 'text-black/70' : 'text-gray-400'
                        }`}>
                        {category.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      {expandedCategory === category.id ? (
                        <ChevronDown className="w-6 h-6 transition-transform duration-300" />
                      ) : (
                        <ChevronRight className="w-6 h-6 transition-transform duration-300" />
                      )}
                    </div>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-700 ease-in-out ${expandedCategory === category.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="bg-zinc-800 border-l-4 border-primary">
                    <div className="flex flex-wrap border-b border-zinc-700 bg-zinc-850">
                      {category.subMenus.map((subMenu) => {
                        const Icon = subMenu.icon;
                        const isActive = activeSubMenu === `${category.id}-${subMenu.id}`;
                        return (
                          <button
                            key={subMenu.id}
                            onClick={() => handleSubMenuClick(category.id, subMenu.id)}
                            className={`flex cursor-pointer items-center space-x-2 px-6 py-4 transition-all duration-300 transform hover:scale-105 ${isActive
                              ? 'bg-primary text-black border-b-2 border-amber-600'
                              : 'text-gray-300 hover:text-white hover:bg-zinc-700'
                              }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span className="text-body-sm-size">{subMenu.name}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="p-6">
                      {getCurrentMenuItems().length > 0 ? (
                        <div className="grid gap-6">
                          {getCurrentMenuItems().map((item, itemIndex) => (
                            <div
                              key={item.name}
                              className={`bg-zinc-700 cursor-pointer rounded-lg overflow-hidden hover:bg-zinc-600 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl ${expandedCategory === category.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                                }`}
                              style={{ transitionDelay: `${itemIndex * 150}ms` }}
                            >
                              <div className="md:flex">
                                <div className="md:w-1/3">
                                  <Image
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-48 md:h-full object-cover transition-transform duration-700 hover:scale-110"
                                    width={400}
                                    height={300}
                                  />
                                </div>
                                <div className="md:w-2/3 p-6">
                                  <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center space-x-3">
                                      <h4 className="text-h5-size text-white">{item.name}</h4>
                                      {item?.dietary && (
                                        <span className="bg-green-500 text-white text-caption-size px-2 py-1 rounded-full">
                                          {item?.dietary}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-primary font-bold text-xl">{item.price}</span>
                                  </div>
                                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <div className="text-gray-400 mb-4">
                            <Clock className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p className="text-h5-size">Menu items coming soon...</p>
                            <p className="text-body-sm-size">We&apos;re crafting something special for this section.</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-primary cursor-pointer rounded-md text-black px-12 py-4 text-h5-size tracking-wide hover:bg-amber-300 transition-all duration-300 hover:scale-105 transform hover:shadow-2xl">
            Download Full Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;