import React from 'react';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import BouncingLogo from '@/components/logo';
import { useTranslation } from '@/context/language-context';

const Footer: React.FC = () => {

  const { t } = useTranslation()

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <BouncingLogo />
            <p className="text-gray-300 leading-relaxed mt-5 mb-6 max-w-md">
              {t('general_info_and_links.tagline')}
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-6 h-6 text-primary hover:text-amber-300 cursor-pointer transition-colors duration-300 hover:scale-110 transform" />
              <Facebook className="w-6 h-6 text-primary hover:text-amber-300 cursor-pointer transition-colors duration-300 hover:scale-110 transform" />
              <Twitter className="w-6 h-6 text-primary hover:text-amber-300 cursor-pointer transition-colors duration-300 hover:scale-110 transform" />
            </div>
          </div>

          <div>
            <h4 className="text-xl font-light text-primary mb-6 tracking-wider">{t('general_info_and_links.quick_links')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">{t('hero_section.menu')}</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">{t('hero_section.our_story')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-light text-primary mb-6 tracking-wider">{t('general_info_and_links.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">123 Gourmet Street, City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@squadra.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bigspontino Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">{t('general_info_and_links.privacy_policy')}</a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">{t('general_info_and_links.terms_of_service')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;