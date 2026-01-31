import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, DollarSign, Users, BarChart3, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function KPIOverlapSection() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const kpis = [
    { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'from-cyan-400 to-blue-600', bgGlow: 'cyan' },
    { icon: DollarSign, value: '₹2Cr+', label: 'Funding Raised', color: 'from-green-400 to-emerald-600', bgGlow: 'emerald' },
    { icon: Users, value: '1000+', label: 'Innovators', color: 'from-purple-400 to-violet-600', bgGlow: 'purple' },
    { icon: BarChart3, value: '300%', label: 'Growth Rate', color: 'from-orange-400 to-red-600', bgGlow: 'orange' },
    { icon: Rocket, value: '75+', label: 'Startups Launched', color: 'from-pink-400 to-rose-600', bgGlow: 'rose' }
  ];

  const loremTexts = [
    "Innovation is the catalyst that transforms ideas into reality. At our hub, we nurture creative minds and empower them to build the future.",
    "Every breakthrough begins with a single spark of curiosity. We provide the fuel to turn that spark into a blazing trail of success.",
    "Join a community of visionaries who are redefining what's possible. Together, we're building tomorrow's solutions today."
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // MASTER TIMELINE - 10 steps over 1000% scroll distance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1000%', // Increased for extra scroll/shift step
          pin: true,
          scrub: 1, 
          pinSpacing: true
        }
      });

      // 1. Setup initial opacity/positions
      const kpiCards = gsap.utils.toArray('.kpi-overlap-card');
      const loremBlocks = gsap.utils.toArray('.lorem-reveal');
      
      // Initial states
      gsap.set(kpiCards, { 
        y: 300, 
        opacity: 0, 
        scale: 0.8,
        rotate: (i) => i % 2 === 0 ? -15 : 15
      });
      
      gsap.set('.lorem-container', {
        y: 100, // Start slightly lower
        opacity: 1 // Container is visible, children are hidden
      });

      gsap.set(loremBlocks, { 
        y: 50, 
        opacity: 0,
        clipPath: 'inset(100% 0 0 0)'
      });

      // 2. Build Sequence

      // --- PHASE 1: KPI CARDS (Steps 1-5) ---
      kpiCards.forEach((card, index) => {
        tl.to(card, { 
          y: index * -15, x: 0, opacity: 1, scale: 1, rotate: 0, 
          duration: 1, ease: 'back.out(1.2)' 
        }, index); // Absolute timing: 0, 1, 2, 3, 4
      });

      // --- PHASE 2: SCROLL UP / CAMERA SHIFT (Step 6) ---
      // Move KPIs/Title UP and out of way, Move Text UP into view
      tl.to('.kpi-main-content', {
        y: -400,
        opacity: 0.2, // Fade out slightly
        scale: 0.9,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 5); 

      tl.to('.lorem-container', {
        y: -300, // Move up into center
        duration: 1.5,
        ease: 'power2.inOut'
      }, 5); // Happens simultaneously with KPI move

      // --- PHASE 3: LOREM TEXT (Steps 7-9) ---
      loremBlocks.forEach((block, index) => {
        tl.to(block, { 
          y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', 
          duration: 1, ease: 'power2.out' 
        }, 6.5 + index); // Start after the shift (5 + 1.5)
      });

      // Final Buffer
      tl.to({}, { duration: 1 });


      // Parallel Background Animation
      gsap.to('.bg-pulse-glow', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=1000%',
          scrub: 1
        },
        scale: 1.5,
        opacity: 0.8,
        rotation: 180
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden flex flex-col justify-center"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bg-pulse-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl"></div>
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pink-500/10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* KPI MAIN CONTENT WRAPPER */}
        <div className="kpi-main-content transition-all will-change-transform">
          {/* Section Title */}
          <div className="kpi-section-title text-center mb-16">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Our Impact
              </span>
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
              Numbers that speak louder than words
            </p>
          </div>

          {/* KPI Cards Container - Overlapping Stack */}
          <div 
            ref={containerRef}
            className="kpi-cards-container relative flex justify-center items-center min-h-[400px] mb-12"
          >
            <div className="relative w-full max-w-lg">
              {kpis.map((kpi, index) => {
                const Icon = kpi.icon;
                return (
                  <div
                    key={index}
                    className={`kpi-overlap-card absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[320px] bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl`}
                    style={{
                      boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 60px -15px var(--tw-shadow-color)`,
                      '--tw-shadow-color': `rgb(var(--${kpi.bgGlow}-500) / 0.3)`
                    }}
                  >
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${kpi.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${kpi.color} mb-4`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      
                      <div className={`text-5xl sm:text-6xl font-black bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mb-2`}>
                        {kpi.value}
                      </div>
                      
                      <p className="text-gray-400 text-base sm:text-lg font-medium">
                        {kpi.label}
                      </p>
                    </div>
                    
                    {/* Card number indicator */}
                    <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/50 text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Lorem Text Blocks with Reveal Animation */}
        {/* Added extra margin-top to separate it visually before the shift */}
        <div className="lorem-container space-y-8 max-w-3xl mx-auto mt-24">
          {loremTexts.map((text, index) => (
            <div
              key={index}
              className="lorem-reveal relative group"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-1 h-full min-h-[60px] rounded-full bg-gradient-to-b ${
                    index === 0 ? 'from-cyan-400 to-blue-600' :
                    index === 1 ? 'from-purple-400 to-violet-600' :
                    'from-pink-400 to-rose-600'
                  }`}></div>
                  
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {text}
                  </p>
                </div>
                
                {/* Decorative quote icon */}
                <div className="absolute top-2 right-4 text-white/5 text-6xl font-serif">"</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                style={{
                  opacity: 0.3 + (i * 0.15),
                  transform: `scale(${0.6 + (i * 0.1)})`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
