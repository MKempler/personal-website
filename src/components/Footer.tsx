import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-16 pt-8 pb-12 border-t border-cyber-surface/50 text-center">
      <p className="text-cyber-text-dim text-sm">
        &copy; {new Date().getFullYear()} Max Kempler. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer; 