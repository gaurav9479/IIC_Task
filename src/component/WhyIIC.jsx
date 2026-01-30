import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Users, Trophy } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WhyIIC() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          markers: false
        },
        duration: 2,
        y: 40,
        stagger: 0.2,
        ease: 'power2.inOut'
      });

      gsap.from('.why-text', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 40%',
          scrub: 1.5,
          markers: false
        },
        duration: 2,
        x: -50,
        ease: 'power2.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black text-center mb-4 bg-gradient-to-r from-green-400 to-blue-600 bg-clip-text text-transparent">
          Why Institute Innovation Council?
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-16">
          Fostering a culture of innovation and entrepreneurship across the institution
        </p>

        <div className="why-text bg-gradient-to-br from-gray-900/50 to-black border border-green-500/20 rounded-2xl p-8 sm:p-12 mb-12">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">
            The Ministry of Human Resource Development (MHRD), Government of India has established MHRD's Innovation Cell (MIC) to systematically foster a culture of innovation amongst all Higher Education Institutions.
          </p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Our Institute's Innovation Council creates a vibrant local innovation ecosystem, nurturing young talents and supporting them to work with new ideas during their formative years.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="why-card group relative bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20 hover:border-purple-500/50 rounded-xl p-8 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
            <div className="relative z-10">
              <Target className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl sm:text-2xl font-bold text-purple-400 mb-3">Our Vision</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Create a vibrant ecosystem where innovation thrives and entrepreneurship flourishes
              </p>
            </div>
          </div>

          <div className="why-card group relative bg-gradient-to-br from-blue-900/30 to-black border border-blue-500/20 hover:border-blue-500/50 rounded-xl p-8 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl"></div>
            <div className="relative z-10">
              <Zap className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-3">Our Mission</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Empower students to turn ideas into reality through mentorship and resources
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
