import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import { SITE_CONFIG, SERVICES, TESTIMONIALS, PROJECTS } from '../utils/constants';
import { fadeInUp, fadeInLeft, fadeInRight, staggerChildren, scaleIn } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelector('.hero-title'),
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        );
        
        gsap.fromTo(
          heroRef.current.querySelector('.hero-subtitle'),
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
        );
        
        gsap.fromTo(
          heroRef.current.querySelector('.hero-cta'),
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: 'power3.out' }
        );
      }

      // Services animations
      if (servicesRef.current) {
        fadeInUp(servicesRef.current.querySelector('.section-title'));
        staggerChildren(servicesRef.current, '.service-card', 0.2);
      }

      // Projects animations
      if (projectsRef.current) {
        fadeInUp(projectsRef.current.querySelector('.section-title'));
        staggerChildren(projectsRef.current, '.project-card', 0.15);
      }

      // Testimonials animations
      if (testimonialsRef.current) {
        fadeInUp(testimonialsRef.current.querySelector('.section-title'));
        scaleIn(testimonialsRef.current.querySelector('.testimonial-card'));
      }
    });

    return () => ctx.revert();
  }, []);

  const featuredProjects = PROJECTS.filter(project => project.featured);

  return (
    <>
      <SEO
        data={{
          title: 'Home',
          description: SITE_CONFIG.description,
          keywords: ['web development', 'mobile apps', 'UI/UX design', 'consulting'],
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 overflow-hidden pt-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100/30 via-transparent to-secondary-100/30"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 z-10 overflow-hidden">
          {/* Floating geometric shapes */}
          <div className="absolute top-40 left-10 w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
          <div className="absolute top-60 right-20 w-16 h-16 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-lg rotate-45 animate-bounce shadow-lg" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg rotate-12 animate-bounce shadow-lg" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
          <div className="absolute top-80 left-1/2 w-8 h-8 bg-gradient-to-br from-secondary-400 to-secondary-500 rounded-full animate-bounce shadow-lg" style={{animationDelay: '1.5s', animationDuration: '4.5s'}}></div>
          <div className="absolute bottom-60 right-1/3 w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-500 rounded-lg rotate-45 animate-bounce shadow-lg" style={{animationDelay: '2.5s', animationDuration: '3.8s'}}></div>
        </div>

        {/* Main Content Container */}
        <div className="relative z-20 min-h-screen flex items-center py-12">
          <div className="container-max section-padding w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="text-left lg:text-left">
                {/* Main Title with Text Effects */}
                <div className="mb-8">
                  <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-display">
                    <span className="block text-gray-900">
                      Creating
                    </span>
                    <span className="block bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                      Digital
                    </span>
                    <span className="block text-gray-900 relative">
                      Experiences
                      {/* Decorative underline */}
                      <div className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    </span>
                  </h1>
                </div>

                {/* Subtitle with layered text effect */}
                <div className="mb-12 relative">
                  <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-gray-700 mb-4 max-w-2xl font-body">
                    We build modern web applications, mobile apps, and digital solutions
                  </p>
                  <p className="text-base md:text-lg text-gray-600 max-w-xl font-comfort">
                    that help businesses grow and succeed in the digital world
                  </p>

                  {/* Decorative text elements */}
                  <div className="absolute -top-6 left-0 text-3xl opacity-30 font-heading">
                    ✨
                  </div>
                  <div className="absolute -bottom-6 right-0 text-2xl opacity-30 font-heading">
                    🚀
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="hero-cta flex flex-col sm:flex-row gap-6 justify-start items-start">
                  <Link 
                    to="/projects" 
                    className="btn-primary px-8 py-4 text-lg font-heading"
                  >
                    View Our Work
                  </Link>
                  
                  <Link 
                    to="/contact" 
                    className="btn-secondary px-8 py-4 text-lg font-heading"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>

              {/* Right Side - Person Image */}
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/image/pic.jpg"
                    alt="Professional business person"
                    className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                  />
                  {/* Decorative elements around image */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-full animate-bounce shadow-lg" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full animate-bounce shadow-lg" style={{animationDelay: '1.5s'}}></div>
                  <div className="absolute top-1/4 -right-6 w-5 h-5 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full animate-bounce shadow-lg" style={{animationDelay: '2s'}}></div>
                </div>
                
                {/* Background decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-primary-100/30 to-secondary-100/30 rounded-2xl transform -rotate-2 scale-110 -z-20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <div className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-500/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-gradient-to-br from-white via-secondary-50 to-primary-50">
        <div className="container-max section-padding">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 font-heading">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => {
              const cardClasses = [
                'card-primary',
                'card-secondary', 
                'card-accent',
                'card-primary'
              ];
              return (
                <div key={index} className={`service-card text-center p-8 ${cardClasses[index % cardClasses.length]} transform hover:scale-105 transition-all duration-300`}>
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">{service.title}</h3>
                  <p className="text-gray-700 font-body">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={projectsRef} className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="container-max section-padding">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 font-heading">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => {
              const cardClasses = [
                'card-primary',
                'card-secondary', 
                'card-accent'
              ];
              return (
                <div key={project.id} className={`project-card ${cardClasses[index % cardClasses.length]} overflow-hidden transform hover:scale-105 transition-all duration-300`}>
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-heading">{project.title}</h3>
                    <p className="text-gray-700 mb-4 font-body">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 text-sm rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm px-4 py-2"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.caseStudy && (
                        <Link
                          to={`/projects/${project.caseStudy}`}
                          className="btn-secondary text-sm px-4 py-2"
                        >
                          Case Study
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/projects" className="btn-accent text-lg px-8 py-4">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-max section-padding">
          <h2 className="section-title text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16 font-heading">
            What Clients Say
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="testimonial-card card-secondary p-8 md:p-12 text-center transform hover:scale-105 transition-all duration-300">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-accent-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-gray-700 mb-6 italic font-body">
                "Exceptional work! The team delivered exactly what we needed and more. 
                Their attention to detail and technical expertise is outstanding."
              </blockquote>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                  SJ
                </div>
                <div>
                  <div className="font-semibold text-gray-900 font-heading">Sarah Johnson</div>
                  <div className="text-gray-600 font-body">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600">
        <div className="container-max section-padding text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto font-body">
            Let's discuss how we can help bring your ideas to life with modern technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Started Today
            </Link>
            <Link to="/projects" className="btn-accent text-lg px-8 py-4">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
