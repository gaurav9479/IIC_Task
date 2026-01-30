import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.layer-1', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom top'
        },
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Layer 2
      gsap.from('.layer-2', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom top'
        },
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: 'power3.out'
      });

      // Layer 3 - Fastest
      gsap.from('.layer-3', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom top'
        },
        y: 0,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      });


      gsap.to('.layer-1', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        },
        y: 50,
        ease: 'none'
      });

      gsap.to('.layer-2', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        },
        y: 30,
        ease: 'none'
      });

      gsap.to('.layer-3', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        },
        y: 10,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent opacity-30"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="layer-1 text-4xl sm:text-6xl md:text-7xl font-black text-center mb-8 text-transparent bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text">
          Depth
        </div>

        <div className="layer-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 sm:h-48 bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-black text-blue-400 mb-2">{i}</div>
                <p className="text-gray-400 text-sm sm:text-base">Layer {i}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="layer-3 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-blue-400 mb-4">Parallax Magic</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Scroll to see the depth effect as layers move at different speeds
          </p>
        </div>
      </div>
    </section>
  );
}