import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  onAdminClick?: () => void;
}

export function Navigation({ onAdminClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: '首页', href: '#home' },
    { label: '关于我', href: '#about' },
    { label: '作品集', href: '#portfolio' },
    { label: '技能', href: '#skills' },
    { label: '联系我', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3">
                             {/* Logo */}
               <div className="flex items-center">
                 <svg 
                   width="32" 
                   height="32" 
                   viewBox="0 0 200 200" 
                   fill="none" 
                   xmlns="http://www.w3.org/2000/svg"
                   className="text-blue-600"
                 >
                   <g clipPath="url(#clip0_1146_26724)">
                     <path d="M51.7679 53.8559C53.3088 49.3436 59.6905 49.3436 61.2313 53.8559L68.7277 75.808C70.7288 81.6679 75.3314 86.2705 81.1913 88.2716L103.143 95.7679C107.656 97.3088 107.656 103.69 103.143 105.231L81.1913 112.728C75.3314 114.729 70.7288 119.331 68.7277 125.191L61.2314 147.143C59.6905 151.656 53.3088 151.656 51.7679 147.143L44.2716 125.191C42.2705 119.331 37.6679 114.729 31.808 112.728L9.85587 105.231C5.34363 103.69 5.34361 97.3088 9.85585 95.7679L31.808 88.2716C37.6679 86.2705 42.2705 81.6679 44.2716 75.808L51.7679 53.8559Z" fill="currentColor"/>
                     <path d="M80.3662 135.744C84.8326 128.767 94.1093 126.731 101.086 131.198C115.402 140.362 134.659 138.666 147.162 126.163C161.612 111.714 161.612 88.2864 147.162 73.837C134.659 61.3343 115.402 59.6381 101.086 68.8024C94.1093 73.2686 84.8326 71.2329 80.3662 64.2559C75.9001 57.279 77.9352 48.0029 84.9119 43.5364C110.843 26.9361 145.698 29.947 168.375 52.6239C194.541 78.789 194.541 121.211 168.375 147.376C145.698 170.053 110.843 173.064 84.9119 156.464C77.9352 151.997 75.9001 142.721 80.3662 135.744Z" fill="currentColor"/>
                   </g>
                   <defs>
                     <clipPath id="clip0_1146_26724">
                       <rect width="200" height="200" fill="white"/>
                     </clipPath>
                   </defs>
                 </svg>
               </div>
                             <span className="text-2xl font-bold text-gray-900">JiaLing's Design</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-600 hover:bg-white/20"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/20 backdrop-blur-md border-t border-white/20">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-800 hover:text-blue-600 block px-3 py-2 text-base font-medium w-full text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}