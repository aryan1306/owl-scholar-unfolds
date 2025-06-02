
import React, { useEffect, useState } from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'linear-gradient(45deg, rgba(212, 175, 55, 0.1) 0%, rgba(15, 123, 108, 0.1) 100%)',
        }}
      />
      
      {/* Floating Academic Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-4 md:left-10 w-12 md:w-16 h-16 md:h-20 bg-academia-cream rounded shadow-lg floating-element opacity-60"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <div className="p-1 md:p-2 text-academia-deep-blue text-xs font-cormorant">PhD</div>
        </div>
        <div 
          className="absolute top-40 right-4 md:right-20 w-16 md:w-20 h-12 md:h-16 bg-academia-parchment rounded shadow-md floating-element opacity-50"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <div className="p-1 md:p-2 text-academia-forest-green text-xs font-cormorant">Philosophy</div>
        </div>
        <div 
          className="absolute bottom-40 left-4 md:left-20 w-14 md:w-18 h-14 md:h-18 bg-academia-gold/20 rounded-full floating-element opacity-40"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <GraduationCap className="w-5 md:w-6 h-5 md:h-6 text-academia-gold m-2 md:m-3" />
        </div>
        <div 
          className="absolute top-60 right-4 md:right-10 w-12 md:w-14 h-14 md:h-18 bg-academia-emerald/20 rounded floating-element opacity-30"
          style={{ transform: `translateY(${scrollY * 0.25}px)` }}
        >
          <BookOpen className="w-4 md:w-5 h-4 md:h-5 text-academia-emerald m-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 md:px-6">
        <div className="space-y-6 md:space-y-8 animate-fade-in">
          {/* Professor Image */}
          <div className="mb-8 md:mb-12">
            <div className="relative mx-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
              <img 
                src="https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=400&h=400&fit=crop&crop=face"
                alt="Dr. Kartikeya Raj Gupta"
                className="w-full h-full object-cover rounded-full border-4 border-academia-gold shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-academia-deep-blue/20 to-transparent"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-cormorant font-light text-gradient leading-tight">
            Dr. Kartikeya Raj Gupta
          </h1>
          
          {/* Subtitle with animated underline */}
          <div className="relative">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-cormorant font-normal text-academia-cream">
              Bridging Philosophy & Society
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-academia-gold animate-pulse"></div>
          </div>
          
          {/* Institution */}
          <p className="text-base md:text-lg lg:text-xl text-academia-cream/80 font-inter">
            Professor of Sociology & Philosophy • O.P. Jindal University
          </p>
          
          {/* Academic Credentials */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-6 md:mt-8">
            <div className="flex items-center space-x-2 bg-academia-forest-green/30 px-3 md:px-4 py-2 rounded-full">
              <GraduationCap className="w-4 md:w-5 h-4 md:h-5 text-academia-gold" />
              <span className="text-academia-cream font-inter text-xs md:text-sm">5 Philosophy Degrees</span>
            </div>
            <div className="flex items-center space-x-2 bg-academia-emerald/30 px-3 md:px-4 py-2 rounded-full">
              <BookOpen className="w-4 md:w-5 h-4 md:h-5 text-academia-gold" />
              <span className="text-academia-cream font-inter text-xs md:text-sm">PhD in Sociology</span>
            </div>
            <div className="flex items-center space-x-2 bg-academia-gold/20 px-3 md:px-4 py-2 rounded-full">
              <Users className="w-4 md:w-5 h-4 md:h-5 text-academia-gold" />
              <span className="text-academia-cream font-inter text-xs md:text-sm">Interdisciplinary Scholar</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-8 md:mt-12">
            <button className="btn-academic group px-6 md:px-8 py-2 md:py-3 text-base md:text-lg">
              <span className="relative z-10">Explore Academic Journey</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-gentle-bounce">
        <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-academia-gold to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
