import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Code, Palette, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function GlitchSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.glitch-char', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 40%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        x: (i) => (i % 2 === 0 ? -50 : 50),
        opacity: 0,
        stagger: 0.08,
        ease: 'power2.inOut'
      });


      gsap.from('.glitch-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          end: 'top 30%',
          scrub: 1.5
        },
        duration: 2,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: 'power2.inOut'
      });


      gsap.to('.glitch-pulse', {
        boxShadow: [
          '0 0 10px rgba(34, 211, 238, 0.5)',
          '0 0 20px rgba(168, 85, 247, 0.8)',
          '0 0 10px rgba(34, 211, 238, 0.5)'
        ],
        duration: 2,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Blazing quick performance' },
    { icon: Code, title: 'Clean Code', desc: 'Well-structured & maintainable' },
    { icon: Palette, title: 'Beautiful Design', desc: 'Stunning visual experience' },
    { icon: Rocket, title: 'Launch Ready', desc: 'Fully optimized & production-ready' }
  ];

  return (
    <section ref={sectionRef} className="w-full relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Glitch Title */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            {'INNOVATION'.split('').map((char, i) => (
              <span
                key={i}
                className="glitch-char inline-block text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text"
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto rounded-full"></div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="glitch-card glitch-pulse group relative bg-gradient-to-br from-gray-900/50 to-black border border-cyan-500/30 hover:border-cyan-500/70 rounded-xl p-8 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity"></div>
                
                <div className="relative z-10">
                  <div className="inline-block p-3 bg-cyan-500/20 rounded-lg mb-4 group-hover:bg-cyan-500/30 transition-colors">
                    <Icon className="text-cyan-400 group-hover:text-cyan-300 transition-colors" size={32} />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 text-base sm:text-lg group-hover:text-gray-300 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}