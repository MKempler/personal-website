import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-16 pt-8 pb-12 border-t border-cyber-surface/50 text-center">
      <p className="text-cyber-text-dim text-sm">
        &copy; {new Date().getFullYear()} Max Kempler. All rights reserved.
      </p>
      <p className="text-cyber-text-dim text-xs mt-2 px-4">
        This site is protected by reCAPTCHA and the Google {' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary underline">
          Privacy Policy
        </a>{' '}and{' '}
        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-primary underline">
          Terms of Service
        </a>{' '}apply.
      </p>
    </footer>
  );
};

export default Footer; 