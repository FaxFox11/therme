import React, { useState } from 'react';
import { Menu, X, Phone, Clock, Droplets } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = ['Erlebnis', 'Wellness', 'Behandlungen', 'Kontakt'];

  return (
    <header className="bg-white">
      {/* Hauptheader */}
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <Droplets className="h-8 w-8 text-emerald-600 transform transition-transform duration-300 group-hover:rotate-12" />
            <span className="text-xl font-light text-gray-800">THERME</span>
          </div>

          {/* Desktop-Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-emerald-600 transition-colors duration-300"
                >
                  {item}
                </a>
                <div 
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transform origin-left transition-transform duration-300 ease-out ${
                    hoveredItem === index ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </div>
            ))}
          </nav>

          {/* Jetzt buchen Button */}
          <div className="hidden lg:block">
            <a
              href="#"
              className="bg-emerald-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-emerald-700 transform hover:-translate-y-0.5"
            >
              Jetzt buchen
            </a>
          </div>

          {/* Mobile-Menü Button */}
          <button 
            className="lg:hidden p-2 rounded-full transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <div className={`absolute inset-0 transform transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-180' : 'rotate-0'
              }`}>
                {isMenuOpen ? <X /> : <Menu />}
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile-Menü */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ zIndex: 1000 }}
      >
        {/* Schließen-Button im Mobile-Menü */}
        <button 
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors duration-300 transform hover:rotate-90"
        >
          <X className="h-6 w-6 text-gray-600" />
        </button>

        {/* Mobile-Menü Logo */}
        <div className="absolute top-6 left-6 flex items-center space-x-2">
          <Droplets className="h-8 w-8 text-emerald-600" />
          <span className="text-xl font-light text-gray-800">THERME</span>
        </div>

        <div className="container mx-auto px-6 pt-24">
          <nav className="flex flex-col space-y-8">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-2xl text-gray-800 hover:text-emerald-600 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="bg-emerald-600 text-white text-center px-6 py-3 rounded-full transition-all duration-300 hover:bg-emerald-700"
            >
              Jetzt buchen
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
