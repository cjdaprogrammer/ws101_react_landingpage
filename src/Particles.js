import React, { useEffect } from 'react';
import './Particles.css'; // Create this CSS file to style particles

const Particles = () => {
  useEffect(() => {
    const particles = document.querySelectorAll('.particle');

    particles.forEach(particle => {
      particle.style.top = `${Math.random() * 100}vh`;
      particle.style.left = `${Math.random() * 100}vw`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    });
  }, []);

  return (
    <>
      <div className="particle" id="particle1"></div>
      <div className="particle" id="particle2"></div>
      <div className="particle" id="particle3"></div>
      <div className="particle" id="particle4"></div>
      <div className="particle" id="particle5"></div>
      <div className="particle" id="particle6"></div>
    </>
  );
};

export default Particles;
