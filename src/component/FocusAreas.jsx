import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Rocket, Brain, Handshake, Award, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FocusAreas() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.focus-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 20%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        opacity: 0,
        rotation: -5,
        scale: 0.8,
        stagger: 0.15,
        ease: 'power2.inOut'
      });

      gsap.to('.focus-icon', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1.5
        },
        rotation: 360,
        ease: 'none'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const focusAreas = [
    {
      icon: Lightbulb,
      title: 'Vibrant Ecosystem',
      description: 'Create a thriving local innovation ecosystem'
    },
    {
      icon: Rocket,
      title: 'Entrepreneurship',
      description: 'Support startup and entrepreneurship mechanisms'
    },
    {
      icon: Brain,
      title: 'Cognitive Growth',
      description: 'Develop critical thinking and innovation skills'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Identify and reward innovative projects'
    },
    {
      icon: Handshake,
      title: 'Networking',
      description: 'Connect with mentors and industry leaders'
    },
    {
      icon: TrendingUp,
      title: 'Pre-incubation',
      description: 'Support early-stage idea development'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          Our Focus Areas
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-16">
          Six pillars driving innovation and entrepreneurship
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {focusAreas.map((area, i) => {
            const Icon = area.icon;
            return (
              <div
                key={i}
                className="focus-item group relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 hover:border-orange-500/50 rounded-xl p-6 sm:p-8 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="focus-icon inline-block p-3 bg-orange-500/20 rounded-lg mb-4 group-hover:bg-orange-500/30 transition-colors">
                    <Icon className="text-orange-400" size={28} />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-2">
                    {area.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base">
                    {area.description}
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
