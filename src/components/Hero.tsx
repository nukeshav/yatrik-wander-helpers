
import React, { useState, useEffect } from 'react';
import HeroText from './hero/HeroText';
import HeroAppPreview from './hero/HeroAppPreview';
import { destinations } from './hero/heroData';

const Hero = () => {
  const [currentDestIndex, setCurrentDestIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestIndex((prev) => (prev + 1) % destinations.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const goToNextDestination = () => {
    setCurrentDestIndex((prev) => (prev + 1) % destinations.length);
  };

  const goToPrevDestination = () => {
    setCurrentDestIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-r from-yatrik-yellow/60 via-yatrik-primary/30 to-yatrik-purple/20 dark:from-yatrik-purple/50 dark:via-yatrik-darkBg/80 dark:to-yatrik-darkBg theme-transition">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Text content */}
          <HeroText 
            destinations={destinations}
            currentDestIndex={currentDestIndex}
            setCurrentDestIndex={setCurrentDestIndex}
          />
          
          {/* App preview */}
          <HeroAppPreview 
            destinations={destinations}
            currentDestIndex={currentDestIndex}
            goToPrevDestination={goToPrevDestination}
            goToNextDestination={goToNextDestination}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
