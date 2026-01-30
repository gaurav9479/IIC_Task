import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: 'Aisha Patel',
      role: 'Tech Entrepreneur',
      text: 'IIC transformed my startup idea into a thriving business. The mentorship, resources, and community support were absolutely incredible.',
      avatar: '🚀'
    },
    {
      name: 'Raj Kumar',
      role: 'Software Engineer',
      text: 'This is where ideas come alive. I went from thinking "what if" to building products that matter. IIC made the impossible possible.',
      avatar: '💡'
    },
    {
      name: 'Priya Singh',
      role: 'Product Designer',
      text: 'The innovation energy here is contagious. My design thinking skills evolved tenfold, and I found collaborators who believe in my vision.',
      avatar: '🎨'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 20%',
          scrub: 1.5,
          markers: false
        },
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 2,
        ease: 'power2.inOut'
      });

      gsap.from('.testimonial-title', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 95%',
          end: 'top 40%',
          scrub: 1.5,
          markers: false
        },
        opacity: 0,
        x: -100,
        duration: 1.5,
        ease: 'power2.inOut'
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="testimonial-title mb-16">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Stories That Inspire
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hear from the innovators and dreamers who've transformed their visions into reality
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="testimonial-card p-6 sm:p-8 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-xl hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg shadow-purple-500/50 group-hover:shadow-purple-500/70 transition-all">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
