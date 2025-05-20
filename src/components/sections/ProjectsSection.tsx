
import React from 'react';
import Section3D from '../ui-3d/Section3D';
import Card3D from '../ui-3d/Card3D';
import Button3D from '../ui-3d/Button3D';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Neon Dreams',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'A futuristic web experience with 3D elements and neon aesthetics.',
      variant: 'cyan'
    },
    {
      title: 'Virtual Gallery',
      category: '3D Design',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Interactive 3D gallery showcasing digital art in a virtual space.',
      variant: 'magenta'
    },
    {
      title: 'Data Visualizer',
      category: 'Web Application',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'Interactive data visualization tool with real-time updates and 3D charts.',
      variant: 'blue'
    },
    {
      title: 'Motion Portfolio',
      category: 'Animation',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
      description: 'A portfolio website with advanced animation and interaction techniques.',
      variant: 'purple'
    }
  ];

  return (
    <Section3D id="projects" title="Projects" titleColor="magenta">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="perspective group">
              <Card3D 
                variant={project.variant as 'cyan' | 'magenta' | 'blue' | 'purple'} 
                className="h-full overflow-hidden"
              >
                <div className="relative overflow-hidden w-full h-48 mb-4 rounded-md">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button3D variant={project.variant as 'cyan' | 'magenta' | 'blue' | 'purple'} size="sm">
                      View Project
                    </Button3D>
                  </div>
                </div>
                <div className="px-2">
                  <span className={`text-neon-${project.variant} text-sm font-medium`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                </div>
              </Card3D>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button3D variant="magenta" size="lg">
            View All Projects
          </Button3D>
        </div>
      </div>
    </Section3D>
  );
};

export default ProjectsSection;
