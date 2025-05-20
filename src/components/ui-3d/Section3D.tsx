
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Section3DProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  titleColor?: 'cyan' | 'magenta' | 'blue' | 'green' | 'purple' | 'white';
  children: React.ReactNode;
}

const Section3D: React.FC<Section3DProps> = ({
  title,
  titleColor = 'white',
  children,
  className,
  ...props
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const titleColorClass = {
    cyan: 'text-neon-cyan neon-text',
    magenta: 'text-neon-magenta neon-text',
    blue: 'text-neon-blue neon-text',
    green: 'text-neon-green neon-text',
    purple: 'text-neon-purple neon-text',
    white: 'text-white',
  };
  
  return (
    <section
      ref={sectionRef}
      className={cn("min-h-screen w-full py-20 opacity-0", className)}
      {...props}
    >
      {title && (
        <h2 
          className={cn(
            "text-4xl md:text-5xl font-bold mb-12 text-center",
            titleColorClass[titleColor]
          )}
        >
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section3D;
