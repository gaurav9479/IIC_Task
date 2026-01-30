import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function MultiDirectional() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left to right
      gsap.from('.slide-right', {
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 95%',
          end: 'top 20%',
          scrub: 1.5,
          markers: false
        },
        x: -500,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        ease: 'power2.inOut'
      });

      // Right to left
      gsap.from('.slide-left', {
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 95%',
          end: 'top 15%',
          scrub: 1.5,
          markers: false
        },
        x: 500,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
        delay: 0.3,
        ease: 'power2.inOut'
      });

      // Bottom to top
      gsap.from('.slide-up', {
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 95%',
          end: 'top 10%',
          scrub: 1.5,
          markers: false
        },
        y: 200,
        opacity: 0,
        duration: 2,
        stagger: 0.15,
        delay: 0.6,
        ease: 'power2.inOut'
      });

      // Rotate and scale
      gsap.from('.rotate-in', {
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 95%',
          end: 'top 5%',
          scrub: 1.5,
          markers: false
        },
        rotation: 180,
        scale: 0,
        opacity: 0,
        duration: 2,
        stagger: 0.1,
        ease: 'back.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const items = [
    { text: 'Left to Right', class: 'slide-right' },
    { text: 'Also Right', class: 'slide-right' },
    { text: 'Right to Left', class: 'slide-left' },
    { text: 'Also Left', class: 'slide-left' },
    { text: 'Bottom Up', class: 'slide-up' },
    { text: 'Rotate In', class: 'rotate-in' }
  ];

  return (
    <section ref={sectionRef} className="w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 sm:mb-20 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Multi-Directional Animations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <div key={i} className={`${item.class} bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 rounded-xl p-6 sm:p-8 text-center hover:border-blue-500/50 transition-colors`}>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400">{item.text}</h3>
              <p className="text-gray-500 mt-2 text-sm sm:text-base">Appears from {item.text.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
}