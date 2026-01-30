import { useEffect,useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ImageIcon } from 'lucide-react';
import BackgroundEffects from './BackgroundEffects';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (!scrollContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Calculate total scrollable width: scrollWidth - clientWidth (visible width)
      const scrollWidth = scrollContainerRef.current.scrollWidth - scrollContainerRef.current.offsetWidth;

      gsap.to(scrollContainerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center center',
          end: `+=${scrollWidth + 1000}`, // Add some padding to scroll duration
          scrub: 1,
          pin: true,
          markers: false
        },
        x: -scrollWidth,
        ease: 'none'
      });
    });

    return () => ctx.revert();
  }, []);

  const cards = [
    { title: 'Web Dev', color: 'from-blue-500 to-cyan-500', count: '150+ Participants' },
    { title: 'AI & ML', color: 'from-purple-500 to-pink-500', count: '120+ Participants' },
    { title: 'Blockchain', color: 'from-orange-500 to-red-500', count: '100+ Participants' },
    { title: 'IoT', color: 'from-green-500 to-emerald-500', count: '80+ Participants' },
    { title: 'Mobile', color: 'from-indigo-500 to-blue-500', count: '90+ Participants' },
    { title: 'Cloud', color: 'from-pink-500 to-rose-500', count: '110+ Participants' }
  ];

  return (
    <section ref={containerRef} className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <BackgroundEffects />
      <div className="max-w-5xl mx-auto mb-12 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Tracks (Scroll Horizontally)
        </h2>
        <p className="text-gray-400 text-sm sm:text-base">↶ Scroll down to trigger horizontal scroll</p>
      </div>
      <div ref={scrollContainerRef} className="flex gap-4 sm:gap-6 pb-20">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`flex-shrink-0 w-72 sm:w-80 h-60 sm:h-72 bg-gradient-to-br ${card.color} rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer group hover:scale-105 transition-transform`}
            style={{ opacity: 0.8 }}
          >
            <div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2">{card.title}</h3>
              <p className="text-white/80 text-sm sm:text-base">{card.count}</p>
            </div>
            <div className="text-white/60 group-hover:text-white transition text-sm sm:text-base">↗ Explore</div>
          </div>
        ))}
      </div>
    </section>
  );
}