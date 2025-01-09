import React, { useState } from 'react';
import { Check, Clock } from 'lucide-react';

const PackagesSection = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);

  const packages = [
    {
      tag: "Beliebtester",
      name: "Tageskarte",
      description: "Vollzugang zu Thermalbädern und Saunawelt",
      price: "89",
      duration: "Zugang für den ganzen Tag",
      features: [
        "Zugang zu Thermalbecken",
        "Zugang zur Saunawelt",
        "Ruhebereiche",
        "Fitnesscenter",
        "Bademantel & Handtücher"
      ]
    },
    {
      tag: "Bestes Preis-Leistungs-Verhältnis",
      name: "Wellness-Paket",
      description: "Kompletter Spa-Tag mit Behandlungen",
      price: "199",
      duration: "Ganztägiger Zugang + Behandlung",
      features: [
        "Alle Tageskarten-Features",
        "60-minütige Massage",
        "Gesichtsbehandlung",
        "Mittagessen im Spa-Restaurant",
        "Privater Entspannungsraum"
      ]
    },
    {
      tag: "Premium",
      name: "Luxus-Retreat",
      description: "VIP-Spa-Erlebnis mit privaten Einrichtungen",
      price: "299",
      duration: "Ganztägiger VIP-Zugang",
      features: [
        "Alle Wellness-Features",
        "Private Spa-Suite",
        "Persönlicher Betreuer",
        "Champagner-Service",
        "Abendessen-Reservierung"
      ]
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        {/* Abschnittsüberschrift */}
        <div className="max-w-xl mx-auto text-center mb-20">
          <span className="text-emerald-600 text-sm font-medium tracking-wider uppercase mb-3 block">
            Spa-Pakete
          </span>
          <h2 className="text-4xl font-light text-gray-900 mb-4 tracking-wide">
            Wählen Sie Ihr Erlebnis
          </h2>
          <p className="text-gray-600">
            Wählen Sie das perfekte Paket für Ihre Entspannungsreise
          </p>
        </div>

        {/* Pakete-Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 transition-all duration-500"
              onMouseEnter={() => setHoveredPackage(index)}
              onMouseLeave={() => setHoveredPackage(null)}
              style={{
                boxShadow: hoveredPackage === index 
                  ? '0 25px 50px -12px rgba(0, 0, 0, 0.15)' 
                  : '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Hintergrund-Overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              />

              {/* Paket-Tag */}
              <div className="absolute -top-4 left-8">
                <span className="bg-white text-emerald-600 text-sm font-medium px-6 py-2 rounded-full shadow-sm">
                  {pkg.tag}
                </span>
              </div>

              {/* Paket-Inhalt */}
              <div className="mb-8 pt-4 relative">
                <h3 className="text-2xl font-light text-gray-900 mb-2 tracking-wide group-hover:text-emerald-600 transition-colors duration-300">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                {/* Preis */}
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-light text-gray-900 tracking-tight">€{pkg.price}</span>
                  <span className="text-gray-500 ml-2">pro Person</span>
                </div>
                
                {/* Dauer */}
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{pkg.duration}</span>
                </div>
              </div>

              {/* Features-Liste */}
              <ul className="space-y-4 mb-8 relative">
                {pkg.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-gray-600 group-hover:transform group-hover:translate-x-1 transition-transform duration-300"
                    style={{ transitionDelay: `${featureIndex * 50}ms` }}
                  >
                    <Check className="w-5 h-5 text-emerald-600 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA-Button */}
              <div className="relative">
                <button className="w-full bg-gray-50 group-hover:bg-emerald-600 text-gray-900 group-hover:text-white px-6 py-4 rounded-full transition-all duration-300 overflow-hidden">
                  <span className="relative z-10 font-medium tracking-wide">Paket buchen</span>
                </button>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1 h-1 bg-emerald-400 rounded-full animate-ping" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Zusatzinfo */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm tracking-wide">
            Alle Pakete beinhalten Zugang zu den grundlegenden Annehmlichkeiten. Preise können in der Hauptsaison variieren.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
