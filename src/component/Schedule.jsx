import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TimelineItem from './Timline';

gsap.registerPlugin(ScrollTrigger);

export default function Schedule() {
  const timelineRef = useRef(null);
  const timeline = [
    { time: '9:00 AM', event: 'Registration & Breakfast', location: 'Main Hall' },
    { time: '10:00 AM', event: 'Opening Ceremony', location: 'Auditorium' },
    { time: '11:00 AM', event: 'Keynote Speech', location: 'Auditorium' },
    { time: '12:00 PM', event: 'Track Selection', location: 'All Halls' },
    { time: '1:00 PM', event: 'Lunch Break', location: 'Cafeteria' },
    { time: '2:00 PM', event: 'Competition Begins', location: 'All Halls' },
    { time: '6:00 PM', event: 'Dinner & Networking', location: 'Cafeteria' },
    { time: '9:00 PM', event: 'Final Judging', location: 'All Halls' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        scrollTrigger: { 
          trigger: timelineRef.current, 
          start: 'top 95%',
          end: 'top 20%',
          scrub: 1.5,
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
    <section ref={timelineRef} id="schedule" className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
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