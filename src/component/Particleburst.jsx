import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParticleBurstSection() {
  const sectionRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.particle', {
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 95%',
          end: 'top 10%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        scale: 0,
        opacity: 0,
        x: (i) => Math.cos((i / 24) * Math.PI * 2) * 300,
        y: (i) => Math.sin((i / 24) * Math.PI * 2) * 300,
        stagger: 0.05,
        ease: 'power2.inOut'
      });


      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.to(particle, {
            y: Math.sin(i) * 30,
            x: Math.cos(i) * 30,
            repeat: -1,
            yoyo: true,
            duration: 3 + i * 0.3,
            ease: 'sine.inOut',
            delay: i * 0.1
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden flex items-center justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-20 bg-gradient-to-r from-pink-400 to-red-600 bg-clip-text text-transparent">
          Burst Animation
        </h2>

        <div className="relative h-96 sm:h-screen">

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full shadow-2xl z-20"></div>


          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (particlesRef.current[i] = el)}
              className="particle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className={`w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-base sm:text-lg">
            Particles burst out on scroll with dynamic animation
          </p>
        </div>
      </div>
    </section>
  );
}