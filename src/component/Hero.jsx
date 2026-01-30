// AdvancedHero.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AdvancedHero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title span', {
        opacity: 0,
        y: 100,
        rotation: 10,
        stagger: 0.1,
        duration: 1,
        ease: 'power3.out'
      });
      gsap.to('.float-left', {
        scrollTrigger: { trigger: heroRef.current, start: 'top center', end: 'bottom center', scrub: 1 },
        x: -300,
        rotation: 360,
        duration: 2
      });
      gsap.to('.float-right', {
        scrollTrigger: { trigger: heroRef.current, start: 'top center', end: 'bottom center', scrub: 1 },
        x: 300,
        rotation: -360,
        duration: 2
      });
      gsap.to('.scroll-bounce', { y: 15, repeat: -1, yoyo: true, duration: 0.8, ease: 'sine.inOut' });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-40 md:pt-48 pb-20 px-4 bg-black">

      <div className="absolute inset-0 bg-black pointer-events-none">
        <div className="float-left absolute top-10 left-10 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="float-right absolute top-1/3 right-10 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      {/* Content - Interactive */}
      <div className="relative z-20 text-center max-w-5xl w-full mx-auto">
        <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight">
          {'Unleash Your Innovation'.split('').map((char, i) => (
            <span key={i} className="inline-block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              {char}
            </span>
          ))}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
          Where brilliant minds collide, groundbreaking ideas are born, and the future is shaped. Join us in a mission to transform dreams into reality.
        </p>

        <button className="group px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold text-base sm:text-lg hover:scale-105 transition-transform inline-flex items-center gap-2">
          Begin Your Impact
          <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <div className="scroll-bounce text-blue-400">
          <ChevronDown size={32} />
        </div>
      </div>
    </section>
  );
}