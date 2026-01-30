import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Trophy, Zap, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function StatsShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-box', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 30%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        opacity: 0,
        y: 60,
        stagger: 0.15,
        ease: 'power2.inOut'
      });


      const counters = gsap.utils.toArray('.counter-number');
      counters.forEach((counter) => {
        gsap.to(counter, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1.5,
            markers: false,
            onUpdate: (self) => {
              const data = counter.getAttribute('data-target');
              const number = parseInt(data) * self.progress;
              counter.textContent = Math.ceil(number) + (data.includes('+') ? '+' : '');
            }
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { icon: Users, label: 'Active Members', value: '500+' },
    { icon: Trophy, label: 'Projects Completed', value: '150+' },
    { icon: Zap, label: 'Innovations', value: '100+' },
    { icon: Target, label: 'Mentors', value: '50+' }
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-blue-900/10 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 bg-gradient-to-r from-pink-400 to-rose-600 bg-clip-text text-transparent">
          Our Achievements
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-16">
          Building a thriving innovation community
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="stat-box group relative bg-gradient-to-br from-gray-900/50 to-black border border-pink-500/20 hover:border-pink-500/50 rounded-xl p-6 sm:p-8 text-center transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-block p-3 bg-pink-500/20 rounded-lg mb-4">
                    <Icon className="text-pink-400" size={28} />
                  </div>
                  
                  <div className="counter-number text-4xl sm:text-5xl font-black text-pink-400 mb-2" data-target={stat.value.replace(/\D/g, '')}>
                    0
                  </div>
                  
                  <p className="text-gray-400 text-sm sm:text-base">
                    {stat.label}
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
