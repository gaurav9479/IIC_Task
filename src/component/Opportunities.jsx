import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Award, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Opportunities() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.opp-card');
      if (cards.length > 0) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 95%',
            end: 'top 20%',
            scrub: 1.5,
            markers: false
          },
          duration: 2,
          opacity: 0,
          y: 80,
          rotation: -3,
          stagger: 0.2,
          ease: 'power2.inOut'
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const opportunities = [
    {
      icon: Lightbulb,
      title: 'Idea Competitions',
      description: 'Pitch your groundbreaking ideas and win prizes',
      highlight: 'Monthly contests'
    },
    {
      icon: Briefcase,
      title: 'Hackathons',
      description: '24-48 hour coding marathons with mentorship',
      highlight: '2+ per year'
    },
    {
      icon: Award,
      title: 'Mentorship Program',
      description: 'Learn from industry experts and successful founders',
      highlight: 'Personalized guidance'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
          Opportunities for You
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-16">
          Multiple ways to showcase your innovation and get recognized
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {opportunities.map((opp, i) => {
            const Icon = opp.icon;
            return (
              <div
                key={i}
                className="opp-card group relative bg-gradient-to-br from-gray-900/50 to-black border border-emerald-500/20 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 opacity-0 group-hover:opacity-5 rounded-full filter blur-2xl transition-opacity"></div>
                
                <div className="relative z-10 p-8">
                  <div className="inline-block p-4 bg-emerald-500/20 rounded-lg mb-4">
                    <Icon className="text-emerald-400" size={32} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-emerald-400 mb-3">
                    {opp.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base mb-4">
                    {opp.description}
                  </p>
                  
                  <div className="inline-block px-4 py-2 bg-emerald-500/20 rounded-lg">
                    <span className="text-emerald-300 text-xs sm:text-sm font-semibold">
                      {opp.highlight}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <button className="px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg font-bold text-base sm:text-lg hover:scale-105 transition-transform inline-flex items-center gap-2">
            Explore All Opportunities
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
