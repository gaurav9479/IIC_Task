import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Brain, Link, Wifi, DollarSign, BookOpen, Lightbulb } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

gsap.registerPlugin(ScrollTrigger);

export default function FocusAreas() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.focus-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=100',
          end: 'bottom top',
          toggleActions: 'play none none none',
          markers: false
        },
        duration: 2,
        y: 40,
        rotation: -5,
        scale: 0.95,
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

  const tracks = [
    {
      icon: Brain,
      title: 'AI & Generative AI',
      description: 'Leverage LLMs and neural networks to solve real-world problems.'
    },
    {
      icon: Link,
      title: 'Blockchain & Web3',
      description: 'Decentralized solutions, DeFi, and transparent systems.'
    },
    {
      icon: Wifi,
      title: 'IoT & Hardware',
      description: 'Smart devices, automation, and connected hardware solutions.'
    },
    {
      icon: DollarSign,
      title: 'FinTech',
      description: 'Innovating financial services, payments, and security.'
    },
    {
      icon: BookOpen,
      title: 'EdTech',
      description: 'Transforming education through technology and accessibility.'
    },
    {
      icon: Lightbulb,
      title: 'Open Innovation',
      description: 'Unrestricted ideas that push the boundaries of technology.'
    }
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(card, {
      duration: 0.5,
      rotateX: rotateX,
      rotateY: rotateY,
      scale: 1.05,
      transformPerspective: 1000,
      ease: 'power1.out'
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      duration: 0.5,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      ease: 'power1.out'
    });
  };

  return (
    <section ref={sectionRef} id="events" className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <BackgroundEffects />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
          Event Tracks
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-16">
          Choose your battlefield and build the future
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <div
                key={i}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="focus-item interactive group relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/20 hover:border-orange-500/50 rounded-xl p-6 sm:p-8 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
                
                <div className="relative z-10 pointer-events-none">
                  <div className="focus-icon inline-block p-3 bg-orange-500/20 rounded-lg mb-4 group-hover:bg-orange-500/30 transition-colors">
                    <Icon className="text-orange-400" size={28} />
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-400 mb-2">
                    {track.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                    {track.description}
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
