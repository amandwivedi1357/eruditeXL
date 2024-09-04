import React, { useRef, useEffect, useState } from 'react';

const ScrollRevealWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1 // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrollPercentage = 1 - (rect.top / window.innerHeight);
        setScrollProgress(Math.min(Math.max(scrollPercentage, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={ref}
      style={{
        width: isVisible ? `${scrollProgress * 100}%` : '0%',
        overflow: 'hidden',
        transition: 'width 0.3s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ScrollRevealWrapper;