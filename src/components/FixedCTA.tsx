import React, { useEffect, useState } from 'react';
import CTAButton from './CTAButton';

const FixedCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-lg p-4 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-jade-700 font-montserrat font-semibold text-center md:text-left mb-4 md:mb-0">
          Você está a 21 dias de uma nova relação com seu corpo.
        </p>
        
        <CTAButton 
          text="COMEÇAR MEU PROTOCOLO 4F AGORA" 
          className="w-full md:w-auto text-center"
        />
      </div>
    </div>
  );
};

export default FixedCTA;