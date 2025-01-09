import React, { useState } from 'react';
import { Droplets, Heart, Utensils, Users } from 'lucide-react';

const FeatureSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Thermalbad",
      description: "Tauchen Sie ein in unsere heilenden Thermalquellen, natürlich erhitzt und reich an Mineralien.",
      image: "/api/placeholder/800/600",
      stats: [
        { value: "36°C", label: "Wassertemperatur" },
        { value: "2.000m²", label: "Poolbereich" }
      ]
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Saunawelt",
      description: "Erleben Sie traditionelle und moderne Sauna-Rituale in unseren sorgfältig gestalteten Umgebungen.",
      image: "/api/placeholder/800/600",
      stats: [
        { value: "8", label: "Einzigartige Saunen" },
        { value: "90°C", label: "Maximale Temperatur" }
      ]
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Wellness-Küche",
      description: "Nähren Sie Ihren Körper mit unseren gesunden und köstlichen kulinarischen Angeboten.",
      image: "/api/placeholder/800/600",
      stats: [
        { value: "100%", label: "Bio" },
        { value: "3", label: "Restaurants" }
      ]
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Fachkundige Betreuung",
      description: "Unsere ausgebildeten Fachleute bieten personalisierte Behandlungen und Beratung.",
      image: "/api/placeholder/800/600",
      stats: [
        { value: "50+", label: "Spezialisten" },
        { value: "30+", label: "Behandlungen" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Abschnittsüberschrift */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Erleben Sie Wellness</h2>
          <p className="text-gray-600">Entdecken Sie unsere erstklassigen Einrichtungen und Dienstleistungen für Ihr Wohlbefinden</p>
        </div>

        {/* Funktionsnavigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex rounded-full bg-white shadow-lg p-2">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFeature === index 
                    ? 'bg-emerald-600 text-white' 
                    : 'text-gray-600 hover:text-emerald-600'
                }`}
              >
                {feature.icon}
                <span className="font-medium">{feature.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Funktionsinhalte */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bildseite */}
          <div className="relative rounded-3xl overflow-hidden group">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  activeFeature === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Inhaltsseite */}
          <div className="lg:pl-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  activeFeature === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 absolute'
                }`}
              >
                <h3 className="text-3xl font-light text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-8">{feature.description}</p>
                
                {/* Statistik-Gitter */}
                <div className="grid grid-cols-2 gap-6">
                  {feature.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="bg-white rounded-2xl p-6 shadow-sm"
                    >
                      <div className="text-2xl font-medium text-emerald-600 mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
