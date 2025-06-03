"use client";

import React, { useState, useRef, useCallback } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiSend } from 'react-icons/fi';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      console.error("Execute reCAPTCHA not yet available");
      setStatusMessage("reCAPTCHA not ready. Please try again in a moment.");
      return;
    }

    setIsLoading(true);
    setStatusMessage(null);

    try {
      const token = await executeRecaptcha('contactFormSubmit');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, recaptchaToken: token }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage(result.message || 'Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage(result.message || 'Error sending message. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatusMessage('Error: Could not send message due to a network issue. Please try again later.');
    }

    setIsLoading(false);
  }, [executeRecaptcha, formData]);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/MKempler',
      label: 'MKempler',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/max-kempler/',
      label: 'max-kempler',
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:maxkempler@gmail.com',
      label: 'maxkempler@gmail.com',
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className={`w-full py-16 md:py-24 bg-cyber-bg transition-all duration-1000 ease-out 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="font-orbitron text-4xl md:text-5xl text-center text-cyber-accent mb-12 md:mb-16 tracking-wider">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Column: Contact Form */}
          <div className="bg-cyber-surface p-6 sm:p-8 rounded-lg shadow-xl shadow-cyber-accent/10 border border-cyber-accent/30">
            <h3 className="font-orbitron text-2xl text-cyber-accent mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-orbitron text-cyber-text-dim mb-1.5">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-text-dim/30 rounded-md text-cyber-text focus:ring-2 focus:ring-cyber-accent focus:border-cyber-accent outline-none transition-all duration-300 placeholder-cyber-text-dim/50 shadow-sm"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-orbitron text-cyber-text-dim mb-1.5">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                  className="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-text-dim/30 rounded-md text-cyber-text focus:ring-2 focus:ring-cyber-accent focus:border-cyber-accent outline-none transition-all duration-300 placeholder-cyber-text-dim/50 shadow-sm"
                  placeholder="Your Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-orbitron text-cyber-text-dim mb-1.5">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 bg-cyber-bg border border-cyber-text-dim/30 rounded-md text-cyber-text focus:ring-2 focus:ring-cyber-accent focus:border-cyber-accent outline-none transition-all duration-300 placeholder-cyber-text-dim/50 shadow-sm resize-none"
                  placeholder="Your Message..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full flex items-center justify-center font-orbitron px-6 py-3 bg-cyber-accent text-cyber-bg font-bold rounded-md shadow-lg shadow-cyber-accent/40 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyber-accent focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-cyber-bg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
              {statusMessage && (
                <p className={`mt-4 text-sm text-center ${statusMessage.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Social Links & Direct Contact Info */}
          <div className="space-y-8 mt-8 md:mt-0">
            <div>
              <h3 className="font-orbitron text-2xl text-cyber-primary mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 bg-cyber-surface rounded-md border border-cyber-primary/30 hover:border-cyber-primary/70 hover:bg-cyber-primary/10 transition-all duration-300 group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                    style={{ animationDelay: isVisible ? `${index * 150 + 400}ms` : undefined, animationFillMode: 'forwards'}}
                  >
                    <link.icon className="w-6 h-6 text-cyber-primary group-hover:text-pink-400 transition-colors duration-300 mr-4" />
                    <div>
                      <span className="block text-cyber-text font-semibold group-hover:text-cyber-primary transition-colors duration-300">{link.name}</span>
                      <span className="block text-xs text-cyber-text-dim group-hover:text-cyber-accent transition-colors duration-300">{link.label}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Optional: Add a small map or other visual element here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 