import React from 'react';
import useTypingEffect from '@/hooks/useTypingEffect';

const Hero = () => {
  const fullTitle = "Crafting Digital Realities";
  const { displayedText: typedTitle, isTypingComplete: titleIsTyped } = useTypingEffect(fullTitle, 80, 900);

  return (
    <section id="hero" className="w-full max-w-4xl text-center mb-32 opacity-0 animate-fade-in-up animation-delay-200" style={{ animationFillMode: 'forwards' }}>
      <h1 
        className="font-orbitron text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 opacity-0 animate-fade-in-up animation-delay-400 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] flex items-center justify-center"
        style={{ animationFillMode: 'forwards' }}
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-secondary via-pink-500 to-cyber-accent hover:brightness-125 transition-all duration-500">
          {typedTitle}
        </span>
        {!titleIsTyped && (
          <span className="inline-block w-1 h-10 sm:h-12 md:h-14 bg-cyber-accent ml-1 animate-pulse"></span>
        )}
      </h1>
      <p 
        className="text-lg sm:text-xl md:text-2xl text-cyber-text-dim mb-10 opacity-0 animate-fade-in-up animation-delay-600"
        style={{ animationFillMode: 'forwards' }}
      >
        Full-Stack Developer & Tech Enthusiast. Welcome to my cyber-domain.
      </p>
      <button 
        className="font-orbitron px-10 py-4 bg-cyber-primary text-cyber-bg font-bold rounded-md shadow-lg shadow-cyber-primary/40 transition-all duration-300 transform hover:scale-110 hover:shadow-cyber-primary/60 focus:outline-none focus:ring-4 focus:ring-cyber-primary focus:ring-opacity-75 opacity-0 animate-fade-in-up animation-delay-800 group relative overflow-hidden"
        style={{ animationFillMode: 'forwards' }}
      >
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
        <span className="relative z-10">Explore My Arsenal</span>
        <span className="absolute inset-0 rounded-md animate-subtle-pulse group-hover:animate-none"></span>
      </button>
    </section>
  );
};

export default Hero; 