import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '../components/SEO';
import { SITE_CONFIG, SKILLS } from '../utils/constants';
import { fadeInUp, fadeInLeft, fadeInRight, staggerChildren } from '../utils/animations';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const skillsRef = useRef(null);
  const valuesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      if (heroRef.current) {
        fadeInUp(heroRef.current.querySelector('.hero-title'));
        fadeInUp(heroRef.current.querySelector('.hero-subtitle'), 0.3);
      }

      // Story animations
      if (storyRef.current) {
        fadeInLeft(storyRef.current.querySelector('.story-text'));
        fadeInRight(storyRef.current.querySelector('.story-image'));
      }

      // Skills animations
      if (skillsRef.current) {
        fadeInUp(skillsRef.current.querySelector('.section-title'));
        staggerChildren(skillsRef.current, '.skill-item', 0.1);
      }

      // Values animations
      if (valuesRef.current) {
        fadeInUp(valuesRef.current.querySelector('.section-title'));
        staggerChildren(valuesRef.current, '.value-card', 0.2);
      }
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every project is built with attention to detail and best practices.',
      icon: '🎯',
    },
    {
      title: 'Client Focused',
      description: 'Your success is our success. We work closely with clients to understand their needs and goals.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'We stay ahead of the curve with the latest technologies and innovative solutions.',
      icon: '💡',
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest feedback throughout the entire development process.',
      icon: '🔍',
    },
  ];

  return (
    <>
      <SEO
        data={{
          title: 'About',
          description: 'Learn about our story, values, and the team behind Business Man. We are passionate about creating exceptional digital experiences.',
          keywords: ['about us', 'team', 'company', 'values', 'story'],
        }}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50">
        <div className="container-max section-padding text-center">
          <h1 className="hero-title text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-heading">
            About Us
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-body">
            We are a passionate team of developers, designers, and innovators dedicated to creating exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-gradient-to-br from-white via-secondary-50 to-primary-50">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="story-text">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, Business Man started as a small team with a big vision: to help businesses 
                  succeed in the digital world through innovative technology solutions.
                </p>
                <p>
                  What began as a passion project has grown into a full-service digital agency, working with 
                  clients from startups to Fortune 500 companies. We've helped hundreds of businesses transform 
                  their digital presence and achieve their goals.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible, combining cutting-edge technology 
                  with creative design to deliver solutions that not only meet but exceed our clients' expectations.
                </p>
              </div>
            </div>
            <div className="story-image">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/image/pic1.jpg"
                  alt="Our Story - Business Man Team"
                  className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 bg-gradient-to-br from-secondary-50 via-white to-primary-50">
        <div className="container-max section-padding">
          <h2 className="section-title text-4xl font-bold text-center text-gray-900 mb-16 font-heading">
            Our Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {SKILLS.map((skill, index) => {
              const cardClasses = [
                'card-primary',
                'card-secondary', 
                'card-accent',
                'card-primary',
                'card-secondary',
                'card-accent'
              ];
              return (
                <div
                  key={index}
                  className={`skill-item ${cardClasses[index % cardClasses.length]} p-4 text-center transform hover:scale-105 transition-all duration-300`}
                >
                  <span className="text-gray-700 font-medium font-body">{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-max section-padding">
          <h2 className="section-title text-4xl font-bold text-center text-gray-900 mb-16 font-heading">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const cardClasses = [
                'card-primary',
                'card-secondary', 
                'card-accent',
                'card-primary'
              ];
              return (
                <div key={index} className={`value-card ${cardClasses[index % cardClasses.length]} text-center p-8 transform hover:scale-105 transition-all duration-300`}>
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 font-heading">{value.title}</h3>
                  <p className="text-gray-700 font-body">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Business Man',
                role: 'Founder & Lead Developer',
                bio: 'Passionate about creating innovative solutions and leading teams to success.',
                image: '/api/placeholder/300/300',
              },
              {
                name: 'Jane Smith',
                role: 'UI/UX Designer',
                bio: 'Creative designer with a keen eye for detail and user experience.',
                image: '/api/placeholder/300/300',
              },
              {
                name: 'John Doe',
                role: 'Full Stack Developer',
                bio: 'Experienced developer specializing in modern web technologies.',
                image: '/api/placeholder/300/300',
              },
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="container-max section-padding text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Ready to bring your ideas to life? We'd love to hear about your project and how we can help.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
          >
            Start a Project
          </a>
        </div>
      </section>
    </>
  );
};

export default About;

