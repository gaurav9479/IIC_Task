import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TimelineItem from './Timline';
import BackgroundEffects from './BackgroundEffects';

gsap.registerPlugin(ScrollTrigger);

export default function Schedule() {
  const timelineRef = useRef(null);
  const timeline = [
    { time: 'Day 1 - 09:00 AM', event: 'Check-in & Registration', location: 'Main Reception' },
    { time: 'Day 1 - 10:30 AM', event: 'Opening Ceremony', location: 'Auditorium' },
    { time: 'Day 1 - 11:30 AM', event: 'Hacking Begins', location: 'Workspaces' },
    { time: 'Day 1 - 04:00 PM', event: 'Mentoring Session I', location: 'Workspaces' },
    { time: 'Day 1 - 08:00 PM', event: 'Dinner & Networking', location: 'Cafeteria' },
    { time: 'Day 2 - 08:00 AM', event: 'Breakfast', location: 'Cafeteria' },
    { time: 'Day 2 - 11:30 AM', event: 'Coding Ends & Submission', location: 'Online Portal' },
    { time: 'Day 2 - 02:00 PM', event: 'Final Pitches & Judging', location: 'Auditorium' },
    { time: 'Day 2 - 05:00 PM', event: 'Prize Distribution', location: 'Auditorium' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: { 
          trigger: timelineRef.current, 
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false
        },
        duration: 2,
        opacity: 0,
        x: (i) => (i % 2 === 0 ? -100 : 100),
        stagger: 0.2,
        ease: 'power2.inOut',
      });
    }, timelineRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={timelineRef} id="schedule" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <BackgroundEffects />
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Event Schedule
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg">A day packed with innovation</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 opacity-30"></div>
          <div className="space-y-8 sm:space-y-12">
            {timeline.map((item, idx) => (
              <TimelineItem key={idx} item={item} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}