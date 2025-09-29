import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import { PROJECTS } from '../utils/constants';
import { fadeInUp, fadeInLeft, fadeInRight, staggerChildren } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const CaseStudy = () => {
  const { slug } = useParams();
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  const project = PROJECTS.find(p => p.caseStudy === slug);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (heroRef.current) {
        fadeInUp(heroRef.current.querySelector('.hero-title'));
        fadeInUp(heroRef.current.querySelector('.hero-subtitle'), 0.3);
      }

      if (contentRef.current) {
        staggerChildren(contentRef.current, '.content-section', 0.2);
      }
    });

    return () => ctx.revert();
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const challenges = [
    'Complex user authentication system',
    'Real-time data synchronization',
    'Scalable architecture design',
    'Performance optimization',
  ];

  const solutions = [
    'Implemented JWT-based authentication with refresh tokens',
    'Used WebSocket connections for real-time updates',
    'Designed microservices architecture with Docker',
    'Optimized database queries and implemented caching',
  ];

  const results = [
    { metric: '50%', description: 'Faster load times' },
    { metric: '99.9%', description: 'Uptime achieved' },
    { metric: '10K+', description: 'Active users' },
    { metric: '4.8/5', description: 'User satisfaction' },
  ];

  return (
    <>
      <SEO
        data={{
          title: project.title,
          description: project.longDescription,
          keywords: project.technologies,
          image: project.image,
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl text-gray-600 mb-8">
              {project.longDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg px-8 py-4"
                >
                  View Live Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-lg px-8 py-4"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-12 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section ref={contentRef} className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            
            {/* Overview */}
            <div className="content-section mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  This project represents a comprehensive solution that addresses the unique challenges 
                  faced by modern businesses in the digital landscape. Through careful planning, 
                  innovative design, and cutting-edge technology, we delivered a solution that not 
                  only meets but exceeds expectations.
                </p>
                <p>
                  The development process involved close collaboration with stakeholders, iterative 
                  design improvements, and rigorous testing to ensure the highest quality standards. 
                  The result is a robust, scalable, and user-friendly application that drives real 
                  business value.
                </p>
              </div>
            </div>

            {/* Challenges */}
            <div className="content-section mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Challenges</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {challenges.map((challenge, index) => (
                  <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-600 font-bold">!</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">{challenge}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="content-section mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Solutions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 font-bold">✓</span>
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="text-gray-700">{solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="content-section mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Results</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {results.map((result, index) => (
                  <div key={index} className="text-center p-6 bg-primary-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{result.metric}</div>
                    <div className="text-gray-700">{result.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack */}
            <div className="content-section mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {project.technologies.map((tech) => (
                  <div key={tech} className="bg-gray-100 rounded-lg p-4 text-center">
                    <span className="font-medium text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Lessons Learned */}
            <div className="content-section">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lessons Learned</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  This project provided valuable insights into modern web development practices and 
                  the importance of user-centered design. Key takeaways include the significance of 
                  early user testing, the value of iterative development, and the impact of performance 
                  optimization on user experience.
                </p>
                <p>
                  The collaboration between design and development teams was crucial to the project's 
                  success, demonstrating the importance of cross-functional communication and shared 
                  understanding of project goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-max section-padding text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              Start a Project
            </Link>
            <Link to="/projects" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudy;

