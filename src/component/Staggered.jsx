import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StaggeredReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.stagger-card', {
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 95%',
          end: 'top 30%',
          scrub: 1.5,
          markers: false
        },
        opacity: 0,
        y: 100,
        rotation: -5,
        duration: 2,
        stagger: {
          each: 0.15,
          from: 'start'
        },
        ease: 'power2.inOut'
      });


      gsap.from('.text-reveal', {
        scrollTrigger: { 
          trigger: sectionRef.current, 
          start: 'top 95%',
          end: 'top 25%',
          scrub: 1.5,
          markers: false
        },
        clipPath: 'inset(0 100% 0 0)',
        duration: 2,
        stagger: 0.2,
        ease: 'power2.inOut'
      });


      const counters = gsap.utils.toArray('.counter');
      counters.forEach((counter) => {
        gsap.to(counter, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            end: 'top 20%',
            scrub: 1.5,
            markers: false,
            onUpdate: (self) => {
              const numbers = [500, 50, 100];
              const index = counters.indexOf(counter);
              const target = numbers[index] * self.progress;
              counter.textContent = Math.ceil(target);
            }
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-16 sm:mb-20 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Staggered Cards Reveal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-16 sm:mb-20">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="stagger-card bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">Feature {i}</h3>
              <p className="text-gray-400 text-sm sm:text-base">Amazing feature description for innovation</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-center">
          {[
            { num: 500, text: 'Participants' },
            { num: 50, text: 'Hours' },
            { num: 100, text: 'Mentors' }
          ].map((stat, i) => (
            <div key={i} className="stagger-card">
              <div className="counter text-5xl sm:text-6xl font-black text-blue-400 mb-2">0</div>
              <div className="text-lg sm:text-xl text-gray-400 text-reveal">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}