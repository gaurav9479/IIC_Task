import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Code, Zap, Users } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

gsap.registerPlugin(ScrollTrigger);

export default function InnovationShowcase() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.from('.innovation-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          end: 'bottom top',
          toggleActions: 'play none none none',
          markers: false
        },
        duration: 2,
        y: 40,
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
      title: 'Knowledge Sharing',
      description: 'Arrange lectures & presentations from industry experts and organize seminars to share research interest'
    },
    {
      icon: Code,
      title: 'Industry Projects',
      description: 'Facilitate industry-sponsored M.Tech/PhD projects and establish industry-named Labs'
    },
    {
      icon: Zap,
      title: 'Research & Consultancy',
      description: 'Drive research collaborations with industry and provide consultancy services from faculty members'
    },
    {
      icon: Users,
      title: 'Industry Exposure',
      description: 'Organize industry visits and tours for faculty and students to bridge the gap between academia and industry'
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <BackgroundEffects />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Functions of IIC
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
            What we do to foster innovation
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

        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-black mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Opportunities for You
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Multiple ways to showcase your innovation and get recognized
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-green-500/50 transition-all group">
              <div className="text-green-400 font-bold text-xl mb-2">Idea Competitions</div>
              <p className="text-gray-400 text-sm mb-4">Pitch your groundbreaking ideas and win prizes</p>
              <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-semibold border border-green-500/20">
                Monthly contests
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all group">
              <div className="text-purple-400 font-bold text-xl mb-2">Hackathons</div>
              <p className="text-gray-400 text-sm mb-4">24-48 hour coding marathons with mentorship</p>
              <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs font-semibold border border-purple-500/20">
                2+ per year
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300 font-medium">Building a thriving innovation community</p>
          </div>
        </div>
      </div>
    </section>
  );
}
