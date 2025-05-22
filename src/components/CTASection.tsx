import React from 'react';
import CTAButton from './CTAButton';

const CTASection: React.FC = () => {
  return (
    <section className="section-spacing bg-white/30">
      <div className="container-custom">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-jade-600 mb-6 hidden-content">
            Comece sua transformação hoje
          </h2>
          <div className="space-y-4">
            <CTAButton 
              text="QUERO COMEÇAR AGORA" 
              className="w-full md:w-auto text-center uppercase hidden-content"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;