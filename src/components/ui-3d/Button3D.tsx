
import React from 'react';
import { cn } from '@/lib/utils';

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'magenta' | 'blue' | 'green' | 'purple';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
  children: React.ReactNode;
}

const Button3D = React.forwardRef<HTMLButtonElement, Button3DProps>(
  ({ className, variant = 'cyan', size = 'md', glowing = false, children, ...props }, ref) => {
    
    const variantClasses = {
      cyan: "border-neon-cyan text-neon-cyan hover:shadow-[0_0_10px_2px_#00FFFF]",
      magenta: "border-neon-magenta text-neon-magenta hover:shadow-[0_0_10px_2px_#FF00FF]",
      blue: "border-neon-blue text-neon-blue hover:shadow-[0_0_10px_2px_#0080FF]",
      green: "border-neon-green text-neon-green hover:shadow-[0_0_10px_2px_#00FF80]",
      purple: "border-neon-purple text-neon-purple hover:shadow-[0_0_10px_2px_#8B5CF6]",
    };
    
    const sizeClasses = {
      sm: "py-1.5 px-3 text-sm",
      md: "py-2 px-4 text-base",
      lg: "py-3 px-6 text-lg",
    };
    
    const glowingClass = glowing ? `shadow-[0_0_10px_0px_${variant === 'cyan' ? '#00FFFF' : 
      variant === 'magenta' ? '#FF00FF' : 
      variant === 'blue' ? '#0080FF' : 
      variant === 'green' ? '#00FF80' : 
      '#8B5CF6'}]` : '';
    
    return (
      <div className="perspective">
        <button
          ref={ref}
          className={cn(
            "button-3d transform-gpu border-2 font-medium rounded-md backdrop-blur-sm transition-all duration-300",
            "hover:translate-y-[-2px] hover:translate-z-[10px]",
            "active:translate-y-[1px] active:translate-z-[0px]",
            "focus:outline-none focus:ring-2 focus:ring-white/20",
            variantClasses[variant],
            sizeClasses[size],
            glowingClass,
            className
          )}
          {...props}
        >
          <span className="relative z-10">{children}</span>
          <div className="absolute inset-0 bg-black/40 -z-10 rounded-md backdrop-blur-sm"></div>
        </button>
      </div>
    );
  }
);

Button3D.displayName = "Button3D";

export default Button3D;
