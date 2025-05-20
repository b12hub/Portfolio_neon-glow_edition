
import React, { useEffect, useRef } from 'react';
import Button3D from '../ui-3d/Button3D';

const HeroSection: React.FC = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cubeRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!cubeRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const rotateX = (clientY / innerHeight - 0.5) * 20;
      const rotateY = (clientX / innerWidth - 0.5) * 20;
      
      cubeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-neon-cyan/10 rounded-full filter blur-[100px] animate-float"></div>
        <div className="absolute bottom-[20%] right-[15%] w-[250px] h-[250px] bg-neon-magenta/10 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] bg-neon-blue/10 rounded-full filter blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
        <div className="lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="text-gradient bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-magenta neon-text">
              Creative Developer
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            I create stunning digital experiences with modern technology and creative design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button3D variant="magenta" size="lg">View Projects</Button3D>
            <Button3D variant="blue" size="lg">Contact Me</Button3D>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          {/* 3D Cube */}
          <div className="perspective w-[300px] h-[300px]">
            <div
              ref={cubeRef}
              className="preserve-3d relative w-full h-full transition-transform duration-500 ease-out animate-spin-slow"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Cube Faces */}
              <div className="absolute inset-0 backface-hidden border-2 border-neon-cyan/50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                   style={{ transform: 'translateZ(150px)' }}>
                <span className="text-neon-cyan text-4xl font-bold neon-text">FRONT</span>
              </div>
              <div className="absolute inset-0 backface-hidden border-2 border-neon-magenta/50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                   style={{ transform: 'rotateY(180deg) translateZ(150px)' }}>
                <span className="text-neon-magenta text-4xl font-bold neon-text">BACK</span>
              </div>
              <div className="absolute inset-0 backface-hidden border-2 border-neon-blue/50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                   style={{ transform: 'rotateY(90deg) translateZ(150px)' }}>
                <span className="text-neon-blue text-4xl font-bold neon-text">RIGHT</span>
              </div>
              <div className="absolute inset-0 backface-hidden border-2 border-neon-green/50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                   style={{ transform: 'rotateY(-90deg) translateZ(150px)' }}>
                <span className="text-neon-green text-4xl font-bold neon-text">LEFT</span>
              </div>
              <div className="absolute inset-0 backface-hidden border-2 border-neon-purple/50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                   style={{ transform: 'rotateX(90deg) translateZ(150px)' }}>
                <span className="text-neon-purple text-4xl font-bold neon-text">TOP</span>
              </div>
              <div className="absolute inset-0 backface-hidden border-2 border-neon-cyan/50 bg-black/20 backdrop-blur-sm flex items-center justify-center"
                   style={{ transform: 'rotateX(-90deg) translateZ(150px)' }}>
                <span className="text-neon-cyan text-4xl font-bold neon-text">BOTTOM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-70 hover:opacity-100 transition-opacity">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
