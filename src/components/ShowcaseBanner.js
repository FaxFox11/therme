import React, { useState, useEffect } from 'react';
import { Code2, X, ExternalLink, Mail } from 'lucide-react';

// Popup Banner Component
const PopupBanner = () => {
  const [state, setState] = useState('initial');

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      setState('visible');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setState('closing');
    // Remove component after animation
    setTimeout(() => setState('removed'), 500);
  };

  if (state === 'initial' || state === 'removed') return null;

  return (
    <div 
      className={`fixed right-6 top-24 z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        ${state === 'visible' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
    >
      <div 
        className={`bg-white rounded-2xl shadow-2xl overflow-hidden w-80 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
          ${state === 'visible' ? 'transform-none' : 'scale-98'}
        `}
      >
        {/* Header */}
        <div className="bg-emerald-600 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 opacity-90 hover:opacity-100 transition-opacity">
            <Code2 className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Showcase Website</span>
          </div>
          <button 
            onClick={handleClose}
            className="text-white opacity-80 hover:opacity-100 transition-all duration-300 p-1 hover:bg-white/10 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 mb-6 leading-relaxed">
            Dies ist eine Showcase-Website, designed von TruTec. Lust etwas großartiges zu verwirklichen ?
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-3">
            <a 
              href="https://tru-tec.de"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-2 w-full bg-emerald-600 text-white px-4 py-2 rounded-full transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span>Besuche TruTec</span>
            </a>
            <a 
              href="mailto:info@tru-tec.de"
              className="group flex items-center justify-center space-x-2 w-full bg-gray-100 text-gray-600 px-4 py-2 rounded-full transition-all duration-300 hover:bg-gray-200"
            >
              <Mail className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              <span>Kontakt</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Bottom Banner Component remains the same
const ShowcaseBanner = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-emerald-600 z-50 py-4 px-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/10 rounded-full">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-white/90 text-sm">
              Showcase Website designed by
            </span>
            <span className="text-white font-medium ml-1 text-base">
              TruTec.
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="mailto:info@tru-tec.de"
            className="text-white/90 hover:text-white text-sm flex items-center space-x-1 transition-colors duration-300"
          >
            <Mail className="w-4 h-4" />
            <span>Kontakt</span>
          </a>
          <a 
            href="https://tru-tec.de" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-emerald-600 px-4 py-2 rounded-full hover:bg-emerald-50 transition-colors duration-300 flex items-center space-x-1"
          >
            <span>TruTec besuchen</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

// Add custom scale-98 utility to your CSS
const style = document.createElement('style');
style.textContent = `
  .scale-98 {
    transform: scale(0.98);
  }
`;
document.head.appendChild(style);

export { ShowcaseBanner, PopupBanner };