import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FadeUpAnimation = ({ children }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    const childElements = element.children;

    gsap.set(childElements, { y: 50, opacity: 0 });

    ScrollTrigger.batch(childElements, {
      onEnter: (batch) => gsap.to(batch, { 
        opacity: 1, 
        y: 0, 
        stagger: 0.15, 
        duration: 0.8,
        ease: 'power3.out'
      }),
      onLeave: (batch) => gsap.to(batch, { 
        opacity: 0, 
        y: -50, 
        stagger: 0.1, 
        duration: 0.6
      }),
      onEnterBack: (batch) => gsap.to(batch, { 
        opacity: 1, 
        y: 0, 
        stagger: 0.1, 
        duration: 0.6
      }),
      onLeaveBack: (batch) => gsap.to(batch, { 
        opacity: 0, 
        y: 50, 
        stagger: 0.1, 
        duration: 0.6
      }),
      start: "top 80%",
      end: "bottom 20%",
      markers: false // set to true for debugging
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <div ref={elementRef}>{children}</div>;
};

export default FadeUpAnimation;