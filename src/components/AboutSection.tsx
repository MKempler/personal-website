import React, { useRef } from 'react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

// placeholder icon imports - can be implemented later
// import { FaReact, FaJsSquare, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaLinux, FaJava, FaPython } from 'react-icons/fa';
// import { SiTypescript, SiPostgresql, SiMongodb, SiTailwindcss, SiSpringboot, SiPhp, SiMysql, SiMariadb, SiVuedotjs, SiKeras, SiNltk, SiJira } from 'react-icons/si';

const skillsData = [
  // Programming Languages
  { name: 'Java', category: 'Languages', level: 90 },
  { name: 'Python', category: 'Languages', level: 88 },
  { name: 'JavaScript (ES6+)', category: 'Languages', level: 85 },
  { name: 'TypeScript', category: 'Languages', level: 80 },
  { name: 'PHP', category: 'Languages', level: 70 },
  // Frameworks & Libraries
  { name: 'Spring Boot', category: 'Frameworks/Libraries', level: 85 },
  { name: 'React / Next.js', category: 'Frameworks/Libraries', level: 80 },
  { name: 'Node.js / Express.js', category: 'Frameworks/Libraries', level: 78 },
  { name: 'Vue.js', category: 'Frameworks/Libraries', level: 70 },
  { name: 'Keras', category: 'Frameworks/Libraries', level: 75 },
  { name: 'NLTK', category: 'Frameworks/Libraries', level: 75 },
  { name: 'Tailwind CSS', category: 'Frameworks/Libraries', level: 82 },
  // Databases
  { name: 'PostgreSQL', category: 'Databases', level: 80 },
  { name: 'MySQL', category: 'Databases', level: 75 },
  { name: 'MariaDB', category: 'Databases', level: 70 },
  { name: 'MongoDB', category: 'Databases', level: 65 },
  // DevOps & Tools
  { name: 'Docker', category: 'DevOps & Tools', level: 75 },
  { name: 'AWS', category: 'DevOps & Tools', level: 70 },
  { name: 'Linux', category: 'DevOps & Tools', level: 85 },
  { name: 'Git & GitHub', category: 'DevOps & Tools', level: 92 },
  { name: 'Jira', category: 'DevOps & Tools', level: 80 },
  { name: 'Logback', category: 'DevOps & Tools', level: 70 },
  { name: 'Spock Framework', category: 'DevOps & Tools', level: 70 },
  // Web Technologies
  { name: 'HTML5', category: 'Web Technologies', level: 90 },
  { name: 'CSS3', category: 'Web Technologies', level: 85 },
  // Methodologies
  { name: 'Agile / Scrum', category: 'Methodologies', level: 88 }, 
  // Concepts
  { name: 'REST APIs', category: 'Concepts', level: 90 }, // Assuming from general knowledge
];

const AboutSection = () => {
  const bio = "Hi! I am Max Kempler, a recent Compuer Science graduate from Marist University. I have strong Software Engineering experience working for The Center for Internet Security (CIS) As well as strong DevOps experience wokring as the sole student devops Engineer for Marist University. I am strongly passionate about Tech and in the advancment of Artificial inteligence and am actively seeking out roles to put my skills to the test!";
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className={`w-full py-16 md:py-24 bg-cyber-surface rounded-lg shadow-xl shadow-cyber-primary/10 border border-cyber-primary/30 transition-all duration-1000 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-orbitron text-4xl md:text-5xl text-center text-cyber-primary mb-12 md:mb-16 tracking-wider">
          [ User Profile: MK_DEV ]
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
          {/* Left Column: Bio */}
          <div className="md:col-span-3">
            <h3 className="font-orbitron text-2xl text-cyber-secondary mb-6">// Log Entry: Status Report</h3>
            <div className="space-y-4 text-cyber-text leading-relaxed prose prose-invert prose-sm md:prose-base max-w-none">
              {bio.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Skills Matrix */}
          <div className="md:col-span-2">
            <h3 className="font-orbitron text-2xl text-cyber-accent mb-6">// Skillset Analysis</h3>
            <div className="space-y-3 md:space-y-4">
              {skillsData.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className={`bg-cyber-bg p-3 rounded-md shadow-md border border-cyber-accent/20 hover:border-cyber-accent/50 transition-all duration-300 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: isVisible ? `${index * 100 + 200}ms` : undefined, animationFillMode: 'forwards' }}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <h4 className="font-semibold text-cyber-text text-xs sm:text-sm group-hover:text-cyber-accent transition-colors duration-300">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-cyber-text-dim/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-cyber-secondary to-cyber-accent h-2 rounded-full shadow-md shadow-cyber-accent/30 group-hover:shadow-cyber-accent/50 transition-all duration-500 ease-out"
                      style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection; 