import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FAQSection() {
  const sectionRef = useRef(null);
  const [expanded, setExpanded] = useState(0);

  const faqs = [
    {
      q: 'What is MNNIT Innovation Council?',
      a: 'MNNIT IIC is a dynamic ecosystem dedicated to fostering innovation, entrepreneurship, and technological advancement. We empower students and entrepreneurs to transform ideas into impactful solutions.'
    },
    {
      q: 'Who can participate in our hackathons?',
      a: 'Everyone! Whether you\'re a student, professional, or aspiring entrepreneur, all are welcome. We believe great ideas come from diverse minds working together.'
    },
    {
      q: 'What support do participants receive?',
      a: 'We provide mentorship, technical guidance, resources, networking opportunities, and funding potential for the most promising ideas. Our goal is your success.'
    },
    {
      q: 'How do I register for events?',
      a: 'Head to our website\'s registration section. It\'s quick and easy! You\'ll get all the details about upcoming events, timelines, and requirements.'
    },
    {
      q: 'What makes IIC different?',
      a: 'We combine cutting-edge technology, passionate mentors, industry connections, and a vibrant community. It\'s not just about coding—it\'s about creating lasting impact.'
    },
    {
      q: 'Can startups use our resources?',
      a: 'Absolutely! We support pre-incubation and early-stage startups with workspace, guidance, and connections to investors and partners.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 20%',
          scrub: 1.5,
          markers: false
        },
        opacity: 0,
        x: -50,
        stagger: 0.1,
        duration: 1.5,
        ease: 'power2.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-lg text-center mb-12 leading-relaxed">
          Everything you need to know about MNNIT Innovation Council
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item group"
            >
              <button
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                className="w-full p-5 sm:p-6 bg-gradient-to-r from-gray-900 to-black border border-purple-500/20 rounded-lg hover:border-purple-500/50 transition-all duration-300 flex items-center justify-between group-hover:shadow-lg group-hover:shadow-purple-500/20"
              >
                <span className="text-left font-bold text-white text-base sm:text-lg">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`text-blue-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                    expanded === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expanded === i && (
                <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-900/20 to-black/50 border border-purple-500/10 border-t-0 rounded-b-lg">
                  <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-xl text-center">
          <p className="text-gray-300 mb-4">Still have questions?</p>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-bold hover:scale-105 transition-transform shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
