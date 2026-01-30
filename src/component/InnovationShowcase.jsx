import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Code, Zap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function InnovationShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.innovation-card', {
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
        rotation: -3,
        stagger: 0.15,
        ease: 'power2.inOut'
      });


      gsap.to('.innovation-icon', {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'sine.inOut',
        stagger: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const innovations = [
    {
      icon: Lightbulb,
      title: 'Ideation',
      description: 'Transform your ideas into innovative solutions through collaborative brainstorming'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Build cutting-edge projects with mentorship from industry experts'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Showcase breakthrough technologies and creative implementations'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Connect with talented developers and innovators from across the institute'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Institute Innovation Council
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Empowering students to build tomorrow's technology today
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {innovations.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="innovation-card group relative bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 hover:border-blue-500/50 rounded-xl p-6 sm:p-8 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="innovation-icon inline-block p-3 bg-blue-500/20 rounded-lg mb-4">
                    <Icon className="text-blue-400" size={24} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            Join us in shaping the future of innovation at our institute
          </p>
        </div>
      </div>
    </section>
  );
}
