import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MorphingSection() {
  const sectionRef = useRef(null);
  const shapeRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      shapeRefs.current.forEach((shape, idx) => {
        gsap.from(shape, {
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
          duration: 1.5,
          scale: 0,
          opacity: 0,
          ease: 'back.out',
          delay: idx * 0.1
        });


        gsap.to(shape, {
          rotation: 360,
          duration: 8,
          repeat: -1,
          ease: 'none'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
          Morphing Shapes
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {[
            { shape: '◆', color: 'from-red-500 to-pink-500' },
            { shape: '●', color: 'from-blue-500 to-cyan-500' },
            { shape: '■', color: 'from-purple-500 to-pink-500' },
            { shape: '▲', color: 'from-yellow-500 to-orange-500' },
            { shape: '⬡', color: 'from-green-500 to-emerald-500' },
            { shape: '◆', color: 'from-indigo-500 to-blue-500' },
            { shape: '●', color: 'from-rose-500 to-red-500' },
            { shape: '■', color: 'from-fuchsia-500 to-purple-500' },
            { shape: '▲', color: 'from-cyan-500 to-blue-500' },
            { shape: '⬡', color: 'from-lime-500 to-green-500' },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (shapeRefs.current[i] = el)}
              className={`h-24 sm:h-32 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-4xl sm:text-5xl font-black text-white shadow-lg hover:scale-110 transition-transform cursor-pointer`}
            >
              {item.shape}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}