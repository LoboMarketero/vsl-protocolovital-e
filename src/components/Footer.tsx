import React from 'react';
import CTAButton from './CTAButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="section-spacing">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full max-w-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-jade-600 text-center mb-6">
              Comece sua transformação hoje
            </h2>
            <CTAButton 
              text="ACESSAR MEU PROTOCOLO 4F AGORA" 
              className="w-full md:w-auto text-center uppercase"
            />
          </div>
          
          <div className="text-center text-gray-600 text-sm">
            <p>© Protocolo Intestinal Vital 4F – Todos os direitos reservados – {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;