import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Trophy, Users, Code, Zap } from 'lucide-react';

export default function KPISplash() {
  const containerRef = useRef(null);

  const cards = [
    { type: 'kpi', label: 'Prize Pool', value: '₹5 Lakhs', icon: Trophy, color: 'text-yellow-400', bg: 'border-yellow-500/30' },
    { type: 'lorem', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', color: 'text-gray-400', bg: 'border-blue-500/30' },
    { type: 'kpi', label: 'Participants', value: '500+', icon: Users, color: 'text-blue-400', bg: 'border-blue-500/30' },
    { type: 'lorem', text: 'Innovation distinguishes between a leader and a follower.', color: 'text-gray-400', bg: 'border-purple-500/30' },
    { type: 'kpi', label: 'Projects', value: '100+', icon: Code, color: 'text-green-400', bg: 'border-green-500/30' },
    { type: 'lorem', text: 'The only way to do great work is to love what you do.', color: 'text-gray-400', bg: 'border-pink-500/30' },
    { type: 'kpi', label: 'Mentors', value: '50+', icon: Zap, color: 'text-purple-400', bg: 'border-purple-500/30' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {

      cards.forEach((_, i) => {
        gsap.to(`.splash-card-${i}`, {
          y: 'random(-20, 20)',
          x: 'random(-20, 20)',
          rotation: 'random(-5, 5)',
          duration: 'random(2, 4)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2
        });
      });


      gsap.from('.splash-card', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);


  const positions = [
    { top: '10%', left: '10%' },
    { top: '20%', right: '15%' },
    { bottom: '15%', left: '15%' },
    { top: '50%', right: '10%' }, 
    { bottom: '30%', right: '20%' },
    { top: '15%', left: '40%' }, 
    { bottom: '10%', left: '50%' },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {cards.map((card, i) => {
        const Icon = card.icon;
        const pos = positions[i] || { top: '50%', left: '50%' };
        return (
          <div
            key={i}
            className={`splash-card splash-card-${i} absolute p-4 rounded-xl border backdrop-blur-md bg-black/40 ${card.bg} shadow-lg max-w-[200px] hidden lg:block transform hover:scale-105 transition-transform duration-300`}
            style={pos}
          >
            {card.type === 'kpi' ? (
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg bg-white/5 ${card.color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className={`text-xl font-bold ${card.color}`}>{card.value}</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{card.label}</div>
                </div>
              </div>
            ) : (
              <p className="text-xs text-gray-400 italic leading-relaxed border-l-2 border-white/20 pl-3">
                "{card.text}"
              </p>
            )}
            

            <div className={`absolute inset-0 rounded-xl opacity-20 blur-lg ${card.bg.replace('border', 'bg').replace('/30', '/50')}`}></div>
          </div>
        );
      })}
    </div>
  );
}
