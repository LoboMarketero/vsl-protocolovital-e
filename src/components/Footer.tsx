import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="section-spacing">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center text-gray-600 text-sm">
            <p>© Protocolo Intestinal Vital 4F – Todos os direitos reservados – {currentYear}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer