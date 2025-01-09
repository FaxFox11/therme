import React, { useState, useEffect } from 'react';
import { ChevronRight, Waves, CalendarDays, Clock } from 'lucide-react';

import wellness from '../assets/wellness.webp';
import therme from '../assets/therme.webp';
import spa from '../assets/spa.webp';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      title: "Wellness-Reise",
      subtitle: "Finde inneren Frieden",
      image: wellness,
    },
    {
      title: "Thermische Entspannung",
      subtitle: "Erlebe pure Gelassenheit",
      image: therme,
    },
    {
      title: "Natürliche Heilung",
      subtitle: "Regeneriere deinen Körper",
      image: spa,
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen">
      {/* Hintergrundbilder */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      {/* Inhaltscontainer */}
      <div className="relative h-full flex flex-col justify-center">
        <div className="container mx-auto px-6">
          {/* Begrüßung */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm mb-12">
            <Waves className="h-4 w-4" />
            <span>Willkommen in der Therme Baden</span>
          </div>

          {/* Titel und Untertitel */}
          <div className="mb-8">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  activeSlide === index
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-4 absolute'
                }`}
              >
                <h1 className="text-7xl font-light text-white mb-4">{slide.title}</h1>
                <p className="text-xl text-white/90">{slide.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Call-to-Action-Buttons */}
          <div className="flex gap-4 mb-24">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full flex items-center space-x-2 group transition-all duration-300 hover:bg-emerald-700">
              <span>Besuch buchen</span>
              <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/30">
              Behandlungen entdecken
            </button>
          </div>

          {/* Info-Karten */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-white">
              <CalendarDays className="h-6 w-6 mb-3 text-white/80" />
              <h3 className="text-lg font-medium mb-1">Öffnungszeiten</h3>
              <p className="text-white/80">Täglich 9:00 - 23:00</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 text-white">
              <Clock className="h-6 w-6 mb-3 text-white/80" />
              <h3 className="text-lg font-medium mb-1">Besondere Zeiten</h3>
              <p className="text-white/80">Sauna 10:00 - 22:00</p>
            </div>
          </div>
        </div>

        {/* Slide-Indikatoren */}
        <div className="absolute bottom-8 right-6">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
