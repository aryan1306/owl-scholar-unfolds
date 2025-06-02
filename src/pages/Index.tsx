
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import AcademicTree from '../components/AcademicTree';
import ResearchGalaxy from '../components/ResearchGalaxy';
import PhilanthropicWork from '../components/PhilanthropicWork';
import TeachingPhilosophy from '../components/TeachingPhilosophy';
import Contact from '../components/Contact';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />
      
      {/* Academic Journey */}
      <AcademicTree />
      
      {/* Research Portfolio */}
      <ResearchGalaxy />
      
      {/* Philanthropic Work */}
      <PhilanthropicWork />
      
      {/* Teaching Philosophy */}
      <TeachingPhilosophy />
      
      {/* Contact */}
      <Contact />
    </div>
  );
};

export default Index;
