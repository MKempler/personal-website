import React from 'react';
import Image from 'next/image'; // For optimized images, if we use actual images
import { FaGithub } from 'react-icons/fa'; // Example icon
import type { Project } from '@/data/projectsData'; // Import the Project type

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-cyber-bg rounded-lg shadow-lg overflow-hidden border border-cyber-secondary/40 hover:border-cyber-secondary/80 transition-all duration-300 group h-full flex flex-col">
      {/* Placeholder for image - you can use Next/Image if you have actual images in public folder */}
      {project.imagePlaceholder && (
        <div className="w-full h-48 bg-cyber-surface relative overflow-hidden">
          {/* Basic placeholder styling - replace with actual Image component or better placeholder */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/50 to-transparent"></div>
          <p className="absolute inset-0 flex items-center justify-center text-cyber-accent font-orbitron text-lg">
            [ {project.title.toUpperCase()}_DATASTREAM ]
          </p>
          {/* Example of using Next/Image if you had an image in public/placeholders/project-name.png 
          <Image 
            src={project.imagePlaceholder} 
            alt={`${project.title} placeholder`} 
            layout="fill" 
            objectFit="cover" 
            className="opacity-30 group-hover:opacity-50 transition-opacity duration-300"
          />
          */}
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-orbitron text-xl md:text-2xl text-cyber-secondary mb-3 group-hover:text-pink-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <ul className="list-disc list-inside space-y-1.5 text-cyber-text-dim text-xs sm:text-sm mb-4 flex-grow">
          {project.description.map((point, index) => (
            <li key={index} className="leading-relaxed">{point}</li>
          ))}
        </ul>

        <div className="mb-4">
          <h4 className="font-orbitron text-sm text-cyber-accent mb-2">// Tech Stack_</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 bg-cyber-accent/10 text-cyber-accent text-xs rounded-full border border-cyber-accent/30 hover:bg-cyber-accent/20 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.githubLink && (
          <a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-flex items-center justify-center px-4 py-2 bg-cyber-secondary/80 hover:bg-cyber-secondary text-cyber-bg font-orbitron text-sm rounded-md transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg group-hover:shadow-cyber-secondary/30 focus:outline-none focus:ring-2 focus:ring-cyber-secondary focus:ring-opacity-75"
          >
            <FaGithub className="mr-2" />
            View on GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 