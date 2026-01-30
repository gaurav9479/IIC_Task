import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Functions() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.function-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 25%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -100 : 100),
        stagger: 0.15,
        ease: 'power2.inOut'
      });

      gsap.to('.function-number', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          scrub: 1.5
        },
        scale: 1.2,
        ease: 'back.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const functions = [
    'Conduct innovation and entrepreneurship activities in time-bound fashion',
    'Identify and reward innovations while sharing success stories',
    'Organize workshops, seminars with entrepreneurs and mentors',
    'Network with peers and national entrepreneurship development organizations',
    'Create an institution innovation portal for projects',
    'Organize hackathons, idea competitions and mini-challenges'
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Functions of IIC
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-16">
          What we do to foster innovation
        </p>

        <div className="space-y-4 sm:space-y-6">
          {functions.map((func, i) => (
            <div
              key={i}
              className="function-item group relative bg-gradient-to-br from-gray-900/50 to-black border border-cyan-500/20 hover:border-cyan-500/50 rounded-xl p-6 sm:p-8 transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
              
              <div className="relative z-10 flex gap-4 sm:gap-6 items-start">
                <div className="function-number flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-cyan-400" size={24} />
                </div>
                
                <div className="flex-grow">
                  <p className="text-gray-300 text-base sm:text-lg font-medium">
                    {func}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
