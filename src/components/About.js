import React, { useState } from 'react';
import { ArrowRight, Heart, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const statistics = [
    { value: "1897", label: "Gegründet" },
    { value: "45k+", label: "Jährliche Besucher" },
    { value: "35°C", label: "Quelltemperatur" },
    { value: "4.9", label: "Gästebewertung" }
  ];

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Natürliche Quellen",
      description: "Unsere Thermalquellen entspringen antiken unterirdischen Quellen, natürlich erhitzt und mit Mineralien angereichert."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Erbe",
      description: "Seit über einem Jahrhundert sind wir ein Zufluchtsort für Wellness, der Tradition mit modernem Luxus verbindet."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expertenteam",
      description: "Unsere zertifizierten Therapeuten und Wellness-Experten bringen Jahrzehnte an kombinierter Erfahrung mit."
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Linke Spalte - Bilder */}
          <div className="relative">
            {/* Hauptbild */}
            <div className="rounded-3xl overflow-hidden">
              <img 
                src="/api/placeholder/800/1000"
                alt="Thermalbad" 
                className="w-full object-cover"
              />
            </div>
            
            {/* Schwebendes Bild */}
            <div className="absolute -right-12 bottom-12 w-2/3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-3xl" />
                <img 
                  src="/api/placeholder/600/400"
                  alt="Spa-Behandlung" 
                  className="rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Statistik-Karten */}
            <div className="absolute -left-12 top-1/3 bg-white shadow-xl rounded-3xl p-6 max-w-[240px]">
              <div className="grid grid-cols-2 gap-6">
                {statistics.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-light text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rechte Spalte - Inhalt */}
          <div className="lg:pl-12">
            {/* Abschnittsüberschrift */}
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full mb-6">
                <div className="w-1 h-1 rounded-full bg-emerald-500" />
                <span className="text-sm text-emerald-600">Unsere Geschichte</span>
              </div>
              <h2 className="text-4xl font-light text-gray-900 mb-6 tracking-wide">
                Ein Jahrhundert Wellness in Baden
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Eingebettet im Herzen von Baden zieht unser Thermalbad Wasser aus antiken Quellen, die seit der Römerzeit für ihre heilenden Eigenschaften geschätzt werden. Heute setzen wir dieses Erbe fort und integrieren moderne Wellness-Innovationen.
              </p>
              
              {/* Statistik-Reihe */}
              <div className="grid grid-cols-2 gap-8 mb-12">
                {statistics.slice(2).map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-light text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funktionen */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4 p-4 rounded-2xl transition-colors duration-300 hover:bg-gray-50">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <div className={`transition-colors duration-300 ${
                        activeFeature === index ? 'text-emerald-600' : 'text-gray-400'
                      }`}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-2 flex items-center">
                        {feature.title}
                        <ArrowRight className={`w-4 h-4 ml-2 transition-all duration-300 ${
                          activeFeature === index 
                            ? 'opacity-100 translate-x-0 text-emerald-600' 
                            : 'opacity-0 -translate-x-4'
                        }`} />
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
