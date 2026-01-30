import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Navigation() {
  const navRef = useRef(null);
  const linkRefs = useRef([]);

  const links = [
    { name: "About", id: "about" },
    { name: "Events", id: "events" },
    { name: "Schedule", id: "schedule" },
    { name: "Contact", id: "contact" },
  ];


  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        clearProps: "all",
      });

      gsap.from(linkRefs.current, {
        opacity: 0,
        y: -20,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        clearProps: "all", 
      });
    }, navRef);

    return () => ctx.revert();
  }, []);



  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/70 border-b border-white/20"
    >

      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
            IC
          </div>
          <span className="text-lg font-black bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text text-transparent">
            MNNIT IIC
          </span>
        </div>


        <div className="hidden md:flex gap-10">
          {links.map((link, i) => (
            <a
              key={link.id}
              ref={(el) => (linkRefs.current[i] = el)}
              href={`#${link.id}`}
              className="text-sm font-semibold text-gray-100 hover:text-blue-400 transition relative group"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
