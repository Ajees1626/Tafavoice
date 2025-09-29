import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import { PROJECTS } from '../utils/constants';
import { fadeInUp, staggerChildren } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const projectsRef = useRef(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map(project => project.category)))];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === selectedCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (projectsRef.current) {
        fadeInUp(projectsRef.current.querySelector('.section-title'));
        staggerChildren(projectsRef.current, '.project-card', 0.1);
      }
    });

    return () => ctx.revert();
  }, [filteredProjects]);

  return (
    <>
      <SEO
        data={{
          title: 'Projects',
          description: 'Explore our portfolio of web applications, mobile apps, and digital solutions. See how we help businesses succeed with modern technology.',
          keywords: ['portfolio', 'projects', 'web development', 'mobile apps', 'case studies'],
        }}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-max section-padding text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover our portfolio of successful projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container-max section-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section ref={projectsRef} className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <h2 className="section-title text-4xl font-bold text-center text-gray-900 mb-16">
            {selectedCategory === 'All' ? 'All Projects' : `${selectedCategory} Projects`}
          </h2>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="project-card bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-primary-600 font-medium">{project.category}</span>
                      {project.featured && (
                        <span className="text-yellow-500">⭐</span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm px-4 py-2 flex-1 text-center"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.caseStudy && (
                        <Link
                          to={`/projects/${project.caseStudy}`}
                          className="btn-secondary text-sm px-4 py-2 flex-1 text-center"
                        >
                          Case Study
                        </Link>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm px-4 py-2"
                          aria-label="View source code"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-max section-padding text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expertise and innovative solutions.
          </p>
          <Link to="/contact" className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
};

export default Projects;

