"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "@/context/language-context";
import BouncingLogo from "@/components/logo";
import Link from "next/link";
import { Clock, Globe, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, setLanguage, language } = useTranslation();


  const menuItems = [
  { id: "/", label: t('home') },
  { id: "/#menu", label: t('menu') },
  { id: "/#events", label: t('events') },
  { id: "/#story", label: t('history') },
  { id: "/#impressions", label: t('impressions') },
  { id: "/#contact", label: t('contact') },
  { id: "/#jobs", label: t('jobs') },
];


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container py-4 px-4 mx-auto">
        <div className="flex items-center justify-between">
          <BouncingLogo />
          <nav className="hidden lg:flex items-center space-x-3">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-start text-xs text-gray-600">
              <Clock className="h-4 w-4 mr-2 mt-1" />
              <div>
                <div>{t('openingHours.weekdays')}</div>
                <div>{t('openingHours.saturday')} |  {t('openingHours.sunday')}</div>
              </div>
            </div>

            <button
              onClick={() => setLanguage(language === "en" ? "de" : "en")}
              className="flex cursor-pointer items-center space-x-1 text-sm text-gray-700 hover:text-primary transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>{language?.toUpperCase()}</span>
            </button>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        <aside className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-6 z-50">
          <div className="flex justify-between items-center mb-6">
            <BouncingLogo />
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                href={item.id}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10 flex gap-3 text-xs text-gray-600">
            <Clock className="h-4 w-4 inline-block mr-1" />
            <div>
              <div>{t('openingHours.weekdays')}</div>
              <div>{t('openingHours.saturday')} |  {t('openingHours.sunday')}</div>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
