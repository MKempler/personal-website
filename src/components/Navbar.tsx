"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Next.js Link for client-side navigation if needed, but for #hash links, <a> is fine.
import { FiMenu, FiX, FiDownloadCloud } from 'react-icons/fi'; // Icons for menu, close, and resume

// Define navigation items
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const resumePath = "/assets/Max-Kempler-Resume.pdf";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Effect to add/remove class from body to prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden', 'md:overflow-auto');
    } else {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    }
    // Cleanup function to remove class if component unmounts while menu is open
    return () => {
      document.body.classList.remove('overflow-hidden', 'md:overflow-auto');
    };
  }, [isMobileMenuOpen]);

  // Add a handler to scroll to the top
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (isMobileMenuOpen) handleMobileLinkClick();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-cyber-bg/80 backdrop-blur-md shadow-lg shadow-cyber-primary/10 border-b border-cyber-surface/50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo / Home Link */}
        <a href="#hero" className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-primary tracking-wider hover:opacity-80 transition-opacity duration-300 hover:animate-pulse" onClick={handleLogoClick}>
          Max Kempler
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="font-orbitron text-sm lg:text-base text-cyber-text-dim hover:text-cyber-primary transition-all duration-300 tracking-wide relative group transform hover:-translate-y-0.5"
            >
              {item.label}
              <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-cyber-primary group-hover:w-full transition-all duration-300 ease-out"></span>
            </a>
          ))}
          <a 
            href={resumePath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-orbitron text-sm lg:text-base bg-cyber-accent hover:bg-yellow-300 text-cyber-bg px-4 py-2.5 rounded-md shadow-md hover:shadow-lg hover:shadow-cyber-accent/40 transition-all duration-300 transform hover:scale-105 inline-flex items-center group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>{/* Subtle sheen */}
            <span className="mr-2 relative z-10"><FiDownloadCloud /></span> 
            <span className="relative z-10">Resume <span className="hidden lg:inline ml-1"></span></span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            className="text-cyber-primary focus:outline-none p-2"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 flex items-start justify-center z-40">
          <div className="bg-cyber-surface/95 border-2 border-cyber-primary shadow-neonGlow shadow-cyber-primary/60 backdrop-blur-lg p-8 pt-10 rounded-xl max-w-sm w-[90%] mx-auto mt-6 flex flex-col items-center space-y-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={handleMobileLinkClick}
                className="font-orbitron text-2xl text-cyber-text hover:text-cyber-primary transition-colors duration-300 tracking-wide py-2 w-full text-center"
              >
                {item.label}
              </a>
            ))}
            <a 
              href={resumePath} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={handleMobileLinkClick}
              className="font-orbitron text-2xl bg-cyber-accent hover:bg-opacity-80 text-cyber-bg px-6 py-3 rounded-md shadow-md hover:shadow-lg hover:shadow-cyber-accent/30 transition-all duration-300 transform hover:scale-105 inline-flex items-center mt-4 w-full justify-center"
            >
               <span className="mr-2"><FiDownloadCloud /></span>Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar; 