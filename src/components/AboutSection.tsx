"use client";
import React, { useRef } from 'react';
// import useIntersectionObserver from '@/hooks/useIntersectionObserver'; // No longer needed
import { motion } from 'framer-motion'; // Keep for title animation if not using MotionCard for it
import SkillCard from './cards/SkillCard';
import MotionCard from './cards/MotionCard'; // Import MotionCard

// placeholder icon imports - can be implemented later
// import { FaReact, FaJsSquare, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaLinux, FaJava, FaPython } from 'react-icons/fa';
// import { SiTypescript, SiPostgresql, SiMongodb, SiTailwindcss, SiSpringboot, SiPhp, SiMysql, SiMariadb, SiVuedotjs, SiKeras, SiNltk, SiJira } from 'react-icons/si';

const skillsData = [
  // Programming Languages
  { name: 'Java', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript (ES6+)', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'PHP', category: 'Languages' },
  // Frameworks & Libraries
  { name: 'Spring Boot', category: 'Frameworks & Libraries' },
  { name: 'React / Next.js', category: 'Frameworks & Libraries' },
  { name: 'Node.js / Express.js', category: 'Frameworks & Libraries' },
  { name: 'Vue.js', category: 'Frameworks & Libraries' },
  { name: 'Keras', category: 'Frameworks & Libraries' },
  { name: 'NLTK', category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries' },
  // Databases
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'MariaDB', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  // DevOps & Tools
  { name: 'Docker', category: 'DevOps & Tools' },
  { name: 'AWS', category: 'DevOps & Tools' },
  { name: 'Linux', category: 'DevOps & Tools' },
  { name: 'Git & GitHub', category: 'DevOps & Tools' },
  { name: 'Jira', category: 'DevOps & Tools' },
  { name: 'Logback', category: 'DevOps & Tools' },
  { name: 'Spock Framework', category: 'DevOps & Tools' },
  // Web Technologies - New Category
  { name: 'HTML5', category: 'Web Technologies' },
  { name: 'CSS3', category: 'Web Technologies' },
  // Methodologies & Concepts - Renamed & Focused Category
  { name: 'Agile / Scrum', category: 'Methodologies & Concepts' }, 
  { name: 'REST APIs', category: 'Methodologies & Concepts' },
];

const AboutSection = () => {
  const bio = "Hi! I'm Max Kempler, a recent Computer Science graduate from Marist University, with minors in Information Technology and Information Systems.\nI have a strong background in Software Engineering from my time at the Center for Internet Security (CIS), along with hands-on DevOps experience as the sole student DevOps Engineer at Marist University.\nI'm deeply passionate about technology, especially in advancing artificial intelligence, and I'm actively seeking roles where I can apply and expand my skills.";
  
  const sectionRef = useRef<HTMLDivElement>(null); 

  const categorizedSkills: Record<string, Array<{name: string}>> = skillsData.reduce((acc, skill) => {
    const { category, name } = skill;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ name });
    return acc;
  }, {} as Record<string, Array<{name: string}>>);

  const skillCategoriesOrder = [
    'Languages',
    'Frameworks & Libraries',
    'Databases',
    'DevOps & Tools',
    'Web Technologies', // New category added
    'Methodologies & Concepts' // Renamed category
  ];

  let cardAnimationBaseDelay = 0.1;

  // Define the cycle of colors and glows
  const accentStyles = [
    { glowColor: 'text-cyber-primary', titleGlow: 'text-glow-primary', neonBorderColor: 'shadow-cyber-primary' },
    { glowColor: 'text-cyber-accent', titleGlow: 'text-glow-accent', neonBorderColor: 'shadow-cyber-accent' },
    { glowColor: 'text-cyber-secondary', titleGlow: 'text-glow-secondary', neonBorderColor: 'shadow-cyber-secondary' },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="w-full py-20 md:py-28 bg-cyber-surface rounded-xl shadow-2xl shadow-cyber-primary/20 border border-cyber-primary/40"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.h2 
          className="font-orbitron text-4xl md:text-5xl lg:text-6xl text-center text-glow-secondary mb-12 md:mb-16 tracking-wider title-text-shadow"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          About Me
        </motion.h2>
        
        {/* Grid Container: Added mt-16 for header-content gap, updated grid classes, added grid-auto-flow-dense */}
        <div className="flex flex-col items-center justify-center min-h-[40vh] mt-16">
          {/* Bio Card: Uses MotionCard, xl:col-span-full, p-6, max-w-[60ch] for text */}
          <MotionCard
            className="bg-cyber-bg/80 backdrop-blur-[3px] p-10 sm:p-12 rounded-2xl border border-cyber-secondary/60 shadow-neonGlow shadow-cyber-secondary/80 max-w-2xl w-full mx-auto flex flex-col items-center"
            transition={{duration: 0.4, delay: cardAnimationBaseDelay}}
          >
            <h3 className="font-orbitron text-2xl md:text-3xl text-cyber-accent mb-6 tracking-wider text-center">Bio</h3>
            <div className="space-y-7 text-cyber-text leading-relaxed text-lg md:text-xl font-mono prose prose-invert max-w-prose w-full text-center" style={{letterSpacing: '0.01em'}}>
              {bio.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </MotionCard>
        </div>

        {/* My Skills Heading */}
        <h3 className="font-orbitron text-xl md:text-2xl text-cyber-accent font-semibold text-center mb-2 mt-10 pb-2 border-b-2 border-cyber-accent/40 w-full max-w-3xl mx-auto" style={{letterSpacing: '0.04em'}}>
          My Skills
        </h3>

         {/* Skill Cards */}
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 grid-auto-flow-dense mt-6">
          {skillCategoriesOrder.map((categoryName, index) => {
            const skills = categorizedSkills[categoryName] || [];
            if (skills.length === 0) return null;
            
            // Increment delay for subsequent cards
            const currentCardDelay = cardAnimationBaseDelay + (index + 1) * 0.07; 
            
            const styleChoice = accentStyles[index % accentStyles.length]; // Cycle through accent styles

            return (
              <SkillCard 
                key={categoryName}
                title={categoryName}
                skills={skills}
                animationDelay={currentCardDelay} // Pass calculated delay to SkillCard, which passes to its MotionCard
                glowColorClass={styleChoice.glowColor}
                titleGlowEffectClass={styleChoice.titleGlow}
                borderColorClass={styleChoice.neonBorderColor} // For the SkillCard's neonGlow shadow color
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 