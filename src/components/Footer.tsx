import React from 'react';
import CTAButton from './CTAButton';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 mt-4">
      <div className="container-custom">
        <div className="text-center mb-6">
          <CTAButton 
            text="ACESSAR MEU PROTOCOLO 4F AGORA" 
            className="w-full md:w-auto text-center uppercase"
          />
        </div>
        <div className="text-center text-gray-600 text-sm">
          <p>© Protocolo Intestinal Vital 4F – Todos os direitos reservados – {currentYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;