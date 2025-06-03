"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MotionCard from './MotionCard';

interface Skill {
  name: string;
  // level?: number; // Level is no longer used for display
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
  animationDelay?: number;
  glowColorClass?: string; // e.g., 'text-cyber-primary', 'text-cyber-accent' for the title's direct color
  titleGlowEffectClass?: string; // e.g., 'text-glow-primary' for the CSS glow effect
  borderColorClass?: string; // e.g., 'shadow-cyber-primary' to set the neonGlow color
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills,
  animationDelay = 0,
  glowColorClass = 'text-cyber-primary',
  titleGlowEffectClass = 'text-glow-primary',
  borderColorClass = 'shadow-cyber-primary' // Default border/glow color
}) => {
  return (
    <MotionCard
      className={`bg-cyber-bg/70 backdrop-blur-[2px] p-6 rounded-lg border border-transparent shadow-neonGlow ${borderColorClass} min-h-[220px] flex flex-col`}
      transition={{ duration: 0.4, delay: animationDelay }}
    >
      <h3 className={`font-orbitron mb-5 tracking-wide ${glowColorClass} ${titleGlowEffectClass} text-xl lg:text-2xl break-words min-w-0`}>
        {`//\u00A0${title}`}
      </h3>
      <div className="flex flex-wrap gap-3 flex-grow items-start">
        {skills.map((skill, index) => (
          <motion.span
            key={skill.name}
            className="bg-cyber-surface/80 text-cyber-text font-mono text-sm px-4 py-2 rounded-md border border-cyber-text-dim/50 hover:border-cyber-accent hover:text-cyber-accent transition-all duration-200 cursor-default"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </MotionCard>
  );
};

export default SkillCard; 