import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import SEO from '../components/SEO';
import { fadeInUp } from '../utils/animations';

const NotFound = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (containerRef.current) {
        fadeInUp(containerRef.current.querySelector('.error-title'));
        fadeInUp(containerRef.current.querySelector('.error-subtitle'), 0.3);
        fadeInUp(containerRef.current.querySelector('.error-actions'), 0.6);
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEO
        data={{
          title: 'Page Not Found',
          description: 'The page you are looking for could not be found. Please check the URL or return to our homepage.',
        }}
      />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div ref={containerRef} className="container-max section-padding text-center">
          <div className="max-w-2xl mx-auto">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold text-primary-600 mb-4">404</div>
              <div className="w-24 h-1 bg-primary-600 mx-auto"></div>
            </div>

            {/* Error Message */}
            <h1 className="error-title text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Page Not Found
            </h1>
            <p className="error-subtitle text-xl text-gray-600 mb-8">
              Sorry, the page you are looking for doesn't exist or has been moved. 
              Let's get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="error-actions flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn-primary text-lg px-8 py-4">
                Go Home
              </Link>
              <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
                Contact Us
              </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 mb-4">You might be looking for:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/about"
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  About Us
                </Link>
                <Link
                  to="/projects"
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Our Projects
                </Link>
                <Link
                  to="/contact"
                  className="text-primary-600 hover:text-primary-700 transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

