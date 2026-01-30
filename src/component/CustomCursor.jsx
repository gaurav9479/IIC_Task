import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power2.out'
      });
    };

    const handleHoverStart = () => {
      setIsHovering(true);
      gsap.to(cursor, { scale: 0.5, duration: 0.3 });
      gsap.to(follower, { 
        scale: 3, 
        backgroundColor: 'rgba(59, 130, 246, 0.2)', 
        borderColor: 'rgba(59, 130, 246, 0.5)', 
        duration: 0.3 
      });
    };

    const handleHoverEnd = () => {
      setIsHovering(false);
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { 
        scale: 1, 
        backgroundColor: 'transparent', 
        borderColor: 'rgba(255, 255, 255, 0.5)', 
        duration: 0.3 
      });
    };

    window.addEventListener('mousemove', moveCursor);


    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });


    const observer = new MutationObserver((mutations) => {
      const newInteractiveElements = document.querySelectorAll('a, button, .interactive');
      newInteractiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2 hidden sm:block"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hidden sm:block"
      />
    </>
  );
}
