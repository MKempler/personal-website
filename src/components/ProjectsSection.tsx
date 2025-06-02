import React, { useRef } from 'react';
import { projectsData } from '@/data/projectsData';
import ProjectCard from './ProjectCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className={`w-full py-16 md:py-24 transition-all duration-1000 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-orbitron text-4xl md:text-5xl text-center text-cyber-secondary mb-12 md:mb-16 tracking-wider">
          [ Sector: Projects ] // Armory Showcase
        </h2>
        
        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {projectsData.map((project, index) => (
              <div 
                key={project.id}
                className={`transition-all duration-500 ease-out ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: isVisible ? `${index * 200 + 300}ms` : undefined, animationFillMode: 'forwards'}}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-cyber-text-dim">
            <p>// No project data loaded. Standby for new transmissions...</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 