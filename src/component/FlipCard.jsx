import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FlipCardSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.flip-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 30%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        rotationY: -180,
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        ease: 'power2.inOut'
      });


      const cards = gsap.utils.toArray('.flip-card-inner');
      cards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { rotationY: 180, duration: 0.6, ease: 'power2.inOut' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotationY: 0, duration: 0.6, ease: 'power2.inOut' });
        });
      });


      gsap.to('.flip-card-glow', {
        boxShadow: [
          '0 0 20px rgba(59, 130, 246, 0.5)',
          '0 0 40px rgba(168, 85, 247, 0.8)',
          '0 0 20px rgba(59, 130, 246, 0.5)'
        ],
        duration: 3,
        repeat: -1,
        ease: 'sine.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    { front: '🚀', back: 'Launch', desc: 'Build fast & deploy globally', color: 'from-blue-500 to-blue-700' },
    { front: '💡', back: 'Innovate', desc: 'Create breakthrough solutions', color: 'from-purple-500 to-purple-700' },
    { front: '🎯', back: 'Target', desc: 'Focus on your mission', color: 'from-pink-500 to-pink-700' },
    { front: '⭐', back: 'Excel', desc: 'Achieve excellence always', color: 'from-orange-500 to-orange-700' },
  ];

  return (
    <section ref={sectionRef} className="w-full relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-5xl sm:text-6xl font-black mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            3D Flip Cards
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">Hover to flip and discover the power within</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flip-card group h-64 sm:h-72"
              style={{ perspective: '1200px' }}
            >
              <div
                className="flip-card-inner flip-card-glow relative w-full h-full transition-transform duration-600"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-2xl border border-white/10 hover:border-white/30 transition-colors`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="text-5xl sm:text-6xl mb-4">{card.front}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{card.back}</h3>
                </div>


                <div
                  className={`absolute inset-0 bg-gradient-to-br ${card.color.replace('500', '600').replace('700', '800')} rounded-2xl p-8 flex items-center justify-center text-center shadow-2xl border border-white/10 hover:border-white/30 transition-colors`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <p className="text-white text-base sm:text-lg font-semibold leading-relaxed">
                    {card.desc}
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