import React from 'react';
import CTAButton from './CTAButton';

const Guarantee: React.FC = () => {
  return (
    <section className="section-spacing bg-white/30" id="guarantee">
      <div className="container-custom">
        <div className="max-w-lg mx-auto mb-4">
          <img 
            src="https://i.postimg.cc/h4X7FFjC/Chat-GPT-Image-19-may-2025-01-58-07.png" 
            alt="Guarantee" 
            className="w-full h-auto"
          />
        </div>
        <div className="max-w-xl mx-auto">
          <CTAButton 
            text="ACESSAR MEU PROTOCOLO 4F AGORA" 
            className="w-full md:w-auto text-center uppercase hidden-content"
          />
        </div>
      </div>
    </section>
  );
};

export default Guarantee;