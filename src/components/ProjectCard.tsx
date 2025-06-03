"use client";
import React from 'react';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import MotionCard from './cards/MotionCard'; // Assuming MotionCard is in a 'cards' subdirectory
import type { Project } from '@/data/projectsData';

interface ProjectCardProps {
  project: Project;
  animationDelay?: number;
  borderColorClass?: string; // For the neonGlow shadow color, e.g., shadow-cyber-primary
  titleGlowClass?: string;   // For the text-glow effect on the title, e.g., text-glow-secondary
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  animationDelay = 0,
  borderColorClass = 'shadow-cyber-primary',
  titleGlowClass = 'text-glow-secondary',
}) => {
  return (
    <MotionCard
      className={`bg-cyber-bg/70 backdrop-blur-[2px] p-6 rounded-lg border border-transparent shadow-neonGlow ${borderColorClass} flex flex-col h-full group`}
      transition={{ duration: 0.4, delay: animationDelay }}
    >
      {/* Image */}
      <div className="w-full h-48 relative rounded-md mb-4 border-2 border-cyber-surface overflow-hidden group-hover:border-cyber-accent transition-colors duration-300">
        <Image 
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Optional: Overlay on image hover if desired */}
        {/* <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div> */}
      </div>

      {/* Datastream ID Removed */}
      {/* <p className="font-mono text-xs text-cyber-accent mb-2 tracking-wider">
        [ {project.datastreamId} ]
      </p> */}

      {/* Title */}
      <h3 className={`font-orbitron text-2xl text-cyber-text mb-4 ${titleGlowClass} group-hover:text-white transition-colors duration-300`}>
        {project.title}
      </h3>
      
      {/* Description */}
      <ul className="list-disc list-inside space-y-1.5 text-cyber-text-dim text-sm leading-relaxed mb-5 flex-grow">
        {project.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="font-orbitron text-sm text-cyber-text-dim mb-3 tracking-wide">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="bg-cyber-surface text-cyber-text-dim px-3 py-1.5 rounded text-xs font-mono hover:bg-cyber-accent hover:text-cyber-bg transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* GitHub Button */}
      {project.githubLink && (
        <a 
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-auto bg-cyber-primary text-cyber-bg font-orbitron py-3 px-4 rounded w-full flex items-center justify-center transition-all duration-300 shadow-neonGlow shadow-cyber-primary hover:bg-opacity-80 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyber-bg focus:ring-cyber-primary`}
        >
          <span className="mr-2.5"><FaGithub /></span>
          View on GitHub
        </a>
      )}
    </MotionCard>
  );
};

export default ProjectCard; 