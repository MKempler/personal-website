"use client";
import React, { useRef } from 'react';
import { projectsData } from '@/data/projectsData';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  let cardAnimationDelay = 0.1;

  const accentStyles = [
    { titleGlow: 'text-glow-secondary', borderColor: 'shadow-cyber-secondary' },
    { titleGlow: 'text-glow-accent', borderColor: 'shadow-cyber-accent' },
    { titleGlow: 'text-glow-primary', borderColor: 'shadow-cyber-primary' },
  ];

  return (
    <section 
      id="projects" 
      className="w-full py-20 md:py-28 bg-cyber-bg"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="font-orbitron text-4xl md:text-5xl lg:text-6xl text-center text-cyber-secondary mb-16 md:mb-20 tracking-wider text-glow-secondary title-text-shadow"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Projects
        </motion.h2>
        
        {projectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-12">
            {projectsData.map((project, index) => {
              const currentCardDelay = cardAnimationDelay + index * 0.1;
              const styleChoice = accentStyles[index % accentStyles.length];
              return (
                <ProjectCard 
                  key={project.datastreamId}
                  project={project} 
                  animationDelay={currentCardDelay}
                  borderColorClass={styleChoice.borderColor}
                  titleGlowClass={styleChoice.titleGlow}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center text-cyber-text-dim py-10">
            <p className="font-orbitron text-xl">No projects to display at the moment.</p>
            <p className="font-mono text-sm mt-2">Please check back soon.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection; 