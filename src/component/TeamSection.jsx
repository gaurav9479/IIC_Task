import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const sectionRef = useRef(null);

  const team = [
    {
      name: 'Dr. Vikram Singh',
      role: 'Director',
      specialty: 'Innovation & Strategy',
      emoji: '👨‍💼'
    },
    {
      name: 'Isha Verma',
      role: 'Lead - Programs',
      specialty: 'Hackathons & Mentorship',
      emoji: '👩‍💻'
    },
    {
      name: 'Arjun Patel',
      role: 'Lead - Operations',
      specialty: 'Project Management',
      emoji: '📊'
    },
    {
      name: 'Neha Sharma',
      role: 'Lead - Community',
      specialty: 'Networking & Engagement',
      emoji: '🤝'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.team-member', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 20%',
          scrub: 1.5,
          markers: false
        },
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 2,
        ease: 'power2.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center">
          Meet Our Visionaries
        </h2>
        <p className="text-gray-400 text-lg text-center mb-16 max-w-2xl mx-auto leading-relaxed">
          Dedicated leaders driving innovation, mentoring talents, and building ecosystems where ideas thrive
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <div
              key={i}
              className="team-member group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              <div className="relative p-6 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all duration-300 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all">
                  {member.emoji}
                </div>
                <h3 className="font-bold text-lg text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs mb-4">{member.specialty}</p>
                <div className="flex justify-center gap-3">
                  <button className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"><Mail size={16} /></button>
                  <button className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"><Linkedin size={16} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
