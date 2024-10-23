// main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Max Kempler's Personal Website!");
  
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const smMenu = document.querySelector('.header__sm-menu');
    const body = document.body;
  
    if (hamburgerMenu && smMenu) {
      // Initialize ARIA attributes
      hamburgerMenu.setAttribute('aria-expanded', 'false');
      smMenu.setAttribute('aria-hidden', 'true');
  
      // Function to toggle the menu
      const toggleMenu = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        hamburgerMenu.classList.toggle('active');
        smMenu.classList.toggle('header__sm-menu--active');
        body.classList.toggle('no-scroll');
  
        // Update ARIA attributes for accessibility
        const isActive = hamburgerMenu.classList.contains('active');
        hamburgerMenu.setAttribute('aria-expanded', isActive);
        smMenu.setAttribute('aria-hidden', !isActive);
      };
  
      // Toggle Hamburger Menu on Click
      hamburgerMenu.addEventListener('click', toggleMenu);
  
      // Toggle Hamburger Menu on Enter or Space Key
      hamburgerMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleMenu(e);
        }
      });
  
      // Close the menu when clicking outside of it
      document.addEventListener('click', (e) => {
        if (!hamburgerMenu.contains(e.target) && !smMenu.contains(e.target)) {
          if (hamburgerMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            smMenu.classList.remove('header__sm-menu--active');
            body.classList.remove('no-scroll');
  
            // Update ARIA attributes
            hamburgerMenu.setAttribute('aria-expanded', 'false');
            smMenu.setAttribute('aria-hidden', 'true');
          }
        }
      });
  
      // Close the menu when pressing the Esc key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (hamburgerMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            smMenu.classList.remove('header__sm-menu--active');
            body.classList.remove('no-scroll');
  
            // Update ARIA attributes
            hamburgerMenu.setAttribute('aria-expanded', 'false');
            smMenu.setAttribute('aria-hidden', 'true');
          }
        }
      });
  
      // Close the menu when a mobile menu link is clicked
      const mobileLinks = smMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (hamburgerMenu.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            smMenu.classList.remove('header__sm-menu--active');
            body.classList.remove('no-scroll');
  
            // Update ARIA attributes
            hamburgerMenu.setAttribute('aria-expanded', 'false');
            smMenu.setAttribute('aria-hidden', 'true');
          }
        });
      });
    } else {
      console.warn("Hamburger menu elements not found in the DOM.");
    }
  });
