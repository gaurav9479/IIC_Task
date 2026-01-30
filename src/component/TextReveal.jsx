import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Film, Smartphone, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TextRevealSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.reveal-word', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 50%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        x: -50,
        stagger: 0.2,
        ease: 'power2.inOut'
      });


      gsap.from('.reveal-line', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 60%',
          scrub: 1.5
        },
        duration: 2,
        scaleX: 0,
        transformOrigin: 'left',
        ease: 'power2.inOut'
      });


      gsap.from('.feature-box', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false
        },
        duration: 2,
        y: 40,
        stagger: 0.15,
        ease: 'power2.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const features = [
    { icon: Zap, title: 'Lightning Fast', desc: 'Sub-second load times', emoji: '⚡' },
    { icon: Film, title: 'Smooth Animations', desc: '60fps performance', emoji: '🎬' },
    { icon: Smartphone, title: 'Fully Responsive', desc: 'Mobile to desktop', emoji: '📱' },
    { icon: Rocket, title: 'Modern Stack', desc: 'React, GSAP, Tailwind', emoji: '🚀' },
  ];

  return (
    <section ref={sectionRef} className="w-full relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-tight">
            <span className="reveal-word inline-block text-white">Why</span>
            <br className="hidden sm:block" />
            <span className="reveal-word inline-block text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 bg-clip-text">
              Choose Us?
            </span>
          </h2>


          <div className="flex justify-center mt-6 sm:mt-8">
            <div className="reveal-line h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 rounded-full"></div>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="feature-box group relative bg-gradient-to-br from-gray-900/50 to-black border border-pink-500/20 hover:border-pink-500/50 rounded-2xl p-8 sm:p-10 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity"></div>

                <div className="relative z-10">

                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block p-4 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors">
                      <Icon className="text-pink-400 group-hover:text-pink-300 transition-colors" size={32} />
                    </div>
                    <span className="text-4xl">{feature.emoji}</span>
                  </div>


                  <h3 className="text-2xl sm:text-3xl font-black text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 text-base sm:text-lg group-hover:text-gray-300 transition-colors">
                    {feature.desc}
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