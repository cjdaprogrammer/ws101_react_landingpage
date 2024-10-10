import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    // Function to show the about section and scroll into view
    const showAboutSection = () => {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        aboutSection.classList.add('show');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Event handler for the Get Started button
    const handleGetStartedClick = (event) => {
      event.preventDefault();
      showAboutSection();
    };

    // Event handler for navigation links
    const handleNavLinkClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Add event listeners to the Get Started button and About link
    const getStartedButton = document.querySelector('.get-started-button');
    const aboutLink = document.querySelector('a[href="#about"]');
    if (getStartedButton) getStartedButton.addEventListener('click', handleGetStartedClick);
    if (aboutLink) aboutLink.addEventListener('click', handleGetStartedClick);

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .get-started-button');
    navLinks.forEach((link) => {
      link.addEventListener('click', handleNavLinkClick);
    });

    // Cleanup function to remove event listeners when the component is unmounted
    return () => {
      if (getStartedButton) getStartedButton.removeEventListener('click', handleGetStartedClick);
      if (aboutLink) aboutLink.removeEventListener('click', handleGetStartedClick);
      navLinks.forEach((link) => {
        link.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      {/* The rest of your JSX structure for the app goes here */}
    </div>
  );
};

export default App;
