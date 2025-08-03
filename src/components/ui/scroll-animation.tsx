import React, { useState, useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  stagger?: number;
  staggerIndex?: number;
}

export function ScrollAnimation({ 
  children, 
  delay = 0, 
  className = "",
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  stagger = 0,
  staggerIndex = 0
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 计算总延迟时间：基础延迟 + 交错延迟
          const totalDelay = delay + (staggerIndex * stagger);
          
          setTimeout(() => {
            setIsVisible(true);
          }, totalDelay);
          
          // 一旦触发就停止观察
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, rootMargin, stagger, staggerIndex]);

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
    >
      {children}
    </div>
  );
} 