
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'cyan' | 'magenta' | 'blue' | 'green' | 'purple';
  intensity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
}

const Card3D = React.forwardRef<HTMLDivElement, Card3DProps>(
  ({ className, variant = 'cyan', intensity = 'medium', children, ...props }, ref) => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const intensityFactor = intensity === 'low' ? 3 : intensity === 'medium' ? 5 : 8;
    
    const variantClasses = {
      cyan: "border-neon-cyan/20",
      magenta: "border-neon-magenta/20",
      blue: "border-neon-blue/20",
      green: "border-neon-green/20",
      purple: "border-neon-purple/20",
    };
    
    const variantGlow = {
      cyan: "before:shadow-[0_0_15px_4px_rgba(0,255,255,0.1)]",
      magenta: "before:shadow-[0_0_15px_4px_rgba(255,0,255,0.1)]",
      blue: "before:shadow-[0_0_15px_4px_rgba(0,128,255,0.1)]",
      green: "before:shadow-[0_0_15px_4px_rgba(0,255,128,0.1)]",
      purple: "before:shadow-[0_0_15px_4px_rgba(139,92,246,0.1)]",
    };
    
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * intensityFactor;
      const rotateY = -((e.clientX - centerX) / (rect.width / 2)) * intensityFactor;
      
      setRotate({ x: rotateX, y: rotateY });
    };
    
    const handleMouseLeave = () => {
      setRotate({ x: 0, y: 0 });
    };
    
    return (
      <div 
        ref={ref}
        className={cn(
          "perspective relative",
          className
        )}
        {...props}
      >
        <div
          style={{ 
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` 
          }}
          className={cn(
            "preserve-3d transition-transform duration-200 ease-out",
            "glass-card rounded-xl p-6",
            "before:absolute before:inset-0 before:rounded-xl before:-z-10",
            "before:opacity-60 before:blur-xl before:translate-y-1 before:translate-x-1",
            variantClasses[variant],
            variantGlow[variant]
          )}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {children}
        </div>
      </div>
    );
  }
);

Card3D.displayName = "Card3D";

export default Card3D;
