import React from 'react';
import { Droplets, Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Über uns', href: '#' },
    { label: 'Behandlungen', href: '#' },
    { label: 'Pakete', href: '#' },
    { label: 'Geschenkkarten', href: '#' },
    { label: 'Karriere', href: '#' },
    { label: 'Presse', href: '#' }
  ];

  const openingHours = [
    { day: 'Montag - Sonntag', hours: '9:00 - 23:00' },
    { day: 'Saunawelt', hours: '10:00 - 22:00' },
    { day: 'Behandlungszeiten', hours: '10:00 - 20:00' }
  ];

  const contactInfo = [
    { icon: <Phone className="w-5 h-5" />, text: '+41 123 456 789' },
    { icon: <Mail className="w-5 h-5" />, text: 'info@therme-baden.ch' },
    { icon: <MapPin className="w-5 h-5" />, text: 'Kurplatz 1, 5400 Baden' }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#' },
    { icon: <Facebook className="w-5 h-5" />, href: '#' },
    { icon: <Twitter className="w-5 h-5" />, href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Hauptinhalt des Fußbereichs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Marken-Sektion */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Droplets className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-light">THERME</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Erleben Sie die heilende Kraft der Thermalquellen in unserem historischen Spa, 
              wo Tradition auf Luxus für ultimative Entspannung und Erneuerung trifft.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 rounded-full bg-white/5 hover:bg-emerald-600 transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Schnellzugriff */}
          <div>
            <h3 className="text-lg mb-6">Schnellzugriff</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-lg mb-6">Öffnungszeiten</h3>
            <ul className="space-y-4">
              {openingHours.map((schedule, index) => (
                <li key={index} className="text-gray-400">
                  <span className="block text-white">{schedule.day}</span>
                  {schedule.hours}
                </li>
              ))}
            </ul>
          </div>

          {/* Kontaktinformationen */}
          <div>
            <h3 className="text-lg mb-6">Kontaktieren Sie uns</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-400">
                  <span className="text-emerald-400">{contact.icon}</span>
                  <span>{contact.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter-Abonnement */}
        <div className="border-t border-white/10 pt-12 pb-8 mb-8">
          <div className="max-w-xl">
            <h3 className="text-lg mb-4">Abonnieren Sie unseren Newsletter</h3>
            <p className="text-gray-400 mb-6">
              Bleiben Sie über unsere neuesten Angebote und Wellness-Tipps informiert.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Geben Sie Ihre E-Mail-Adresse ein"
                className="flex-1 px-6 py-3 bg-white/5 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-full transition-colors duration-300"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </div>

        {/* Fußzeile */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TruTec. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Datenschutzerklärung
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Nutzungsbedingungen
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors duration-300">
                Cookie-Richtlinien
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
