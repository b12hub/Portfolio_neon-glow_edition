
import React, { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface Input3DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'cyan' | 'magenta' | 'blue' | 'green' | 'purple';
  label?: string;
}

const Input3D = forwardRef<HTMLInputElement, Input3DProps>(
  ({ className, variant = 'cyan', label, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    const variantClasses = {
      cyan: "border-neon-cyan/30 focus:border-neon-cyan focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]",
      magenta: "border-neon-magenta/30 focus:border-neon-magenta focus:shadow-[0_0_10px_rgba(255,0,255,0.3)]",
      blue: "border-neon-blue/30 focus:border-neon-blue focus:shadow-[0_0_10px_rgba(0,128,255,0.3)]",
      green: "border-neon-green/30 focus:border-neon-green focus:shadow-[0_0_10px_rgba(0,255,128,0.3)]",
      purple: "border-neon-purple/30 focus:border-neon-purple focus:shadow-[0_0_10px_rgba(139,92,246,0.3)]",
    };

    return (
      <div className="perspective w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "block mb-2 text-sm font-medium",
              `text-${variant === 'cyan' ? 'neon-cyan' : 
                variant === 'magenta' ? 'neon-magenta' : 
                variant === 'blue' ? 'neon-blue' : 
                variant === 'green' ? 'neon-green' : 
                'neon-purple'}`
            )}
          >
            {label}
          </label>
        )}
        <div className="relative perspective">
          <input
            id={inputId}
            ref={ref}
            className={cn(
              "w-full px-4 py-2 bg-black/70 backdrop-blur-sm",
              "border-2 rounded-md",
              "text-white placeholder:text-gray-400",
              "transition-all duration-300 ease-out",
              "focus:outline-none focus:ring-0",
              variantClasses[variant],
              className
            )}
            {...props}
          />
          <div
            className={cn(
              "absolute inset-0 -z-10",
              "bg-gradient-to-br from-black to-gray-900 opacity-50",
              "rounded-md blur-sm"
            )}
          />
        </div>
      </div>
    );
  }
);

Input3D.displayName = "Input3D";

export default Input3D;
