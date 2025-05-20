
import React from 'react';
import Section3D from '../ui-3d/Section3D';
import Card3D from '../ui-3d/Card3D';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: '💻', description: 'Building responsive and interactive user interfaces with modern web technologies.' },
    { name: '3D Design', icon: '🎮', description: 'Creating immersive 3D experiences with WebGL and Three.js.' },
    { name: 'UI/UX Design', icon: '🎨', description: 'Designing beautiful and intuitive user interfaces with a focus on user experience.' },
    { name: 'Animation', icon: '✨', description: 'Adding life to websites with smooth animations and transitions.' },
  ];

  return (
    <Section3D id="about" title="About Me" titleColor="cyan">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              Crafting digital experiences with <span className="text-neon-magenta neon-text">passion</span> and <span className="text-neon-blue neon-text">precision</span>
            </h3>
            <p className="text-gray-300 mb-6">
              I'm a creative developer specialized in building exceptional digital experiences. With a strong foundation in both design and development, I bring a unique perspective to every project I work on.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in the digital world started over 5 years ago, and since then I've been constantly learning and exploring new technologies to push the boundaries of what's possible on the web.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-neon-cyan font-bold mb-2">5+</h4>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-neon-magenta font-bold mb-2">50+</h4>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-neon-blue font-bold mb-2">30+</h4>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div>
                <h4 className="text-neon-purple font-bold mb-2">3</h4>
                <p className="text-gray-400">Awards Won</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card3D 
                key={index} 
                variant={index % 4 === 0 ? 'cyan' : index % 4 === 1 ? 'magenta' : index % 4 === 2 ? 'blue' : 'purple'}
                className="h-full"
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-white">{skill.name}</h4>
                <p className="text-gray-300 text-sm">{skill.description}</p>
              </Card3D>
            ))}
          </div>
        </div>
      </div>
    </Section3D>
  );
};

export default AboutSection;
