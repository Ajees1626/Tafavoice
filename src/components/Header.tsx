import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION } from '../utils/constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <nav className="container-max section-padding">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo with enhanced styling */}
          <Link
            to="/"
            className="group relative text-2xl lg:text-3xl font-bold transition-all duration-300 font-display"
            aria-label="Business Man - Home"
          >
            <span className="text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
              TAFA
            </span>
            <span className="text-primary-600 group-hover:text-secondary-500 transition-colors duration-300">
              VOICE
            </span>
            {/* Animated underline */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 transition-all duration-300 group-hover:w-full"></div>
          </Link>

          {/* Desktop Navigation with enhanced styling */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group ${
                  location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-gray-800 hover:text-primary-600 hover:bg-gray-50'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.href && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-full animate-pulse"></div>
                )}
              </Link>
            ))}
            
            {/* Enhanced CTA Button */}
            <Link
              to="/contact"
              className="ml-4 px-6 py-3 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 font-heading bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700 shadow-lg hover:shadow-primary-500/25"
            >
              Get Started
              <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Mobile menu button with enhanced styling */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-3 rounded-xl transition-all duration-300 text-gray-800 hover:text-primary-600 hover:bg-gray-100"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
              } bg-gray-800`}></span>
              <span className={`block w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              } bg-gray-800`}></span>
              <span className={`block w-5 h-0.5 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
              } bg-gray-800`}></span>
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div 
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300" 
              onClick={toggleMenu} 
            />
            <div className="fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl z-50 border border-gray-200/50 animate-slide-down">
              <div className="px-6 py-8 space-y-2">
                {NAVIGATION.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-lg font-medium transition-all duration-300 rounded-xl ${
                      location.pathname === item.href
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                    onClick={toggleMenu}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-primary-600 text-white py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors duration-300"
                    onClick={toggleMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
