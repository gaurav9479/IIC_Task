import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);
  const stats = [
    { number: '464', label: 'Active Members' },
    { number: '139', label: 'Projects Completed' },
    { number: '93', label: 'Innovations' },
    { number: '24/7', label: 'Innovation Support' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        scrollTrigger: { 
          trigger: aboutRef.current, 
          start: 'top 95%',
          end: 'top 40%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        opacity: 0,
        x: -100,
        ease: 'power2.inOut',
      });
      gsap.from('.about-image', {
        scrollTrigger: { 
          trigger: aboutRef.current, 
          start: 'top 95%',
          end: 'top 40%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        opacity: 0,
        x: 100,
        ease: 'power2.inOut',
      });
      gsap.from('.stat-card', {
        scrollTrigger: { 
          trigger: aboutRef.current, 
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false
        },
        duration: 2,
        opacity: 0,
        y: 50,
        stagger: 0.15,
        ease: 'power2.inOut',
      });
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="w-full min-h-screen relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16">
          <div className="about-content">
            <h2 className="text-4xl sm:text-5xl font-black mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Decrypter-25
            </h2>
            <div className="text-xl font-bold text-blue-400 mb-4">MNNIT IIC's Annual Tech Fest</div>
            <p className="text-gray-400 text-base sm:text-lg mb-4 leading-relaxed">
              Fostering a culture of innovation and entrepreneurship. We aim to imbibe the spirit of innovation among students, faculty, and stakeholders to evolve sustainable solutions and improve quality of life.
            </p>
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              Creating a platform to encourage, inspire, and nurture young students by supporting them to work with new ideas and transform them into prototypes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#events" className="px-6 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-colors text-sm sm:text-base text-center">Explore Tracks</a>
              <a href="#schedule" className="px-6 py-3 border-2 border-blue-400 rounded-lg font-semibold hover:bg-blue-400/10 transition-colors text-sm sm:text-base text-center">View Schedule</a>
            </div>
          </div>
          <div className="about-image relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 rounded-2xl p-8 sm:p-12">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">{stat.number}</div>
                    <div className="text-gray-400 mt-2 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 group-hover:border-blue-500/50 rounded-xl p-6 sm:p-8 text-center">
                <div className="text-2xl sm:text-3xl font-black text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

}