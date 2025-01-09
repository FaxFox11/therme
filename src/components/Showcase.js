import React, { useState, useEffect } from 'react';
import { Clock, ArrowRight, Play, Pause } from 'lucide-react';

const ShowcaseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  const treatments = [
    {
      title: "Signature-Massage",
      subtitle: "Tiefengewebs- & Aromatherapie",
      description: "Eine harmonische Mischung aus therapeutischen Techniken und aromatischen Ölen",
      duration: "90 Min.",
      price: "€195",
      image: "/api/placeholder/1200/1600",
      accent: "#047857"
    },
    {
      title: "Diamant-Gesichtsbehandlung",
      subtitle: "Fortgeschrittene Anti-Aging-Behandlung",
      description: "Premium-Hautpflegeritual mit Diamantstaub-Peeling",
      duration: "75 Min.",
      price: "€245",
      image: "/api/placeholder/1200/1600",
      accent: "#7C3AED"
    },
    {
      title: "Thermalreise",
      subtitle: "Hot-Stone-Therapie",
      description: "Alte Heilpraxis mit vulkanischen Basaltsteinen",
      duration: "120 Min.",
      price: "€275",
      image: "/api/placeholder/1200/1600",
      accent: "#B45309"
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying && !isHovering) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % treatments.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, isHovering]);

  const handleMouseMove = (e) => {
    if (!isHovering) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  };

  return (
    <section className="relative py-32 lg:py-40 overflow-hidden bg-gray-50">
      {/* Subtiles Hintergrundmuster */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}/>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Inhalt */}
          <div className="relative z-10 max-w-xl">
            {/* Abschnittsüberschrift */}
            <div className="mb-16">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
                <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-sm font-medium text-gray-900 tracking-wide">
                  Signatur-Behandlungen
                </span>
              </div>
              <h2 className="text-5xl xl:text-6xl font-light text-gray-900 tracking-tight leading-tight mb-6">
                Erheben Sie Ihre Wellness-Reise
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Erleben Sie unsere sorgfältig kuratierte Auswahl an Premium-Behandlungen
              </p>
            </div>

            {/* Behandlungs-Liste */}
            <div className="space-y-8">
              {treatments.map((treatment, index) => (
                <div
                  key={index}
                  onMouseEnter={() => {
                    setActiveIndex(index);
                    setIsHovering(true);
                  }}
                  onMouseLeave={() => setIsHovering(false)}
                  className={`group cursor-pointer transition-all duration-700 ease-out ${
                    activeIndex === index ? 'scale-100' : 'scale-95 opacity-50'
                  }`}
                >
                  <div className="bg-white rounded-2xl p-6 shadow-sm transition-all duration-500 hover:shadow-xl">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-light mb-1">{treatment.title}</h3>
                        <p className="text-gray-600 text-sm">{treatment.subtitle}</p>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-light">{treatment.price}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-sm mb-4">{treatment.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{treatment.duration}</span>
                      </div>
                      <ArrowRight className={`w-5 h-5 transition-all duration-500 ${
                        activeIndex === index ? 'text-emerald-600 translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`} />
                    </div>

                    {/* Fortschrittsanzeige */}
                    {activeIndex === index && isPlaying && !isHovering && (
                      <div className="mt-4 h-0.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-600 animate-progressBar" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Wiedergabe-Steuerung */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="mt-8 flex items-center space-x-2 text-sm text-gray-500 hover:text-emerald-600 transition-colors bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Diashow pausieren' : 'Diashow abspielen'}</span>
            </button>
          </div>

          {/* Bildanzeige */}
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl lg:translate-x-12">
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent mix-blend-overlay" />
            
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
                  activeIndex === index 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-110'
                }`}
                onMouseMove={handleMouseMove}
                style={{
                  background: `linear-gradient(45deg, ${treatment.accent}20, transparent)`
                }}
              >
                <img
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: isHovering && activeIndex === index
                      ? `scale(1.05) translate(${(mousePosition.x - 50) * -0.04}px, ${(mousePosition.y - 50) * -0.04}px)` 
                      : 'scale(1)'
                  }}
                />
              </div>
            ))}

            {/* Dekorative Elemente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Benötigte Keyframe-Animation hinzufügen
const style = document.createElement('style');
style.textContent = `
  @keyframes progressBar {
    from { width: 0; }
    to { width: 100%; }
  }
  .animate-progressBar {
    animation: progressBar 6s linear;
  }
`;
document.head.appendChild(style);

export default ShowcaseSection;
