import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Twitter, Linkedin, Globe, Mic } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const sectionRef = useRef(null);

  const speakers = [
    {
      name: 'Dr. Ayesha Malik',
      role: 'Chief AI Scientist, Google DeepMind',
      topic: 'The Future of AGI & Ethics',
      bio: 'Leading global research on safe Artificial General Intelligence.',
      emoji: '🧠'
    },
    {
      name: 'Rajiv Mehta',
      role: 'Founder, Polygon',
      topic: 'Scaling Web3 for Billions',
      bio: 'Pioneer in Ethereum scaling solutions and decentralized infra.',
      emoji: '⛓️'
    },
    {
      name: 'Sarah Connor',
      role: 'Cybersecurity Expert',
      topic: 'Zero Trust Architecture',
      bio: 'Defending critical infrastructure against next-gen cyber threats.',
      emoji: '🛡️'
    },
    {
      name: 'David Chen',
      role: 'Hardware Architect, NVIDIA',
      topic: 'Next-Gen IoT Computing',
      bio: 'Architecting the chips that power the edge of the internet.',
      emoji: '💻'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.speaker-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false
        },
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 2,
        ease: 'power2.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <BackgroundEffects />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center">
          Keynote Speakers
        </h2>
        <p className="text-gray-400 text-lg text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Learn from the pioneers shaping the future of technology
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="speaker-card group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative h-full flex flex-col p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-blue-500/50 rounded-2xl transition-all duration-300">
                
                {/* Header: Emoji/Image & Links */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-3xl border border-blue-500/30">
                    {speaker.emoji}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors"><Linkedin size={18} /></button>
                    <button className="p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors"><Twitter size={18} /></button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{speaker.name}</h3>
                  <div className="text-blue-400 text-sm font-semibold mb-4">{speaker.role}</div>
                  
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 mb-4 group-hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
                      <Mic size={12} /> Speaking On
                    </div>
                    <div className="text-gray-200 text-sm font-medium">
                      "{speaker.topic}"
                    </div>
                  </div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {speaker.bio}
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
